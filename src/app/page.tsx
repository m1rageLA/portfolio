"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsciiBackground from "@/components/AsciiBackground";
import HeroSection from "@/components/HeroSection";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import AboutSection from "@/components/AboutSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import SectionNav from "@/components/SectionNav";
import type { Category } from "@/components/ProjectShowcase";
import SkillsTree from "@/components/ SkillsTree";
import type { ProjectCardProps } from "@/components/ProjectCard";

/* ---------------------------------------------------------------------------
   Projects data
   – `released` now shows "yes"/"no" based on website availability:
     • id 1: no
     • id 2: yes
     • id 3: yes
     • id 4: yes
     • id 5: no
     • id 6: yes
     • id 7: no
     • id 8: no
     • id 10: no
     • id 11: no
----------------------------------------------------------------------------- */
const projects: (ProjectCardProps & { category: Category; id: string | number })[] = [
  {
    id: 1,
    title: "Transpiler (compiler)",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/m1rageLA/typescript-transpiller",
    preview: "./transpiler.png",
    highlight: true,
    category: "Best",
  },
  {
    id: 2,
    title: "Internet store",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    released: "yes",
    status: "ready",
    repo: "https://github.com/m1rageLA/internet-store",
    website: "https://internet-store.vercel.app",
    preview: "./internet-store.png",
    highlight: true,
    category: "Best",
  },
  {
    id: 3,
    title: "Hackathon 2024 \n(24 hours)",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["JavaScript", "React", "Redux"],
    released: "yes",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    website: "https://hackathon24-demo.vercel.app",
    preview: "./step.png",
    highlight: true,
    category: "Best",
  },
  {
    id: 4,
    title: "Internet store",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    released: "yes",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    website: "https://internet-store.vercel.app",
    preview: "./internet-store.png",
    highlight: false,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Nutrition app",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    released: "no",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "./nutrition.png",
    highlight: false,
    category: "Frontend",
  },
  {
    id: 6,
    title: "Project estimator system",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    released: "yes",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    website: "https://estimator-app.example.com",
    preview: "./estimation.png",
    highlight: false,
    category: "Frontend",
  },
  {
    id: 7,
    title: "Estimator system (backend)",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "monolit.png",
    highlight: false,
    category: "Backend",
  },
  {
    id: 8,
    title: "microservices",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "./micr.png",
    highlight: false,
    category: "Backend",
  },
  {
    id: 9,
    title: "internet store (backend)",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "./firebase.png",
    highlight: false,
    category: "Backend",
  },
  {
    id: 10,
    title: "Transpiler (compiler)",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "./transpiler.png",
    highlight: false,
    category: "System",
  },
  {
    id: 11,
    title: "Multithreaded web server",
    description: "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    released: "no",
    status: "in_progress",
    repo: "https://github.com/m1rageLA/multithreaded-web-server",
    preview: "./multiserver.png",
    highlight: false,
    category: "System",
  },
];

export default function Home() {
  return (
    <div className="h-screen bg-black text-white font-sans overflow-x-hidden">
      <SectionNav />
      <main className="snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll">
        <section id="hero" className="snap-start flex flex-col h-screen px-[10%]">
          <header className="py-6"><Header /></header>
          <div className="relative flex-1 flex items-center overflow-hidden"><AsciiBackground /><HeroSection /></div>
        </section>
        <section id="about" className="snap-start flex items-center justify-center h-screen px-[10%]">
          <div className="grid w-full gap-10 md:grid-cols-2"><AboutSection /><RoadmapTimeline /></div>
        </section>
        <section id="projects" className="snap-start flex flex-col items-center justify-center h-screen px-[10%]">
          <ProjectShowcase projects={projects} />
        </section>
        <section id="skills" className="snap-start flex flex-col items-center justify-center h-screen px-[10%]">
          <SkillsTree />
        </section>
        <section id="contacts" className="snap-start flex flex-col items-center justify-center px-[10%] py-8 h-screen">
          <footer><Footer /></footer>
        </section>
      </main>
    </div>
  );
}
