import {
  ArrowRight,
  BadgeCheck,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const reasons = [
  {
    title: "Compra Protegida",
    description:
      "Todas as compras são realizadas através dos maiores marketplaces do Brasil, oferecendo mais segurança e tranquilidade.",
    icon: ShieldCheck,
  },
  {
    title: "Produtos Selecionados",
    description:
      "Nosso catálogo é composto por produtos escolhidos com foco em qualidade, durabilidade e excelente custo-benefício.",
    icon: PackageCheck,
  },
  {
    title: "Entrega para Todo o Brasil",
    description:
      "Conte com a logística dos marketplaces parceiros para receber seus pedidos em qualquer região do país.",
    icon: Truck,
  },
  {
    title: "Compromisso com Você",
    description:
      "Trabalhamos para oferecer uma experiência de compra simples, segura e confiável do início ao fim.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

      <SectionTitle
        eyebrow="POR QUE ESCOLHER A VANZASHOP"
        title="Uma experiência de compra pensada para oferecer confiança e praticidade."
        description="Mais do que vender produtos, queremos proporcionar uma jornada de compra segura, rápida e transparente através dos principais marketplaces do Brasil."
        center
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">

        {/* Destaque */}

        <div className="rounded-[2.5rem] bg-gradient-to-br from-black via-slate-900 to-slate-950 p-10 text-white shadow-2xl">

          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-300">

            VANZASHOP

          </span>

          <h3 className="mt-8 text-4xl font-black leading-tight">

            Sua loja presente nos maiores marketplaces do Brasil.

          </h3>

          <p className="mt-6 leading-8 text-slate-300">

            Trabalhamos com foco em oferecer produtos de qualidade,
            atendimento responsável e uma experiência de compra segura,
            aproveitando toda a estrutura das plataformas parceiras.

          </p>

          <a
            href="#marketplaces"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
          >

            Escolher Marketplace

            <ArrowRight className="h-4 w-4" />

          </a>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2">

          {reasons.map((reason) => {

            const Icon = reason.icon;

            return (

              <div
                key={reason.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all group-hover:bg-orange-600 group-hover:text-white">

                  <Icon className="h-7 w-7" />

                </div>

                <h4 className="mt-6 text-xl font-bold text-slate-900">

                  {reason.title}

                </h4>

                <p className="mt-4 leading-7 text-slate-600">

                  {reason.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
