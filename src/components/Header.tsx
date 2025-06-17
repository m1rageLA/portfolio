"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home",    path: "/" },
  { name: "About",   path: "/about" },
  { name: "Projects",path: "/projects" },
  { name: "Skills",  path: "/skills" },
  { name: "Contacts",path: "/contacts" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="pt-6 flex justify-between w-full">
      <div className="text-header text-lg font-bold">
        <Link href="/">m1rageLA</Link>
      </div>

      <ul className="flex gap-10 text-li font-light">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`
                  relative pb-1 transition-all duration-200
                  ${isActive
                    ? "border-b-2 border-console-green"
                    : "hover:text-li-hover"}
                `}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
