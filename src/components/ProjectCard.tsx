"use client";
import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

/* ---------- маленький вспомогательный компонент ---------- */
const MovingNoise: FC<PropsWithChildren<{ className?: string }>> = ({
    className = "",
}) => (
    <svg
        className={`absolute inset-0 h-full w-full pointer-events-none mix-blend-overlay opacity-40 ${className}`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
    >
        {/* анимируемый шум */}
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
    updated: string;
    status: "Ready" | "WIP" | "Archived";
    repo: string;
    preview?: string;
    highlight?: boolean;
}

const statusDot: Record<ProjectCardProps["status"], string> = {
    Ready: "bg-console-green",
    WIP: "bg-yellow-400",
    Archived: "bg-neutral-500",
};

const ProjectCard: FC<ProjectCardProps> = ({
    title,
    description,
    stack,
    updated,
    status,
    repo,
    preview,
    highlight = false,
}) => (
    <motion.article
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="w-80 overflow-hidden rounded-md bg-[#080808] p-4 shadow-lg shadow-black/60 ring-1 ring-neutral-700/60"
    >
        {/* ---------- превью + анимированное зерно ---------- */}
        {preview && (
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-sm">
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
                    Best_
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
                <span>Updated</span>
                <span>{updated}</span>
            </li>
            <li className="flex items-center gap-1">
                <span
                    className={`inline-block h-1 w-1 rounded-full ${statusDot[status]}`}
                />
                <span>{status}</span>
            </li>
        </ul>

        {/* ---------- ссылка на репозиторий ---------- */}
        <a
            href={repo}
            className="underline decoration-console-green/40 underline-offset-2 transition hover:text-console-green"
            target="_blank"
            rel="noreferrer"
        >
            ↗ Repo
        </a>
    </motion.article>
);

export default ProjectCard;
