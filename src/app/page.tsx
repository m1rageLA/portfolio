"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsciiBackground from "@/components/AsciiBackground";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="grid grid-cols-[0.1fr_1fr_0.1fr] relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <main className="col-start-2">
        <Header />
        <div className="relative flex h-screen items-center overflow-hidden">
          <AsciiBackground />
          <HeroSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
