import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <a href="/" className="flex items-center">
          <Image
            src="/images/logovanza.png"
            alt="VANZASHOP Casa & Construção"
            width={240}
            height={70}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-10 text-[15px] font-semibold text-slate-700 lg:flex">
          <a href="#about" className="transition hover:text-orange-500">
            Sobre
          </a>

          <a href="#services" className="transition hover:text-orange-500">
            Diferenciais
          </a>

          <a href="#marketplaces" className="transition hover:text-orange-500">
            Onde Comprar
          </a>

          <a href="#faq" className="transition hover:text-orange-500">
            Dúvidas
          </a>
        </nav>

        <div className="flex items-center gap-3">

          <a
            href="https://www.mercadolivre.com.br/pagina/vanzashop"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl border border-orange-500 px-5 py-3 font-semibold text-orange-600 transition hover:bg-orange-50 md:block"
          >
            Mercado Livre
          </a>

          <a
            href="https://shopee.com.br/vanzashop"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Comprar Agora
          </a>

        </div>

      </div>
    </header>
  );
}
