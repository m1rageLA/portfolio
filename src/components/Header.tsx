"use client";
import Link from "next/link";
import { useEffect, useState, MouseEvent } from "react";

const navItems = [
  { name: "Home",     id: "hero"     },
  { name: "About",    id: "about"    },
  { name: "Projects", id: "projects" },
  { name: "Skills",   id: "skills"   },
  { name: "Contacts", id: "contacts" },
];

export default function Header() {
  const [active, setActive] = useState("hero");

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
    <div className="pt-6 flex justify-between w-full">
      <div className="text-lg font-semibold">
        <Link href="/">m<span className="text-console-green text-xl">1</span>rageLA</Link>
      </div>

      <ul className="flex gap-10 text-li font-light">
        {navItems.map(({ name, id }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`
                relative pb-1 transition-all duration-200
                ${active === id
                  ? "text-white"
                  : "hover:text-li-hover"}
              `}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
