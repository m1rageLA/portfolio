"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsciiBackground from "@/components/AsciiBackground";
import HeroSection from "@/components/HeroSection";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import AboutSection from "@/components/AboutSection";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import ProjectShowcase from "@/components/ProjectShowcase";
import SectionNav from "@/components/SectionNav";
import type { Category } from "@/components/ProjectShowcase";
import SkillsTree from "@/components/ SkillsTree";

const projects: (ProjectCardProps & { category: Category })[] = [
  {
    title: "TS ➜ WASM Transpiler",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    updated: "22.06.2025",
    status: "Ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: true,
    category: "System", // Replace with a valid Category value
  },
  {
    title: "TS ➜ WASM Transp32iler",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    updated: "22.06.2025",
    status: "Ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: true,
    category: "Frontend", // Add a valid Category value here
  },
  {
    title: "TS ➜ WASM Transpi2ler",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    updated: "22.06.2025",
    status: "Ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: true,
    category: "Frontend", // Replace with a valid Category value
  },
];

export default function Home() {
  return (
    <div className="h-screen bg-black text-white font-sans overflow-x-hidden">
      <SectionNav />
      <main className="snap-y snap-mandatory  scroll-smooth h-screen overflow-y-scroll">

        <section
          id="hero"
          className="snap-start flex flex-col h-screen px-[10%]"
        >
          <header className=" py-6">
            <Header />
          </header>
          <div className="relative flex-1  flex  items-center overflow-hidden">
            <AsciiBackground />
            <HeroSection />
          </div>
        </section>

        <section
          id="about"
          className="snap-start flex items-center justify-center h-screen px-[10%]"
        >
          <div className="grid w-full gap-10 md:grid-cols-2">
            <AboutSection />
            <RoadmapTimeline />
          </div>
        </section>

        <section
          id="projects"
          className="snap-start flex flex-col items-center justify-center h-screen px-[10%]"
        >
          <ProjectShowcase projects={projects} />
        </section>

        <section className="snap-start flex flex-col items-center justify-center h-screen px-[10%]">
          <SkillsTree />
        </section>
      </main>

      {/* <footer className="px-[10%] py-8">
        <Footer />
      </footer> */}
    </div>
  );
}
