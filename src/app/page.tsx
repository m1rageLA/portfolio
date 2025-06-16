"use client";

import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import asciiAvatar from "@/avatar";

/* ──────────  НАСТРОЙКИ  ────────── */
const EVENT_CHANCE = 2;  // вероятность запуска сбоя (≈ раз в 10-12 с)
const DURATION_MS  = 100;    // длительность одного сбоя, мс
const FPS          = 20;     // кадры во время сбоя
const SHIFT_RANGE  = 3;      // макс. сдвиг символов в строке (-4…+4)
const MAX_LINES    = 100;      // сколько строк затрагиваем за раз
/* ──────────────────────────────── */

export default function Home() {
  const [frame, setFrame] = useState<string>(asciiAvatar);

  /* ─────────────────  Г Л И Т Ч  ───────────────── */
  useEffect(() => {
    const rowsOriginal = asciiAvatar.split("\n");
    const original     = asciiAvatar;

    /** «Freeze-bar» — сдвигаем 1-3 случайных строк на ±SHIFT_RANGE симв. */
    const lineShift = () => {
      const rows = [...rowsOriginal];
      const linesToGlitch = 1 + Math.floor(Math.random() * MAX_LINES); // 1-MAX_LINES

      for (let n = 0; n < linesToGlitch; n++) {
        const idx   = Math.floor(Math.random() * rows.length);
        const delta = (Math.random() * SHIFT_RANGE * 2 - SHIFT_RANGE) | 0;
        if (delta === 0) continue;                        // иногда оставим без сдвига

        const row   = rows[idx];
        rows[idx] =
          delta > 0
            ? row.slice(-delta) + row.slice(0, -delta)    // циклический сдвиг →
            : row.slice(-delta) + row.slice(0, row.length + delta); // ←
      }
      return rows.join("\n");
    };

    /* цикл, управляющий сбоями */
    let glitchUntil = 0;

    const tick = setInterval(() => {
      const now = performance.now();

      if (now >= glitchUntil) {
        // обычное состояние
        if (frame !== original) setFrame(original);

        // стартуем новый сбой?
        if (Math.random() < EVENT_CHANCE) {
          glitchUntil = now + DURATION_MS;
          setFrame(lineShift());
        }
        return;
      }

      // внутри активного сбоя – обновляем кадр каждые ~33 мс
      setFrame(lineShift());
    }, 1000 / FPS);

    return () => clearInterval(tick);
  }, [frame]);

  /* ───────────────  П А Р А Л Л А К С  ─────────────── */
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

  /* ───────────────────  R E N D E R  ─────────────────── */
  return (
    <div className="grid grid-cols-[0.1fr_1fr_0.1fr] relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <main className="col-start-2">
        <Header />

        <div className="relative flex h-screen items-center overflow-hidden">
          {/* ASCII-фон */}
          <div className="absolute inset-y-0 right-0 w-3/5 overflow-hidden">
            {/* затемняющие градиенты */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/80 to-transparent z-10" />

            <pre
              ref={asciiRef}
              aria-hidden
              className="absolute inset-0 max-w-none  whitespace-pre leading-[2] text-[3px] text-neutral-600/80 [text-shadow:_0_0_1px_#000]"
            >
              {frame}
            </pre>
          </div>

          {/* контент слева */}
          <section className="relative z-20 max-w-[45ch]">
            <h1 className="mb-4 text-5xl font-bold tracking-[0.05em]">
              Tymur&nbsp;Rozhkovskyi
            </h1>
            <p className="text-xs leading-relaxed text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nihil mollitia corporis quis inventore voluptatibus praesentium
              voluptatum blanditiis maxime consectetur, sunt quisquam quam
              molestias voluptas eligendi repellat vero at saepe.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
