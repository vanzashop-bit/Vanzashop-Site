import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Vanzashop"
            width={180}
            height={56}
            priority
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-10 text-[15px] font-semibold text-slate-700 lg:flex">
          <a href="#sobre" className="transition hover:text-blue-600">
            Sobre
          </a>
          <a href="#servicos" className="transition hover:text-blue-600">
            Serviços
          </a>
          <a href="#marketplaces" className="transition hover:text-blue-600">
            Marketplaces
          </a>
          <a href="#contato" className="transition hover:text-blue-600">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.mercadolivre.com.br/pagina/vanzashop"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 md:block"
          >
            Comprar
          </a>
          <a
            href="https://wa.me/5554999981574"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Consultoria
          </a>
        </div>
      </div>
    </header>
  );
}
