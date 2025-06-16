import React from "react";

export default function Header() {
    return (
        <header className="pt-6 flex justify-between h-auto w-full">
            <div className="text-header text-lg font-bold cursor-pointer "><a href="#">m1rageLA</a></div>
            <ul className="flex gap-10 text-li font-light cursor-pointer ">
                {["Home", "About", "Projects", "Skills", "Contacts"].map((item) => {
                    return (
                        <li key={item} className="hover:text-li-hover cursor-pointer">{item}</li>
                    )
                })}
            </ul>
        </header>
    )
}