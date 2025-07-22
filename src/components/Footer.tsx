// Footer.jsx
import { MouseEventHandler, useMemo } from 'react';

// local social icons (place .png or .svg in /public/icons)
const socials = [
    { href: 'https://t.me/tmrrozh', src: '/telegram.png', alt: 'Telegram' },
    { href: 'https://www.linkedin.com/in/tymur-rozhkovskyi-3a4874358/', src: './linkedin.png', alt: 'LinkedIn' },
    { href: 'https://github.com/m1rageLA?tab=repositories', src: '/github.png', alt: 'GitHub' },
    { href: 'https://www.behance.net/mirage_LA', src: '/behance.png', alt: 'Behance' },
    { href: 'https://www.fiverr.com/s/pdXz97Z', src: '/fiverr.png', alt: 'Fiverr' },
];

export default function Footer() {
    /**
     * Services list (10 items). Use `useMemo` so the array is not rebuilt
     * on every render (not critical, but nice-to-have).
     */
    const services = useMemo(
        () => [
            'Web-apps & SPA',
            'Mobile apps (React Native)',
            'Custom APIs & backend services',
            'Realtime / WebSocket',
            'Cloud infrastructure (Docker, CI/CD, Firebase)',
            'Performance optimisation',
            'Testing & QA automation',
            'UI / UX engineering',
            'Technical leadership',
            'WASM integration',
        ],
        []
    );

    /**
     * Smooth scroll to the very top — works even if no element with id="top" exists.
     */
    const scrollTop = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <footer
            id="contact"
            className="relative lg:h-screen min-h-screen flex flex-col justify-between bg-black text-gray-100 px-6 lg:px-24 py-12"
        >
            {/* neon pulse line */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#5cff96]/0 via-[#5cff96]/70 to-[#5cff96]/0 animate-pulse" />

            <div className="pointer-events-none absolute inset-0 opacity-5
                      [mask-image:radial-gradient(circle,white,transparent_70%)]
                      bg-[radial-gradient(#5cff96_1px,transparent_1px)]
                      [background-size:6px_6px]" />
            <div className="z-10 flex-1 w-full grid grid-cols-12 gap-10 place-content-center">
                <div className="col-span-12 lg:col-span-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide ">
                        Services
                    </h2>
                    <ul className="mx-auto w-fit list-none lg:list-disc space-y-2 text-sm lg:text-base text-gray-300 lg:marker:text-[#5cff96]">
                        {services.map((item) => (
                            <li key={item} className="leading-snug hover:text-white transition-colors duration-200">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact block (spans 6 columns on md+) */}
                <div className="col-span-12 lg:col-span-6 flex flex-col items-center text-center justify-center lg:items-end lg:text-right mt-14 lg:mt-0">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide uppercase">
                        Get in touch
                    </h2>

                    <a
                        href="mailto:tymurrozhkovskyi@gmail.com"
                        className="inline-block text-sm lg:text-base font-medium text-[#5cff96] hover:underline decoration-[#5cff96]/70 underline-offset-4"
                    >
                        tymurrozhkovskyi@gmail.com
                    </a>

                    {/* socials */}
                    <div className="mt-8 flex gap-3 group">
                        {socials.map(({ href, src, alt }) => (
                            <a
                                key={alt}
                                href={href}
                                aria-label={alt}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity duration-300 opacity-60 hover:opacity-100 group-hover:opacity-30"
                            >
                                <img className="w-8 h-8 lg:w-6 lg:h-6" src={src} alt={alt} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* footer bottom */}
            <div className="z-10 flex flex-col items-center gap-6 text-[11px] lg:text-xs text-gray-500 mt-20 lg:mt-0 pb-10">


                <span className='mt-10'>© {new Date().getFullYear()} Tymur Rozhkovskyi</span>

                <button
                    onClick={scrollTop}
                    className="group flex items-center gap-1 hover:text-[#5cff96] transition-colors"
                >
                    Back&nbsp;to&nbsp;top
                    <svg
                        className="h-3.5 w-3.5 -rotate-90 group-hover:-translate-y-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </footer>);
}