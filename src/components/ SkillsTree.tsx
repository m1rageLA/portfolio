/* eslint-disable react/jsx-no-constructed-context-values */
"use client";

import { motion, Variants } from "framer-motion";
import clsx from "clsx";

/**
 * Skills Tree – v8.0  (legend added, still sorted by level, decorative lines removed)
 * -----------------------------------------------------------------------------
 *  • Each column lists Level 1 (green), then Level 2 (light‑grey), then Level 3 (dark‑grey).
 *  • Decorative lines (central stem, horizontal bar, arms) remain removed.
 *  • A professional legend has been added below the <h2> heading for clarity.
 */

type Level = 1 | 2 | 3;
interface Skill {
    name: string;
    level: Level;
}
interface Branch {
    title: string;
    skills: Skill[];
}

const branches: Branch[] = [
    {
        title: "Front‑end",
        skills: [
            { name: "JavaScript", level: 1 },
            { name: "TypeScript", level: 1 },
            { name: "React", level: 1 },
            { name: "React Native", level: 2 },
            { name: "Next.js", level: 1 },
            { name: "WebAssembly", level: 2 },
            { name: "CSS / SCSS", level: 1 },
            { name: "TailwindCSS", level: 1 },
            { name: "Semantic HTML", level: 1 },
            { name: "MUI", level: 2 },
            { name: "Redux", level: 2 },
            { name: "Vue", level: 3 },
            { name: "Three.js", level: 3 },
            { name: "Vite", level: 2 },
            { name: "Webpack", level: 2 },
        ],
    },
    {
        title: "Back‑end",
        skills: [
            { name: "Node.js", level: 1 },
            { name: "Express.js", level: 1 },
            { name: "Nest.js", level: 2 },
            { name: "REST API", level: 2 },
            { name: "WebSocket", level: 3 },
            { name: "Microservices", level: 3 },
            { name: "OAuth 2.0", level: 2 },
            { name: "Firebase", level: 2 },
            
        ],
    },
    {
        title: "DB & DevOps",
        skills: [
            { name: "PostgreSQL", level: 1 },
            { name: "MongoDB", level: 2 },
            { name: "ORM", level: 2 },
            { name: "Docker", level: 2 },
            { name: "Docker Compose", level: 2 },
            { name: "CI/CD (GH Actions)", level: 3 },
        ],
    },
    {
        title: "Testing & Methodologies",
        skills: [
            { name: "Vitest", level: 1 },
            { name: "TDD", level: 2 },
            { name: "OOP", level: 2 },
            { name: "Agile (Scrum)", level: 1 },
            { name: "BEM", level: 2 },
            {name: "React Testing (RTL)", level: 3},
        ],
    },
    {
        title: "Tools & OS",
        skills: [
            { name: "Git", level: 1 },
            { name: "GitHub", level: 1 },
            { name: "macOS", level: 1 },
            { name: "Windows", level: 1 },
            { name: "Linux", level: 2 },
            { name: "Figma", level: 1 },
            { name: "WordPress", level: 2 },
        ],
    },
];

/**
 * Brand colours
 * -------------------------------------------------------------------------- */
const consoleGreen = "#6db07a";

/**
 * Skills that should always be considered part of the primary stack (Level 1 styling).
 */
const strongNames = new Set([
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Git",
    "GitHub",
]);

function pillStyle({ name, level }: Skill): React.CSSProperties {
    if (strongNames.has(name) || level === 1) {
        return { borderColor: consoleGreen, color: consoleGreen };
    }
    const textAlpha = level === 2 ? 0.7 : 0.5;
    const borderAlpha = level === 2 ? 0.4 : 0.25;
    return {
        borderColor: `rgba(255,255,255,${borderAlpha})`,
        color: `rgba(255,255,255,${textAlpha})`,
    };
}

/**
 * Framer‑motion variants
 * -------------------------------------------------------------------------- */
const container: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.05,
            delayChildren: 0.06 * i,
        },
    }),
};

const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

/**
 * Legend component
 * -------------------------------------------------------------------------- */
interface LegendItemProps {
    label: string;
    color: string;
}

function LegendItem({ label, color }: LegendItemProps) {
    return (
        <li className="flex items-center gap-2 text-xs font-medium">
            <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
            />
            {label}
        </li>
    );
}

/**
 * Component
 * -------------------------------------------------------------------------- */
export default function SkillsTree() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative mx-auto max-w-7xl py-20 overflow-visible"
            style={{ "--console-green": consoleGreen } as React.CSSProperties}
        >
            {/* Heading */}
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Skills</h2>

            {/* Professional legend */}
            <ul className="mb-14 flex flex-wrap items-center gap-6 pl-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                <LegendItem label="Primary stack" color={consoleGreen} />
                <LegendItem label="Confident" color="rgba(255,255,255,0.70)" />
                <LegendItem label="Experienced" color="rgba(255,255,255,0.50)" />
            </ul>

            {/* Skills – five columns */}
            <div className="mt-1 grid grid-cols-1 gap-5 md:grid-cols-5">
                {branches.map((branch, idx) => {
                    const sortedSkills = [...branch.skills].sort((a, b) => a.level - b.level);
                    return (
                        <motion.ul
                            key={branch.title}
                            custom={idx}
                            variants={container}
                            className="flex flex-col items-center"
                        >
                            {/* Column heading */}
                            <motion.li
                                variants={item}
                                className={clsx(
                                    "mb-6 w-full text-center text-xs font-semibold uppercase tracking-wide"
                                )}
                                style={{ color: "rgba(255,255,255,0.65)" }}
                            >
                                {branch.title}
                            </motion.li>

                            {sortedSkills.map((skill) => (
                                <motion.li
                                    key={skill.name}
                                    variants={item}
                                    className="mb-1.5 w-44 rounded-md border px-3 py-1 text-center text-[0.7rem] font-medium backdrop-blur"
                                    style={pillStyle(skill)}
                                >
                                    {skill.name}
                                </motion.li>
                            ))}
                        </motion.ul>
                    );
                })}
            </div>
        </motion.section>
    );
}
