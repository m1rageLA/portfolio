"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
    LucideIcon,
    BookOpen,
    GraduationCap,
    Code2,
    Briefcase,
    Award,
    Users,
    ShoppingCart,
    Globe,
} from "lucide-react";

/*********************************
 * Data types & roadmap data
 *********************************/
interface Milestone {
    id: string;
    label: string;
    title: string;
    sub?: string;
    icon: LucideIcon;
    big?: boolean;
}

const milestones: Milestone[] = [
    {
        id: "start",
        label: "2017",
        title: "First steps",
        sub: "Basic HTML & CSS",
        icon: BookOpen,
    },
    {
        id: "step-it",
        label: "2018",
        title: "Step IT Academy",
        sub: "3‑year programme: programming & design",
        icon: GraduationCap,
        big: true,
    },
    {
        id: "first-commercial",
        label: "2020",
        title: "First Commercial Project",
        sub: "Landing page for local business",
        icon: Briefcase,
    },
    {
        id: "john-paul",
        label: "2022",
        title: "John Paul II Academy",
        icon: GraduationCap,
    },
    {
        id: "self-study",
        label: "2023",
        title: "Self‑study",
        sub: "JS, TS, React, Node – 10+ personal projects",
        icon: Code2,
    },
    {
        id: "clearmedia",
        label: "2023",
        title: "Clearmedia Internship",
        sub: "Full‑stack experience",
        icon: Briefcase,
        big: true,
    },
    {
        id: "hackathon-2024",
        label: "2024",
        title: "Hackathon Finalist",
        sub: "Reached final round (Top‑5)",
        icon: Award,
        big: true,
    },
    {
        id: "frontend-lead-edu",
        label: "2024",
        title: "Frontend Lead – EdTech Platform",
        sub: "Agile / Scrum leadership",
        icon: Users,
    },
    {
        id: "ecom-lead",
        label: "2025",
        title: "Full‑Team Lead – E‑commerce",
        sub: "Agile / Scrum, 6‑month build",
        icon: ShoppingCart,
        big: true,
    },
    {
        id: "dimitra",
        label: "2025",
        title: "Dimitra International Internship",
        sub: "Global Ag‑Tech SaaS",
        icon: Globe,
        big: true,
    },
];

/*********************************
 * Animation variants
 *********************************/
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
        transition: { delay: 0.4 + i * 0.15, duration: 0.4, ease: "backOut" },
    }),
};

/*********************************
 * Component
 *********************************/
export default function ProgrammerRoadmap() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-20%" });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    return (
        <section
            ref={ref}
            style={{ minHeight: "70vh" }}
            className="relative w-full h-full sm:w-auto px-4 sm:py-4 select-none font-sans "
            aria-label="Roadmap timeline"
        >
            {/* Central vertical line */}
            <motion.span
                className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-console-green/80 via-white/40 to-white/10"
                variants={lineVariants}
                initial="hidden"
                animate={controls}
            />

            {/* Timeline items – flexible column to avoid overflow */}
            <ul className="flex flex-col gap-12 py-8">
                {milestones.map((m, i) => {
                    const Icon = m.icon;
                    const isLeft = i % 2 === 0;
                    return (
                        <motion.li
                            key={m.id}
                            custom={i}
                            variants={nodeVariants}
                            initial="hidden"
                            animate={controls}
                            className="group relative flex items-start"
                        >
                            {/* Node */}
                            <span
                                className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-console-green shadow-lg ring-4 ring-console-green/30 transition-transform duration-200 group-hover:scale-110 ${m.big ? "w-8 h-8" : "w-6 h-6"}`}
                                style={{ top: 0 }}
                            >
                                <Icon
                                    className={`${m.big ? "h-4 w-4" : "h-3 w-3"} text-black/80`}
                                    aria-hidden="true"
                                />
                            </span>

                            {/* Horizontal connector (desktop) */}
                            <span
                                className={`hidden md:block absolute h-px w-14 bg-white/30 top-3 ${isLeft ? "right-1/2" : "left-1/2"}`} />

                            {/* Text block */}
                            <div className={`relative pt-1 md:absolute ${isLeft ? "md:right-[calc(50%_+_3.5rem)] md:text-right pr-4" : "md:left-[calc(50%_+_3.5rem)] md:text-left pl-4"} max-w-md md:max-w-sm`}>
                                <p className="mb-1 text-xs uppercase tracking-widest text-console-green">{m.label}</p>
                                <h3 className={`${m.big ? "text-lg font-semibold" : "text-base font-medium"} text-white drop-shadow-sm`}>{m.title}</h3>
                                {m.sub && <p className="mt-1 text-xs text-neutral-400 leading-snug">{m.sub}</p>}
                            </div>
                        </motion.li>
                    );
                })}
            </ul>
        </section>
    );
}
