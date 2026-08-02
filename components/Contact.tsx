import {
  ArrowRight,
  ShoppingCart,
  Store,
  Package,
  BadgeCheck,
} from "lucide-react";

const marketplaces = [
  {
    name: "Mercado Livre",
    description:
      "Compre com praticidade através da maior plataforma de marketplace do Brasil.",
    icon: ShoppingCart,
    button: "Comprar",
    href: "https://www.mercadolivre.com.br/pagina/vanzashop",
  },
  {
    name: "Shopee",
    description:
      "Encontre produtos com ofertas competitivas e uma experiência de compra simples.",
    icon: Store,
    button: "Comprar",
    href: "https://shopee.com.br/vanzashop?categoryId=100636&entryPoint=ShopByPDP&itemId=58251526226",
  },
  {
    name: "Amazon",
    description:
      "Compre com toda a segurança e praticidade da Amazon.",
    icon: Package,
    button: "Comprar",
    href: "https://www.amazon.com.br/s?i=merchant-items&me=A24EYZMNJXH3ZE",
  },
  {
    name: "Magalu",
    description:
      "Conheça nossa loja oficial no Magazine Luiza.",
    icon: BadgeCheck,
    button: "Comprar",
    href: "https://www.magazineluiza.com.br/lojista/casaprimacomercioeletronico/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black via-slate-900 to-slate-950 p-10 text-white shadow-2xl sm:p-14">

        <div className="max-w-3xl">

          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-300">

            ONDE COMPRAR

          </span>

          <h2 className="mt-6 text-4xl font-black">

            Escolha o marketplace da sua preferência.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">

            A VANZASHOP está presente nos principais marketplaces do Brasil.
            Escolha sua plataforma favorita e compre com segurança.

          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {marketplaces.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.name}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/20 hover:bg-white/10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">

                  <Icon className="h-7 w-7" />

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {item.name}

                </h3>

                <p className="mt-4 leading-7 text-slate-300">

                  {item.description}

                </p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
                >
                  {item.button}

                  <ArrowRight className="h-4 w-4" />

                </a>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
