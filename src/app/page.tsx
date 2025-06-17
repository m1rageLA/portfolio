"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsciiBackground from "@/components/AsciiBackground";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="grid grid-cols-[0.1fr_1fr_0.1fr] relative min-h-screen bg-black text-white font-sans overflow-x-hidden">

      <header className="col-start-2">
        <Header />
      </header>

      <main className="col-start-2">
        <section className="relative flex h-screen items-center overflow-hidden">
          <AsciiBackground />
          <HeroSection />
        </section>
        <section className="w-full h-full bg-green-100">

        </section>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}
