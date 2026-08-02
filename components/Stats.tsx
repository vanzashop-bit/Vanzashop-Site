import {
  BadgeCheck,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";

const items = [
  {
    title: "4 Marketplaces",
    description:
      "Escolha a plataforma de compra que você preferir.",
    icon: ShoppingBag,
  },
  {
    title: "Compra Segura",
    description:
      "Pagamentos protegidos e toda a segurança oferecida pelos marketplaces.",
    icon: ShieldCheck,
  },
  {
    title: "Entrega Nacional",
    description:
      "Produtos enviados para todo o Brasil através da logística dos nossos parceiros.",
    icon: Truck,
  },
  {
    title: "Compromisso VANZASHOP",
    description:
      "Selecionamos produtos com foco em qualidade, confiança e excelente experiência de compra.",
    icon: BadgeCheck,
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

      <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black via-slate-900 to-slate-950 p-10 text-white shadow-2xl sm:p-14">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-300">

            NOSSO COMPROMISSO

          </span>

          <h2 className="mt-6 text-4xl font-black">

            Mais segurança e praticidade para suas compras.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">

            Trabalhamos para oferecer uma experiência de compra confiável,
            utilizando os principais marketplaces do Brasil e um catálogo
            cuidadosamente selecionado.

          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-orange-500/20"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">

                  <Icon className="h-7 w-7" />

                </div>

                <h3 className="mt-6 text-xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-300">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
