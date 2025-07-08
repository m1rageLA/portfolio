// app/page.tsx  (Next.js 13+)

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsciiBackground from "@/components/AsciiBackground";
import HeroSection from "@/components/HeroSection";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsTree from "@/components/ SkillsTree";
import type { Category } from "@/components/ProjectShowcase";
import type { ProjectCardProps } from "@/components/ProjectCard";
import SectionNav from "@/components/SectionNav";
import SecondAboutSection from "@/components/SecondAboutSection";



/******************************************************
 * Demo‑данные проектов (можешь вынести в отдельный файл)
 ******************************************************/
 const projects: (ProjectCardProps & { category: Category; id: string | number })[] = [
  {
    id: 1,
    title: "Transpiler (compiler)",
    description: "Optimizes TypeScript speed by compiling to Rust and WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/m1rageLA/typescript-transpiller",
    preview: "/transpiler.png",
    highlight: true,
    category: "Best",
  },
  {
    id: 2,
    title: "Internet store",
    description: "Led a full Agile/Scrum team to build a complete e‑commerce app from scratch.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    released: "yes",
    status: "ready",
    repo: "https://github.com/m1rageLA/internet-store",
    website: "https://internet-store-d7a86.web.app/",
    preview: "/internet-store.png",
    highlight: true,
    category: "Best",
  },
  {
    id: 3,
    title: "Hackathon 2024 (24 h)",
    description: "Built a working AI‑powered learning MVP in 24h during a hackathon.",
    stack: ["JavaScript", "React", "Redux"],
    released: "yes",
    status: "ready",
    repo: "https://github.com/m1rageLA/s.t.e.p-hackathon2024",
    website: "https://s-t-e-p-hackathon2024-lpeg.vercel.app/",
    preview: "/step.png",
    highlight: true,
    category: "Best",
  },
  {
    id: 4,
    title: "Internet store (frontend)",
    description: "Led a full Agile/Scrum team to build a complete e‑commerce app from scratch.",
    stack: ["Agile/SCRUM", "JavaScript", "React"],
    released: "yes",
    status: "ready",
    repo: "https://github.com/m1rageLA/internet-store",
    website: "https://internet-store.vercel.app",
    preview: "/internet-store.png",
    highlight: false,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Nutrition app",
    description: "AI-powered cross-platform app that identifies food and tracks meals.",
    stack: ["TypeScript", "React Native", "AI"],
    released: "no",
    status: "ready",
    repo: "https://github.com/m1rageLA/food-recognition-app-frontend",
    preview: "/nutrition.png",
    highlight: false,
    category: "Frontend",
  },
  {
    id: 6,
    title: "Project estimator system",
    description: "Fullstack estimation app built during work at ClearMedia.",
    stack: ["Vue", "Vuetify", "Scss", "Webpack config"],
    released: "yes",
    status: "ready",
    repo: "https://github.com/m1rageLA/estimation-app-frontend",
    website: "https://estimation-app-frontend.vercel.app/",
    preview: "/estimation.png",
    highlight: false,
    category: "Frontend",
  },
  {
    id: 7,
    title: "Estimator system (backend)",
    description: "Backend using Laravel with MongoDB and mail integration.",
    stack: ["PHP", "Laravel", "MongoDB", "Mail"],
    released: "no",
    status: "ready",
    repo: "https://github.com/m1rageLA/estimation-app-backend",
    preview: "/monolit.png",
    highlight: false,
    category: "Backend",
  },
  {
    id: 8,
    title: "Micro‑services",
    description: "Project to explore and implement basic microservices architecture.",
    stack: ["TypeScript", "Nest.js", "Docker"],
    released: "no",
    status: "ready",
    repo: "https://github.com/m1rageLA/microservices-backend",
    preview: "/micr.png",
    highlight: false,
    category: "Backend",
  },
  {
    id: 9,
    title: "Internet store (backend)",
    description: "Backend for a Firebase‑powered e‑commerce store.",
    stack: ["Firebase", "FB Functions", "FB Storage", "FB auth"],
    released: "no",
    status: "ready",
    repo: "https://github.com/m1rageLA/internet-store/blob/main/src/hooks/useProducts.js",
    preview: "/firebase.png",
    highlight: false,
    category: "Backend",
  },
  {
    id: 10,
    title: "Transpiler (compiler)",
    description: "Optimizes TypeScript speed by compiling to Rust and WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/m1rageLA/typescript-transpiller",
    preview: "/transpiler.png",
    highlight: false,
    category: "System",
  },
  {
    id: 11,
    title: "Multithreaded web‑server",
    description: "Minimal multithreaded web server built to learn core web concepts.",
    stack: ["Rust"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/m1rageLA/multithreaded-web-server",
    preview: "/multiserver.png",
    highlight: false,
    category: "System",
  },
];


/******************************************************
 * Страница
 ******************************************************/
export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden md:h-screen">
      {/* вертикальный snap‑scroll на уровне секций на десктопе */}
      <SectionNav />
      <main className="scroll-smooth md:snap-y md:snap-mandatory md:h-screen md:overflow-y-scroll">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section
          id="hero"
          className="min-h-screen flex flex-col px-[10%] md:h-screen md:snap-start"
        >
          <header className="py-6">
            <Header />
          </header>
          <div className="relative flex-1 flex items-center overflow-hidden">
            <AsciiBackground />
            <HeroSection />
          </div>
        </section>

        {/* ───────────────────────── About + part‑1 timeline ───────────────────────── */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-[10%] md:h-screen md:snap-start"
        >
          <div className="grid w-full gap-10 md:grid-cols-2">
            <AboutSection />
            {/* левая/правая колонка зависит от md‑breakpoint */}
            <RoadmapTimeline part="first" />
          </div>
        </section>

        {/* ───────────────────────── Timeline continuation ───────────────────────── */}
        <section
          id="about-cont"
          className="min-h-screen flex items-center justify-center px-[10%] md:h-screen md:snap-start"
        >

          <div className="grid w-full gap-10 md:grid-cols-2">
            <SecondAboutSection />
            {/* во второй секции линия идёт сверху‑вниз, пипка снизу */}
            <RoadmapTimeline part="second" />
          </div>
        </section>

        {/* ───────────────────────── Projects ───────────────────────── */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-[10%] md:h-screen md:snap-start"
        >
          <ProjectShowcase projects={projects} />
        </section>

        {/* ───────────────────────── Skills ───────────────────────── */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-[10%] md:h-screen md:snap-start"
        >
          <SkillsTree />
        </section>

        {/* ───────────────────────── Contacts / Footer ───────────────────────── */}
        <section
          id="contacts"
          className="min-h-screen flex items-center justify-center px-[10%] py-8 md:h-screen md:snap-start"
        >
          <footer>
            <Footer />
          </footer>
        </section>
      </main>
    </div>
  );
}

