import {
  ArrowRight,
  Boxes,
  ShieldCheck,
  Truck,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const pillars = [
  {
    title: "Produtos de qualidade",
    description:
      "Selecionamos produtos de marcas reconhecidas, priorizando qualidade, durabilidade e excelente custo-benefício para nossos clientes.",
    icon: Boxes,
  },
  {
    title: "Compra com segurança",
    description:
      "Todas as compras são realizadas através dos principais marketplaces do Brasil, oferecendo proteção e confiança durante toda a experiência.",
    icon: ShieldCheck,
  },
  {
    title: "Entrega em todo o Brasil",
    description:
      "A logística é realizada pelos próprios marketplaces parceiros, proporcionando agilidade, rastreamento e segurança na entrega.",
    icon: Truck,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

        {/* Texto */}

        <div>

          <SectionTitle
            eyebrow="SOBRE A VANZASHOP"
            title="Facilitamos sua compra nos maiores marketplaces do Brasil."
            description="A VANZASHOP conecta você aos melhores produtos para casa, construção, ferramentas e manutenção através das plataformas mais confiáveis do mercado."
          />

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-8 shadow-sm">

            <p className="text-lg leading-8 text-slate-600">

              Nosso compromisso é oferecer uma experiência simples, segura e
              transparente, reunindo produtos selecionados em lojas oficiais
              presentes nos principais marketplaces do país.

            </p>

            <a
              href="#marketplaces"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
            >
              Conheça nossos canais de venda

              <ArrowRight className="h-4 w-4" />

            </a>

          </div>

        </div>

        {/* Cards */}

        <div className="grid gap-6">

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">

                  <Icon className="h-7 w-7" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {pillar.title}

                </h3>

                <p className="mt-4 leading-8 text-slate-600">

                  {pillar.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
