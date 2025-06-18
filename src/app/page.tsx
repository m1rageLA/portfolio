"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsciiBackground from "@/components/AsciiBackground";
import HeroSection from "@/components/HeroSection";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import { Briefcase, User, Mail } from "lucide-react";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">

      <header className="px-[10%]">
        <Header />
      </header>

      <main>
        <section className="relative flex h-screen items-center overflow-hidden bg-black">
          <AsciiBackground />
          <div className="px-[10%] w-full">
            <HeroSection />
          </div>
        </section>

        <section className="w-full h-screen bg-[#000] text-white">
          <div className="px-[10%] py-10 grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

            {/* Left column: About me */}
            <div className="flex flex-col justify-center">
              <AboutSection />
            </div>

            {/* Right column: Timeline */}
            <div className="flex items-center justify-center">
              <div className="w-full h-full">
                <RoadmapTimeline />
              </div>
            </div>

          </div>
        </section>

      </main>

      <footer className="px-[10%]">
        <Footer />
      </footer>
    </div>
  );
}