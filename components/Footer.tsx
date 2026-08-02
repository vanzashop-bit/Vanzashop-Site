import Image from "next/image";
import Link from "next/link";

const marketplaces = [
  {
    label: "Mercado Livre",
    href: "https://www.mercadolivre.com.br/pagina/vanzashop",
  },
  {
    label: "Shopee",
    href: "https://shopee.com.br/vanzashop?categoryId=100636&entryPoint=ShopByPDP&itemId=58251526226",
  },
  {
    label: "Amazon",
    href: "https://www.amazon.com.br/s?i=merchant-items&me=A24EYZMNJXH3ZE",
  },
  {
    label: "Magazine Luiza",
    href: "https://www.magazineluiza.com.br/lojista/casaprimacomercioeletronico/",
  },
];

const categories = [
  "Ferramentas",
  "Elétrica",
  "Hidráulica",
  "Pintura",
  "Construção",
  "Casa & Organização",
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* Logo */}

          <div>

            <Image
              src="/images/logovanza.png"
              alt="VANZASHOP"
              width={220}
              height={70}
              className="h-14 w-auto"
            />

            <p className="mt-6 max-w-md leading-8 text-slate-400">

              Produtos para casa, construção, ferramentas e muito mais.
              Compre com segurança através dos principais marketplaces do Brasil.

            </p>

          </div>

          {/* Categorias */}

          <div>

            <h3 className="text-lg font-bold text-white">

              Categorias

            </h3>

            <ul className="mt-6 space-y-3">

              {categories.map((category) => (

                <li key={category}>

                  <span className="text-slate-400">

                    {category}

                  </span>

                </li>

              ))}

            </ul>

          </div>

          {/* Marketplaces */}

          <div>

            <h3 className="text-lg font-bold text-white">

              Onde Comprar

            </h3>

            <ul className="mt-6 space-y-3">

              {marketplaces.map((marketplace) => (

                <li key={marketplace.label}>

                  <Link
                    href={marketplace.href}
                    target="_blank"
                    className="transition hover:text-orange-400"
                  >
                    {marketplace.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">

          <span>

            © 2026 VANZASHOP. Todos os direitos reservados.

          </span>

          <span>

            Venda realizada exclusivamente através dos marketplaces parceiros.

          </span>

        </div>

      </div>

    </footer>
  );
}
