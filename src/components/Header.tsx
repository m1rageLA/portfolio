"use client";
import Link from "next/link";
import { useEffect, useState, MouseEvent } from "react";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contacts", id: "contacts" },
];

export default function Header() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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
  };

  return (
    <>
      <div className="relative pt-6 w-full">
        <div className="flex items-center justify-between w-full">
          {/* logo слева */}
          <div className="text-lg font-semibold">
            <Link href="/">m<span className="text-console-green text-xl">1</span>rageLA</Link>
          </div>

          {/* десктоп навигация справа */}
          <ul className="hidden lg:flex gap-10 text-li font-light">
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`
              relative pb-1 transition-all duration-200
              ${active === id ? "text-white" : "hover:text-li-hover"}
            `}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* иконка меню (только на мобильных) */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu modal */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 p-2"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="space-y-6 text-xl">
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  onClick={(e) => {
                    handleClick(e, id);
                    setMenuOpen(false);
                  }}
                  className="block px-4 py-2"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
