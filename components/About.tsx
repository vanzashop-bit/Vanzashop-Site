import { ArrowRight, Boxes, ShieldCheck, Truck } from "lucide-react";
import SectionTitle from "./SectionTitle";

const pillars = [
  {
    title: "Produtos selecionados",
    description:
      "Trabalhamos com um catálogo cuidadosamente selecionado para oferecer qualidade, confiança e excelente custo-benefício.",
    icon: Boxes,
  },
  {
    title: "Compra segura",
    description:
      "Todas as compras são realizadas pelos maiores marketplaces do Brasil, garantindo praticidade e segurança durante toda a jornada.",
    icon: ShieldCheck,
  },
  {
    title: "Entrega para todo o Brasil",
    description:
      "Conte com a logística e a estrutura dos marketplaces parceiros para receber seus produtos com rapidez e tranquilidade.",
    icon: Truck,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">

        <div>

          <SectionTitle
            eyebrow="SOBRE A VANZASHOP"
            title="Sua loja parceira nos maiores marketplaces do Brasil."
            description="A VANZASHOP reúne produtos para casa, construção, ferramentas e manutenção em uma experiência de compra prática, segura e confiável."
          />

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">

            <p className="text-lg leading-8 text-slate-600">

              Nosso objetivo é facilitar sua compra, oferecendo produtos
              selecionados, atendimento próximo e a segurança de comprar através
              dos principais marketplaces do país.

            </p>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-orange-600">

              Conheça nossos canais de venda

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>

        </div>

        <div className="grid gap-5">

          {pillars.map((pillar) => {

            const Icon = pillar.icon;

            return (

              <div
                key={pillar.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">

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
