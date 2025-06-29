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

const projects: (ProjectCardProps & { category: Category; id: string | number })[] = [
  {
    id: 1,
    title: "Transpiler (compiler)",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    updated: "22.06.2025",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: true,
    category: "Best", // Replace with a valid Category value
  },

  {
    id: 2,
    title: "Internet store",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    updated: "22.06.2025",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: true,
    category: "Best", // Add a valid Category value here
  },
  {
    id: 3,
    title: "Hackathon 2024 \n(24 hours)",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["JavaScript", "React", "Redux"],
    updated: "22.06.2025",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: true,
    category: "Best", // Replace with a valid Category value
  },


  //FRONTEND ====
  //FRONTEND ====
  //FRONTEND ====

  {
    id: 4,
    title: "Internet store",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    updated: "22.06.2025",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: false,
    category: "Frontend", // Replace with a valid Category value
  },
  {
    id: 5,
    title: "Nutrition app",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    updated: "22.06.2025",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: false,
    category: "Frontend", // Replace with a valid Category value
  },
  {
    id: 6,
    title: "Project estimator system",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["Agile/SCRUM", "JavaScript", "React", "Firebase"],
    updated: "22.06.2025",
    status: "ready",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: false,
    category: "Frontend", // Replace with a valid Category value
  },

  //BACKEND
  //BACKEND
  //BACKEND

  {
    id: 7,
    title: "Estimator system (backend)",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    updated: "22.06.2025",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: false,
    category: "Backend", // Replace with a valid Category value
  },
  {
    id: 8,
    title: "microservices (backend)",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    updated: "22.06.2025",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: false,
    category: "Backend", // Replace with a valid Category value
  },
  // {
  //   id: 9,
  //   title: "Multithreaded web server",
  //   description:
  //     "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
  //   stack: ["TypeScript", "Rust", "WASM"],
  //   updated: "22.06.2025",
  //   status: "in_progress",
  //   repo: "https://github.com/you/ts-wasm",
  //   preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
  //   highlight: false,
  //   category: "Backend", // Replace with a valid Category value
  // },

  //System ====
  //System ====
  //System ====
  {
    id: 10,
    title: "Transpiler (compiler)",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    updated: "22.06.2025",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: false,
    category: "System", // Replace with a valid Category value
  },
  {
    id: 11,
    title: "Multithreaded web server",
    description:
      "High-performance transpiler that converts TypeScript AST to Rust + WebAssembly.",
    stack: ["TypeScript", "Rust", "WASM"],
    updated: "22.06.2025",
    status: "in_progress",
    repo: "https://github.com/you/ts-wasm",
    preview: "https://graphicdesignjunction.com/wp-content/uploads/2019/04/web_ui_concepts_15.jpg",
    highlight: false,
    category: "System", // Replace with a valid Category value
  },
];

export default function Home() {
  return (
    <div className="h-screen bg-black text-white font-sans overflow-x-hidden">
      <SectionNav />
      <main className="snap-y snap-mandatory  scroll-smooth h-screen overflow-y-scroll">

        <section
          id="hero"
          className="snap-start flex flex-col h-screen px-4 md:px-[10%]"
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
          className="snap-start flex items-center justify-center h-screen px-4 md:px-[10%]"
        >
          <div className="grid w-full gap-10 md:grid-cols-2">
            <AboutSection />
            <RoadmapTimeline />
          </div>
        </section>

        <section
          id="projects"
          className="snap-start flex flex-col items-center justify-center h-screen px-4 md:px-[10%]"
        >
          <ProjectShowcase projects={projects} />
        </section>

        <section id="skills" className="snap-start flex flex-col items-center justify-center h-screen px-4 md:px-[10%]">
          <SkillsTree />
        </section>

        <section id="contacts" className="snap-start flex flex-col items-center justify-center px-4 md:px-[10%] py-8 h-screen">
          <footer>
            <Footer />
          </footer>
        </section>
      </main>




    </div>
  );
}
