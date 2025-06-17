"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsciiBackground from "@/components/AsciiBackground";
import HeroSection from "@/components/HeroSection";
import RoadmapTimeline from "@/components/RoadmapTimeline";


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

        {/* <div className="h-30 w-full bg-gradient-to-b from-black to-[#111114]" /> */}

        <section className="w-full h-screen bg-[#000000] text-black">
          <div className="px-[10%] py-10">
            <div >
              <h2 className="text-3xl font-bold mb-4 text-header">About me</h2>
              <p className="text-xs text-li leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                nihil mollitia corporis quis inventore voluptatibus praesentium
                voluptatum blanditiis maxime consectetur, sunt quisquam quam
                molestias voluptas eligendi repellat vero at saepe.
              </p>
            </div>
               <RoadmapTimeline />
          </div>
        </section>

        <section className="w-full h-screen bg-[#000000] text-black">
          <div className="px-[10%] py-10">

          </div>
        </section>
      </main>

      <footer className="px-[10%]">
        <Footer />
      </footer>
    </div>
  );
}
