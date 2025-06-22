/* ────────────────────────────────────────────────────────────
   AboutSection.tsx – версия без иконки, текст как раньше,
   линия console-green, нижний акцент белый
   ──────────────────────────────────────────────────────────── */

"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <div className="flex items-center">
            <motion.section
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative max-w-[60ch] text-li"
            >
                {/* декоративная вертикальная линия слева */}
                <span className="pointer-events-none absolute -left-6 top-1 h-full w-px bg-gradient-to-b from-console-green/70 via-console-green/30 to-transparent" />
                <span className="absolute -left-7 top-0.5 h-2 w-2 rounded-full bg-console-green shadow-[0_0_8px_2px_var(--tw-console-green)]" />

                {/* заголовок */}
                <h2 className="mb-4 text-4xl font-bold tracking-tight">About me</h2>

                {/* текст (вернули исходные стили) */}
                <p className="text-xs leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sequi
                    incidunt. Reiciendis in aspernatur voluptate doloribus, dolor neque
                    perspiciatis sunt aliquam assumenda exercitationem ab necessitatibus
                    soluta commodi dolores animi architecto. Sequi incidunt. Reiciendis in
                    aspernatur voluptate doloribus, dolor neque perspiciatis sunt aliquam
                    assumenda exercitationem ab necessitatibus soluta commodi dolores animi
                    architecto.
                    <br />
                    <br />
                    Sequi incidunt. Reiciendis in aspernatur voluptate doloribus, dolor
                    neque perspiciatis sunt aliquam assumenda exercitationem ab
                    necessitatibus soluta commodi dolores animi architecto. Sequi incidunt.
                    Reiciendis in aspernatur voluptate doloribus, dolor neque perspiciatis
                    sunt aliquam assumenda exercitationem ab necessitatibus soluta commodi
                    dolores animi architecto.
                </p>

                {/* нижний декоративный акцент – белый */}
                {/* <div className="mt-6 h-1 w-20 rounded-full bg-white" /> */}
            </motion.section>

        </div>

    );
}
