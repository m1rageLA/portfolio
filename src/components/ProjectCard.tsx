"use client";
import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

const MovingNoise: FC<PropsWithChildren<{ className?: string }>> = ({
    className = "",
}) => (
    <svg
        className={`absolute inset-0 h-full w-full pointer-events-none mix-blend-overlay opacity-40 ${className}`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
    >
        <filter id="noiseFilter">
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.7"
                numOctaves="4"
                stitchTiles="stitch"
                seed="10"
            >
                {/* меняем seed → каштановое «потрясывание» плёнки                */}
                <animate
                    attributeName="seed"
                    values="0;3;6;2;8;1"
                    dur="800ms"
                    repeatCount="indefinite"
                />
            </feTurbulence>

            {/* чуть глушим цвет, чтобы шум не перекрашивал изображение        */}
            <feColorMatrix type="saturate" values="2" />
        </filter>

        {/* прямоугольник-носитель фильтра                                    */}
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
);

/* ---------- основной карточный компонент ---------- */
export interface ProjectCardProps {
    title: string;
    description: string;
    stack: string[];
    released: string
    status: "ready" | "in_progress" | "archived";
    repo: string;
    website?: string;
    preview?: string;
    highlight?: boolean;
}

const statusDot: Record<ProjectCardProps["status"], string> = {
    ready: "bg-console-green",
    in_progress: "bg-yellow-400",
    archived: "bg-neutral-500",
};

const ProjectCard: FC<ProjectCardProps> = ({
    title,
    description,
    stack,
    released,
    status,
    website,
    repo,
    preview,
    highlight = false,
}) => (
    <motion.article
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className=" overflow-hidden rounded-md bg-[#080808] p-4 shadow-lg shadow-black/60 ring-1 ring-neutral-700/60"
    >
        {/* ---------- превью + анимированное зерно ---------- */}
        {preview && (
            <div className="relative mb-3 h-45 w-full overflow-hidden rounded-sm">
                <img
                    src={preview}
                    alt={`${title} preview`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                />
                <MovingNoise />
            </div>
        )}

        {/* ---------- заголовок ---------- */}
        <header className="mb-2 flex items-center justify-between">
            <h3 className="font-mono text-sm uppercase tracking-widest text-console-green">
                {title}
            </h3>
            {highlight && (
                <span className="select-none rounded-sm bg-console-green px-2 py-0.5 text-[10px] font-bold leading-none text-black">
                    Best
                </span>
            )}
        </header>

        {/* ---------- описание ---------- */}
        <p className="mb-3 text-[11px] leading-relaxed text-li/90 line-clamp-3">
            {description}
        </p>

        {/* ---------- tech-стек ---------- */}
        <div className="mb-3 flex flex-wrap gap-1">
            {stack.map((tag) => (
                <span
                    key={tag}
                    className="rounded-sm bg-neutral-800 px-2 py-0.5 text-[10px] uppercase tracking-wider text-li/70"
                >
                    {tag}
                </span>
            ))}
        </div>

        {/* ---------- мета ---------- */}
        <ul className="mb-3 space-y-1 font-mono text-[10px] text-li/70">
            <li className="flex justify-between">
                <span>Released</span>
                <span>{released}</span>
            </li>
            <li className="flex items-center gap-1">
                <span
                    className={`inline-block h-1 w-1 rounded-full ${statusDot[status]}`}
                />
                <span>{status}</span>
            </li>
        </ul>

        <div className="mt-3 flex justify-between items-center">
            {/* Repo link on the left */}
            <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-console-green/40 underline-offset-2 transition hover:text-console-green"
            >
                ↗ Repo
            </a>

            {/* Visit Site button on the right */}
            {website && (
                <motion.a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-1 rounded-md bg-console-green/10 px-3 py-1 text-xs font-semibold tracking-wide text-console-green transition-colors hover:bg-console-green/20"
                >
                Visit Site
                </motion.a>
            )}
        </div>
    </motion.article>
);

export default ProjectCard;
