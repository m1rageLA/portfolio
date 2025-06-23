"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

/**
 * ✨ ProjectShowcase – fully-featured, animated project grid
 * --------------------------------------------------------
 * • Responsive Masonry-like layout (1–3 columns)
 * • Filter bar (Best / Frontend / Backend / System)
 * • Smooth rearrange & enter/exit animations via framer-motion
 * • Subtle gradient heading for cyber-style aesthetic
 * • Accessibility: role="list" / role="listitem" + aria-pressed on filters
 */

export type Category = "Best" | "Frontend" | "Backend" | "System";

interface ProjectShowcaseProps {
    projects: (ProjectCardProps & { category: Category })[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
    const [filter, setFilter] = useState<Category>("Best");
    const filters: Category[] = ["Best", "Frontend", "Backend", "System"];

    const filteredProjects = useMemo(() => {
        if (filter === "Best") return projects;
        return projects.filter((p) => p.category === filter);
    }, [projects, filter]);

    return (
        <section className="w-full">
            {/* ---------- Heading + Filter bar ---------- */}
            <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-console-green via-white to-console-green/60 bg-clip-text text-transparent select-none">
                    Projects
                </h2>

                <nav className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {filters.map((f) => (
                        <button
                            key={f}
                            aria-pressed={filter === f}
                            onClick={() => setFilter(f)}
                            className={`rounded-sm px-3 py-1 text-xs font-mono uppercase tracking-wider transition whitespace-nowrap
                ${filter === f
                                    ? "bg-console-green text-black shadow-md shadow-console-green/30"
                                    : "bg-neutral-900 hover:bg-console-green/20"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </nav>
            </header>

            {/* ---------- Project grid (animated) ---------- */}
            <motion.div
                layout
                role="list"
                className="grid auto-rows-[1fr] gap-8 sm:grid-cols-2 xl:grid-cols-3"
            >
                <AnimatePresence initial={false}>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            role="listitem"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
