import Menu from "./components/Menu";


export default function Home() {
  return (
    <div>
      <Menu />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <main className="flex flex-col gap-8 row-start-2 items-start sm:items-end">
          <h2>Tymur Rozhkovskyi</h2>

        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>

    </div>
  );
}
