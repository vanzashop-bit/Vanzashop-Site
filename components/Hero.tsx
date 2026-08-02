import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Compra 100% Segura",
    icon: ShieldCheck,
  },
  {
    title: "Entrega para todo o Brasil",
    icon: Truck,
  },
  {
    title: "Lojas Oficiais",
    icon: BadgeCheck,
  },
];

const marketplaces = [
  "Mercado Livre",
  "Shopee",
  "Amazon",
  "Magazine Luiza",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-orange-50">

      <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-orange-300/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-3xl" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">

            Produtos • Casa • Ferramentas • Construção

          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-950 lg:text-7xl">

            Tudo o que você precisa para sua casa e obra.

          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">

            Encontre produtos de qualidade e compre com segurança através dos
            maiores marketplaces do Brasil.

          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="#marketplaces"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              Onde Comprar

              <ArrowRight className="h-4 w-4" />

            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (

                <div
                  key={feature.title}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm"
                >

                  <Icon className="h-4 w-4 text-orange-500" />

                  <span className="text-sm font-medium text-slate-700">

                    {feature.title}

                  </span>

                </div>

              );

            })}

          </div>

        </div>

        {/* Card */}

        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-2xl">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">

            COMPRE ONDE PREFERIR

          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">

            Estamos presentes nos maiores marketplaces do Brasil.

          </h2>

          <p className="mt-5 leading-8 text-slate-600">

            Escolha sua plataforma favorita e tenha toda a segurança, praticidade
            e confiabilidade que você já conhece.

          </p>

          <div className="mt-10 space-y-4">

            {marketplaces.map((marketplace) => (

              <div
                key={marketplace}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
              >

                <span className="font-semibold text-slate-900">

                  {marketplace}

                </span>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">

                  Disponível

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
