export default function HeroSection() {
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
      <div className="relative flex w-full h-6 gap-3 mt-6 group">
        <a href="" className="transition-opacity duration-300 opacity-60 hover:opacity-100 group-hover:opacity-30">
          <img className="w-full h-full" src="./telegram.png" alt="Telegram" />
        </a>
        <a href="https://www.linkedin.com/in/tymur-rozhkovskyi-3a4874358/" className="transition-opacity duration-300 opacity-60 hover:opacity-100 group-hover:opacity-30">
          <img className="w-full h-full" src="./linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/m1rageLA" className="transition-opacity duration-300 opacity-60 hover:opacity-100 group-hover:opacity-30">
          <img className="w-full h-full" src="./github.png" alt="GitHub" />
        </a>
      </div>

    </section>
  );
}
