import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}

        <a href="/" className="flex items-center">

          <Image
            src="/images/logovanza.png"
            alt="VANZASHOP"
            width={250}
            height={75}
            priority
            className="h-16 w-auto object-contain"
          />

        </a>

        {/* Menu */}

        <nav className="hidden items-center gap-10 text-[15px] font-semibold text-slate-700 lg:flex">

          <a href="#categories" className="transition hover:text-orange-500">
            Categorias
          </a>

          <a href="#marketplaces" className="transition hover:text-orange-500">
            Onde Comprar
          </a>

          <a href="#about" className="transition hover:text-orange-500">
            Sobre
          </a>

          <a href="#faq" className="transition hover:text-orange-500">
            Dúvidas
          </a>

        </nav>

        {/* CTA */}

        <a
          href="#marketplaces"
          className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Comprar Agora
        </a>

      </div>

    </header>
  );
}
