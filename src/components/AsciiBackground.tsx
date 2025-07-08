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
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center select-none">
      <pre
        ref={asciiRef}
        aria-hidden
        className="opacity-70 max-w-none whitespace-pre leading-[2] text-[3px] text-neutral-700 [text-shadow:_0_0_1px_#000]"
      >
        {frame}
      </pre>
    </div>
  );
}
