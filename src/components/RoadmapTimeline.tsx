"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Milestone {
    id: string;
    side: "left" | "right";
    label: string;          // small caption (e.g. "1st Step" or "Frontend branch")
    title: string;          // main text
    sub?: string;           // optional sub-text
    big?: boolean;          // big node == major stage
}

const milestones: Milestone[] = [
    {
        id: "start",
        side: "right",
        label: "First steps",
        title: "Первые шаги",
        sub: "Basic HTML & CSS",
        big: true,
    },
    {
        id: "step-it",
        side: "left",
        label: "2016",
        title: "Step IT Academy",
        big: true,
    },
    {
        id: "john-paul",
        side: "right",
        label: "2017–2018",
        title: "John Paul II Academy",
    },
    {
        id: "self-study",
        side: "left",
        label: "2019–2022",
        title: "Self-study & Side Projects",
    },
    {
        id: "clearmedia",
        side: "right",
        label: "2023",
        title: "Clearmedia Internship",
        sub: "Full-stack experience",
        big: true,
    },
];

// animation variants
const lineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
        scaleY: 1,
        transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
    },
};

const nodeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: 0.4 + i * 0.2, duration: 0.4, ease: "backOut" },
    }),
};

export default function RoadmapTimeline() {
    // trigger animation when component in viewport (once)
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-20%" });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    return (
        <section
            ref={ref}
            className="relative mx-auto w-[60vw] py-24 text-white font-sans select-none"
        >
            {/* central vertical line */}
            <motion.span
                className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-white/30"
                variants={lineVariants}
                initial="hidden"
                animate={controls}
            />

            {/* milestones */}
            <ul className="space-y-24">
                {milestones.map((m, i) => (
                    <motion.li
                        key={m.id}
                        custom={i}
                        variants={nodeVariants}
                        initial="hidden"
                        animate={controls}
                        className="relative flex items-start"
                    >
                        {/* connector line from node to text */}
                        <span
                            className={`absolute top-2 ${
                                /* horizontal line */
                                m.side === "left" ? "right-1/2 mr-2" : "left-1/2 ml-2"
                                } h-px w-8 bg-white/30`}
                        />

                        {/* node */}
                        <span
                            className={`absolute left-1/2 -translate-x-1/2 w-${m.big ? "4" : "3"
                                } h-${m.big ? "4" : "3"} rounded-full bg-white ${m.big ? "shadow-md" : ""}`}
                        ></span>

                        {/* content */}
                        <div
                            className={`max-w-[18rem] ${m.side === "left" ? "ml-auto pr-8 text-right" : "pl-8"
                                }`}
                        >
                            {m.label && (
                                <p className="text-xs uppercase tracking-wide text-console-green mb-1">
                                    {m.label}
                                </p>
                            )}
                            <h3
                                className={`${m.big ? "text-lg font-semibold" : "text-base font-medium"
                                    }`}
                            >
                                {m.title}
                            </h3>
                            {m.sub && (
                                <p className="text-xs text-neutral-400 mt-1">{m.sub}</p>
                            )}
                        </div>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
