import Image from "next/image";
import Header from "../components/Header";
import avatar_ascii from "../avatar";
export default function Home() {
  return (
    <div className="bg-[#000000] grid grid-cols-[0.1fr_1fr_0.1fr] items-center justify-items-center h-screen">
      <main className="col-start-2 h-full w-full">
        <Header />
        <code>

        </code>

        <div className="h-full w-full flex flex-col items-center justify-center">
          <pre className="
          text-[#5b8075] select-none absolute top-0 left-50% text-[6px]
          font-mono whitespace-pre leading-[1.3]">
            {avatar_ascii}
          </pre>
        </div>
      </main>
    </div>
  );
}

