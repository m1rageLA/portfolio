export default function HeroSection() {
  const socials = [
    { href: 'https://t.me/tmrrozh', src: '/telegram.png', alt: 'Telegram' },
    { href: 'https://www.linkedin.com/in/tymur-rozhkovskyi-3a4874358/', src: './linkedin.png', alt: 'LinkedIn' },
    { href: 'https://github.com/m1rageLA?tab=repositories', src: '/github.png', alt: 'GitHub' },
    { href: 'https://www.behance.net/mirage_LA', src: '/behance.png', alt: 'Behance' },
    { href: 'https://www.fiverr.com/s/pdXz97Z', src: '/fiverr.png', alt: 'Fiverr' },
  ];

  return (
    <section className="relative z-20 max-w-[45ch]">
      <h1 className="text-lg font-bold tracking-[0.05em]">I'm Tymur&nbsp;Rozhkovskyi</h1>
      <h2 className="text-5xl font-extrabold mb-4">Web developer</h2>
      <p className="text-xs leading-relaxed text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        nihil mollitia corporis quis inventore voluptatibus praesentium
        voluptatum blanditiis maxime consectetur, sunt quisquam quam
        molestias voluptas eligendi repellat vero at saepe.
      </p>
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
            <img className="w-8 h-8 md:w-6 md:h-6" src={src} alt={alt} />
          </a>
        ))}
      </div>

    </section>
  );
}
