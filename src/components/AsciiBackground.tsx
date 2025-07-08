"use client";
import { useEffect, useRef } from "react";
import useGlitch from "./GlitchEffect";

export default function AsciiBackground() {
  const frame = useGlitch();
  const asciiRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      asciiRef.current?.style.setProperty(
        "transform",
        `translate(${(e.clientX - w / 2) / 60}px, ${(e.clientY - h / 2) / 60}px)`
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="hidden md:block absolute inset-y-0 right-0 w-3/5 overflow-hidden select-none">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-black/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/80 to-transparent z-10" />
      <pre
        ref={asciiRef}
        aria-hidden
        className="absolute inset-0 max-w-none whitespace-pre leading-[2] text-[3px] text-neutral-600/80 opacity-70 [text-shadow:_0_0_1px_#000]"
      >
        {frame}
      </pre>
    </div>
  );
}
