"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero",     label: "Home"     },
  { id: "about",    label: "About"    },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills"   },
  { id: "contacts", label: "Contacts" },
];

export default function SectionNav() {
  const [active, setActive] = useState("hero");

  /* фиксируем, какая секция внутри вьюпорта */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  /* скрываем навигацию, пока активна первая секция */
  const visible = active !== "hero";

  return (
    <div
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-3
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          aria-label={label}
          onClick={() => scrollTo(id)}
          className="
            group relative h-0.5 w-12 overflow-hidden rounded-sm
            bg-neutral-500/40
            hover:bg-white/30 hover:scale-110
            transition-all duration-200
          "
        >
          {active === id && (
            <motion.span
              layoutId="indicator"
              className="absolute inset-0 bg-white"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
