"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navSections = [
  { id: "hero",     label: "Home"     },
  { id: "about",    label: "About"    },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills"   },
  { id: "contacts", label: "Contacts" },
];

export default function SectionNav() {
  const [active, setActive] = useState<string>("hero");

  /* фиксируем, какая секция внутри вьюпорта (включая about-cont) */
  useEffect(() => {
    // Ид для наблюдения — все navSections плюс continuation
    const observeIds = navSections.map((s) => s.id).concat("about-cont");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    observeIds.forEach((id) => {
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
      {navSections.map(({ id, label }) => {
        // Специальный рендер для "About"
        if (id === "about") {
          return (
            <div
              key={id}
              className="relative flex items-center justify-center h-8 w-28"
            >
              {/* Увеличенная кликабельная зона */}
              <div className="absolute inset-0 flex">
                <button
                  aria-label={`${label} part 1`}
                  onClick={() => scrollTo("about")}
                  className="w-1/2 h-full cursor-pointer bg-transparent"
                  style={{ zIndex: 2 }}
                />
                <button
                  aria-label={`${label} part 2`}
                  onClick={() => scrollTo("about-cont")}
                  className="w-1/2 h-full cursor-pointer bg-transparent"
                  style={{ zIndex: 2 }}
                />
              </div>
              {/* Полоска навигации */}
              <div className="relative h-0.5 w-full overflow-hidden rounded-sm bg-neutral-500/40 hover:bg-white/30 hover:scale-110 transition-all duration-200 z-10">
                {/* подсветка левой половины для #about */}
                {active === "about" && (
                  <motion.span
                    layoutId="indicator"
                    className="absolute left-0 top-0 h-full w-1/2 bg-white"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {/* подсветка правой половины для #about-cont */}
                {active === "about-cont" && (
                  <motion.span
                    layoutId="indicator"
                    className="absolute left-1/2 top-0 h-full w-1/2 bg-white"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </div>
            </div>
          );
        }

        // Остальные пункты навигации — без разделения
        return (
          <div
            key={id}
            className="relative flex items-center justify-center h-8 w-16"
          >
            {/* Увеличенная кликабельная зона */}
            <button
              aria-label={label}
              onClick={() => scrollTo(id)}
              className="absolute inset-0 w-full h-full cursor-pointer bg-transparent z-20"
            />
            {/* Полоска навигации */}
            <div className="relative h-0.5 w-full overflow-hidden rounded-sm bg-neutral-500/40 hover:bg-white/30 hover:scale-110 transition-all duration-200 z-10">
              {active === id && (
                <motion.span
                  layoutId="indicator"
                  className="absolute inset-0 bg-white"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
