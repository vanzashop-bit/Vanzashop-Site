import {
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Truck,
  RefreshCcw,
  ShoppingBag,
  Star,
} from "lucide-react";

const commitments = [
  {
    title: "Produtos Selecionados",
    description:
      "Trabalhamos com um catálogo cuidadosamente escolhido para oferecer qualidade, durabilidade e excelente custo-benefício.",
    icon: PackageCheck,
  },
  {
    title: "Compra Segura",
    description:
      "Todas as compras são realizadas pelos principais marketplaces do Brasil, garantindo segurança e confiabilidade.",
    icon: ShieldCheck,
  },
  {
    title: "Entrega Nacional",
    description:
      "Receba seus produtos em qualquer região do Brasil através da estrutura logística dos marketplaces parceiros.",
    icon: Truck,
  },
  {
    title: "Catálogo em Constante Evolução",
    description:
      "Novos produtos e categorias são adicionados regularmente para atender diferentes necessidades.",
    icon: RefreshCcw,
  },
  {
    title: "Praticidade na Compra",
    description:
      "Escolha seu marketplace preferido e finalize sua compra de forma simples, rápida e segura.",
    icon: ShoppingBag,
  },
  {
    title: "Compromisso com a Qualidade",
    description:
      "Nosso objetivo é oferecer uma experiência de compra confiável do início ao fim.",
    icon: Star,
  },
];

export default function Consultoria() {
  return (
    <section
      id="commitment"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-black via-slate-900 to-slate-950 p-10 text-white shadow-2xl sm:p-14">

        <div className="max-w-3xl">

          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-300">

            NOSSO COMPROMISSO

          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight">

            Mais do que vender produtos, queremos oferecer uma excelente experiência de compra.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">

            Trabalhamos para que cada compra seja simples, segura e confiável,
            reunindo produtos de qualidade nos principais marketplaces do Brasil.

          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {commitments.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/20 hover:bg-white/10"
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

        <div className="mt-14">

          <a
            href="#marketplaces"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            Conheça nossos marketplaces

            <ArrowRight className="h-4 w-4" />

          </a>

        </div>

      </div>
    </section>
  );
}
