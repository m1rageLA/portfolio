"use client";
import Link from "next/link";
import { useEffect, useState, MouseEvent } from "react";
import clsx from "clsx";

const navItems = [
  { name: "Home",     id: "hero"     },
  { name: "About",    id: "about"    },
  { name: "Projects", id: "projects" },
  { name: "Skills",   id: "skills"   },
  { name: "Contacts", id: "contacts" },
];

export default function Header() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  /* подсветка активного пункта — тем же способом, что и SectionNav */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();                 // блокируем стандартный якорь
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="pt-6 flex justify-between items-center w-full">
      <div className="text-lg font-semibold">
        <Link href="/">m<span className="text-console-green text-xl">1</span>rageLA</Link>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
        className="md:hidden p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <ul
        className={clsx(
          "text-li font-light md:flex gap-10",
          "md:static md:translate-x-0 md:bg-transparent",
          open
            ? "flex flex-col absolute right-4 top-full mt-2 bg-black p-4 gap-4 shadow-lg"
            : "hidden"
        )}
      >
        {navItems.map(({ name, id }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={clsx(
                "relative pb-1 transition-all duration-200",
                active === id
                  ? "border-b-2 border-console-green"
                  : "hover:text-li-hover"
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
