import { useEffect, useState } from "react";
import asciiAvatar from "@/avatar";

const EVENT_CHANCE = 2;
const DURATION_MS = 100;
const FPS = 20;
const SHIFT_RANGE = 3;
const MAX_LINES = 100;

export default function useGlitch() {
  const [frame, setFrame] = useState<string>(asciiAvatar);

  useEffect(() => {
    const rowsOriginal = asciiAvatar.split("\n");
    const original = asciiAvatar;

    const lineShift = () => {
      const rows = [...rowsOriginal];
      const linesToGlitch = 1 + Math.floor(Math.random() * MAX_LINES);
      for (let n = 0; n < linesToGlitch; n++) {
        const idx = Math.floor(Math.random() * rows.length);
        const delta = (Math.random() * SHIFT_RANGE * 2 - SHIFT_RANGE) | 0;
        if (delta === 0) continue;
        const row = rows[idx];
        rows[idx] =
          delta > 0
            ? row.slice(-delta) + row.slice(0, -delta)
            : row.slice(-delta) + row.slice(0, row.length + delta);
      }
      return rows.join("\n");
    };

    let glitchUntil = 0;
    const tick = setInterval(() => {
      const now = performance.now();
      if (now >= glitchUntil) {
        if (frame !== original) setFrame(original);
        if (Math.random() < EVENT_CHANCE) {
          glitchUntil = now + DURATION_MS;
          setFrame(lineShift());
        }
        return;
      }
      setFrame(lineShift());
    }, 1000 / FPS);

    return () => clearInterval(tick);
  }, [frame]);

  return frame;
}
