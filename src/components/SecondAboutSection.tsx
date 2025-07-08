/* ────────────────────────────────────────────────────────────
   AboutSection.tsx – версия без иконки, текст как раньше,
   линия console-green, нижний акцент белый
   ──────────────────────────────────────────────────────────── */

"use client";

import { motion } from "framer-motion";

export default function SecondAboutSection() {
  return (
    <div className="flex items-center">
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-[60ch] text-li"
      >
        <span
          className="pointer-events-none absolute -left-6 inset-y-1 w-px
             bg-gradient-to-t
               from-console-green/70
               via-console-green/30
               to-transparent"
        />

        <span
          className="absolute -left-7 bottom-0 h-2 w-2 rounded-full
             bg-console-green
             shadow-[0_0_8px_2px_var(--tw-console-green)]"
        />

        <h2 className="mb-4 text-4xl font-bold tracking-tight">Experience</h2>
        <p className="text-xs leading-relaxed">
          At Clearmedia (Poland), I worked as a full-stack developer within a compact Agile team, participating in the full delivery cycle: from planning and implementation to testing and refinement.
          <br /><br />
          Over the past 2 years, I’ve built experience through hands-on involvement in early-stage startups, development internships across different countries, and leading small teams in end-to-end project delivery. This gave me a strong understanding of both technical execution and team dynamics.
          <br /><br />
          I completed 6 years of formal education in software engineering, but the majority of my practical knowledge has come through self-driven learning.
        </p>

      </motion.section>

    </div>

  );
}
