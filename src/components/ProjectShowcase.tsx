"use client";

import { useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  Variants,
} from "framer-motion";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

/* --- типы --- */
export type Category =
  | "Best"
  | "Frontend"
  | "Backend"
  | "System"
  ;

interface ProjectShowcaseProps {
  projects: (ProjectCardProps & { category: Category; id: string | number })[];
}

/* --- variants --- */
const item: Variants = {
  initial: { opacity: 0, scale: 0.85, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.75, y: -30 },
};

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [filter, setFilter] = useState<Category>("Best");
  const filters: Category[] = [
    "Best",
    "Frontend",
    "Backend",
    "System",
  ];

  /* --- фильтрация --- */
  const filtered = useMemo(
    () => projects.filter((p) => p.category === filter),
    [projects, filter]
  );

  return (
    <section className="w-250">
      {/* ---------- Заголовок + фильтр ---------- */}
      <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-console-green via-white to-console-green/60 bg-clip-text select-none">
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

      {/* ---------- Сетка проектов ---------- */}
      <LayoutGroup>
        <motion.div
          layout="position"
          role="list"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.06,
                delayChildren: 0.04,
              },
            },
          }}
          initial={false}
          animate="animate"
          className="grid auto-rows-[1fr] gap-8 sm:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id /* стабильный ключ! */}
                layout
                role="listitem"
                variants={item}
                transition={{
                  duration: 0.35,
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
