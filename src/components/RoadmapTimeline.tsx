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
    label: "First steps",
    title: "Первые шаги",
    sub: "Basic HTML & CSS",
    icon: BookOpen,
  },
  {
    id: "step-it",
    label: "2016",
    title: "Step IT Academy",
    icon: GraduationCap,
    big: true,
  },
  {
    id: "john-paul",
    label: "2017–2018",
    title: "John Paul II Academy",
    icon: GraduationCap,
  },
  {
    id: "self-study",
    label: "2019–2022",
    title: "Self-study",
    icon: Code2,
  },
  {
    id: "clearmedia",
    label: "2023",
    title: "Clearmedia Internship",
    sub: "Full-stack experience",
    icon: Briefcase,
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
    transition: { delay: 0.4 + i * 0.2, duration: 0.4, ease: "backOut" },
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
      className="relative w-full h-full sm:w-[45vw] px-4 sm:py-4 select-none font-sans"
      aria-label="Roadmap timeline"
    >
      {/* Central vertical line */}
      <motion.span
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-console-green/80 via-white/40 to-white/10"
        variants={lineVariants}
        initial="hidden"
        animate={controls}
      />

      {/* Timeline items evenly distributed by CSS-grid */}
      <ul
        className="grid h-full"
        style={{ gridTemplateRows: `repeat(${milestones.length},1fr)` }}
      >
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
              className="group relative flex items-center h-full"
            >
              {/* Node */}
              <span
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-console-green shadow-lg ring-4 ring-console-green/30 transition-transform duration-200 group-hover:scale-110 ${m.big ? "w-8 h-8" : "w-6 h-6"}`}
              >
                <Icon
                  className={`${m.big ? "h-4 w-4" : "h-3 w-3"} text-black/80`}
                  aria-hidden="true"
                />
              </span>

              {/* Horizontal connector (desktop) */}
              <span
                className={`hidden md:block absolute h-px w-14 bg-white/30 top-1/2 -translate-y-1/2 ${isLeft ? "right-1/2 mr-4" : "left-1/2 ml-4"}`}
              />

              {/* Text block */}
              <div
                className={`relative max-w-md md:max-w-sm ${isLeft ? "mr-auto text-right pr-8 md:pr-16" : "ml-auto text-left pl-8 md:pl-16"}`}
              >
                <p className="mb-1 text-xs uppercase tracking-widest text-console-green">
                  {m.label}
                </p>
                <h3 className={`${m.big ? "text-lg font-semibold" : "text-base font-medium"} text-white drop-shadow-sm`}> {m.title}</h3>
                {m.sub && <p className="mt-1 text-xs text-neutral-400">{m.sub}</p>}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
