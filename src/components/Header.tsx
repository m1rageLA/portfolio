import React from "react";

export default function Header() {
    return (
        <header className="pt-5 flex justify-between h-auto w-full">
            <div className="text-header font-bold cursor-pointer"><a href="#">m1rageLA</a></div>
            <ul className="flex gap-10 text-li font-light cursor-pointer">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Live Demo</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}