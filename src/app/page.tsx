import Image from "next/image";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className="bg-[#171a1e] grid grid-cols-[0.1fr_1fr_0.1fr] items-center justify-items-center h-screen">
      <main className="col-start-2 h-full w-full">
        <Header />
      </main>
    </div>
  );
}