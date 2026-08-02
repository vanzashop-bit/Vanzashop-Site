import {
  Drill,
  Hammer,
  Home,
  Lightbulb,
  Paintbrush2,
  Wrench,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Ferramentas",
    description:
      "Ferramentas manuais, elétricas e acessórios para uso profissional e doméstico.",
    icon: Hammer,
  },
  {
    title: "Materiais Elétricos",
    description:
      "Produtos para instalações, manutenção e projetos elétricos residenciais e comerciais.",
    icon: Lightbulb,
  },
  {
    title: "Hidráulica",
    description:
      "Soluções completas para instalações hidráulicas, reparos e reformas.",
    icon: Wrench,
  },
  {
    title: "Pintura",
    description:
      "Tintas, pincéis, rolos e acessórios para acabamentos de alta qualidade.",
    icon: Paintbrush2,
  },
  {
    title: "Construção",
    description:
      "Produtos essenciais para obras, reformas e manutenção em geral.",
    icon: Drill,
  },
  {
    title: "Casa & Organização",
    description:
      "Itens para facilitar o dia a dia, organizar ambientes e trazer mais praticidade.",
    icon: Home,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow="O QUE VOCÊ ENCONTRA"
        title="Produtos para todas as etapas da sua casa e da sua obra."
        description="Selecionamos produtos de qualidade para atender desde pequenos reparos até grandes projetos, sempre através dos principais marketplaces do Brasil."
        center
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">

                <Icon className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                {service.title}

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                {service.description}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
