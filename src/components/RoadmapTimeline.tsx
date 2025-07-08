/* ========================================================================
   RoadmapTimeline.tsx
   ————————————————————————————————————————————————————————————————
   Полноценный компонент тайм-лайна без «провалов» в сетке.
   Каждая карточка теперь занимает ровно одну строку.
   ======================================================================== */

"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
    LucideIcon,
    BookOpen,
    GraduationCap,
    Briefcase,
    Award,
    Users,
    ShoppingCart,
    Globe,
    Code,
} from "lucide-react";

/* --------------------------------------------------------------------- */
/*  Types                                                               */
/* --------------------------------------------------------------------- */
interface Milestone {
    id: string;
    year: string;
    title: string;
    description: string;
    icon: LucideIcon;
    big?: boolean;
}
export type TimelinePart = "first" | "second";

/* --------------------------------------------------------------------- */
/*  Data                                                                 */
/* --------------------------------------------------------------------- */
const milestones: Milestone[] = [
    {
        id: "start",
        year: "2017",
        title: "First Steps",
        description: "Learned the fundamentals of programming and tech.",
        icon: BookOpen,
    },
    {
        id: "step-it",
        year: "2018-2021",
        title: "Step IT Academy (Ukraine)",
        description: "In-depth training in software development and UI design.",
        icon: GraduationCap,
        big: true,
    },
    {
        id: "first-commercial",
        year: "2020",
        title: "First Commercial Experience",
        description: "Launched a landing page and got hands-on with real-world workflows.",
        icon: Briefcase,
    },
    {
        id: "john-paul",
        year: "2022-2025",
        title: "John Paul II Academy (Poland)",
        description: "Reinforced engineering and CS fundamentals through projects.",
        icon: GraduationCap,
    },
    {
        id: "clearmedia",
        year: "2023",
        title: "Clearmedia (Poland)",
        description: "Contributed to full-stack development in a European media company.",
        icon: Briefcase,
        big: true,
    },
    {
        id: "hackathon-2024",
        year: "2024",
        title: "Europe’s Largest Hackathon",
        description: "Built an educational platform at Europe’s largest hackathon.",
        icon: Award,
    },
    {
        id: "frontend-lead-edu",
        year: "2024",
        title: "Frontend Team Lead",
        description: "Built and led the frontend team in a startup environment using Scrum.",
        icon: Users,
    },
    {
        id: "ecom-lead",
        year: "2025",
        title: "Full Development Team Lead",
        description: "Managed an end-to-end e-commerce project build using Agile/Scrum with sprints and daily standups.",
        icon: ShoppingCart,
        big: true,
    },
    {
        id: "dimitra",
        year: "2025",
        title: "Dimitra International (Spain)",
        description: "Full‑stack development for a legal & business consulting platform.",
        icon: Globe,
    },
    {
        id: "available",
        year: "Now",
        title: "Ready for Work",
        description: "Open to new projects and global tech challenges.",
        icon: Code,
        big: true,
    }
];


const firstHalf = milestones.slice(0, Math.ceil(milestones.length / 2));
const secondHalf = milestones.slice(Math.ceil(milestones.length / 2));

/* --------------------------------------------------------------------- */
/*  Animation variants                                                   */
/* --------------------------------------------------------------------- */
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

/* --------------------------------------------------------------------- */
/*  Component                                                            */
/* --------------------------------------------------------------------- */
export default function RoadmapTimeline({
    part = "first",
}: {
    part?: TimelinePart;
}) {
    const data = part === "first" ? firstHalf : secondHalf;

    /* --- scroll-trigger анимация -------------------------------------- */
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-20%" });
    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    /* --- утилити-класс для «линии» ------------------------------------- */
    const gradientClass =
        part === "first"
            ? "bg-gradient-to-b from-console-green via-white/50 to-white/10"
            : "bg-gradient-to-t from-console-green via-white/50 to-white/10";

    return (
        <section
            ref={ref}
            aria-label="Roadmap timeline"
            className="relative flex w-full items-center px-5 select-none font-sans md:min-h-screen"
        >
            {/* центральная вертикальная линия */}
            <motion.span
                variants={lineVariants}
                initial="hidden"
                animate={controls}
                className={`pointer-events-none absolute left-1/2 -translate-x-1/2 h-full w-px ${gradientClass}`}
            />

            {/* якорный кружок сверху / снизу */}
            <span
                className={`absolute left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-console-green ${part === "first" ? "-top-1.5" : "-bottom-1.5"
                    }`}
            />

            {/* сам тайм-лайн */}
            <ul className="relative mx-auto flex w-full flex-col gap-8 md:gap-12">
                {data.map(({ id, icon: Icon, big, year, title, description }, i) => {
                    const isEven = i % 2 === 0;

                    /* ---- подкомпоненты одного пункта -------------------------- */
                    const Year = () => (
                        <div
                            className={`text-xs md:text-sm uppercase tracking-wider text-console-green ${isEven ? "text-right pr-2" : "text-left pl-2"
                                }`}
                        >
                            {year}
                        </div>
                    );

                    const IconWrap = () => (
                        <div className="flex flex-col items-center justify-center">
                            <span
                                className={`relative flex items-center justify-center rounded-full bg-console-green shadow ring-2 ring-console-green/40 transition-transform duration-200 group-hover:scale-110 ${big ? "h-10 w-10" : "h-7 w-7"
                                    }`}
                            >
                                <Icon
                                    className={`${big ? "h-5 w-5" : "h-4 w-4"} text-black`}
                                    aria-hidden="true"
                                />
                            </span>
                        </div>
                    );

                    const Text = () => (
                        <div
                            className={`space-y-1 ${isEven ? "text-left pl-2" : "text-right pr-2"}`}
                        >
                            <h3
                                className={`tracking-wide text-white ${big
                                    ? "text-base md:text-lg font-semibold"
                                    : "text-sm md:text-base font-medium"
                                    }`}
                            >
                                {title}
                            </h3>
                            <p className="max-w-xs md:max-w-sm text-[11px] md:text-xs leading-snug text-gray-400">
                                {description}
                            </p>
                        </div>
                    );

                    /* ---- порядок: слева ➜ центр ➜ справа ---------------------- */
                    return (
                        <motion.li
                            key={id}
                            custom={i}
                            variants={nodeVariants}
                            initial="hidden"
                            animate={controls}
                            /* grid-flow-row-dense на всякий случай, но порядок уже правильный */
                            className="grid grid-cols-[1fr_0.4fr_1fr] grid-flow-row-dense auto-rows-min items-center gap-2"
                        >
                            {isEven ? (
                                /* чётный индекс — год слева, текст справа */
                                <>
                                    <Year />
                                    <IconWrap />
                                    <Text />
                                </>
                            ) : (
                                /* нечётный индекс — текст слева, год справа */
                                <>
                                    <Text />
                                    <IconWrap />
                                    <Year />
                                </>
                            )}
                        </motion.li>
                    );
                })}
            </ul>
        </section>
    );
}
