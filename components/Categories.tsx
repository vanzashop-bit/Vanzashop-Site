import {
  Hammer,
  Drill,
  Paintbrush2,
  Lightbulb,
  Wrench,
  Home,
  Trees,
  Package,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const categories = [
  {
    name: "Ferramentas",
    description: "Equipamentos e acessórios para profissionais e uso doméstico.",
    icon: Hammer,
  },
  {
    name: "Elétrica",
    description: "Materiais elétricos para instalações, manutenção e reformas.",
    icon: Lightbulb,
  },
  {
    name: "Hidráulica",
    description: "Produtos para instalações hidráulicas, manutenção e acabamento.",
    icon: Wrench,
  },
  {
    name: "Pintura",
    description: "Tintas, acessórios e itens para acabamento profissional.",
    icon: Paintbrush2,
  },
  {
    name: "Construção",
    description: "Produtos essenciais para obras, reformas e manutenção.",
    icon: Drill,
  },
  {
    name: "Casa & Organização",
    description: "Itens para facilitar o dia a dia com praticidade e funcionalidade.",
    icon: Home,
  },
  {
    name: "Jardinagem",
    description: "Ferramentas e soluções para áreas externas e cuidados com o jardim.",
    icon: Trees,
  },
  {
    name: "Muito mais",
    description: "Novas categorias e produtos são adicionados constantemente.",
    icon: Package,
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionTitle
        eyebrow="CATEGORIAS"
        title="Tudo o que você precisa em um só lugar."
        description="Explore nossas principais categorias e encontre produtos de qualidade disponíveis nos maiores marketplaces do Brasil."
        center
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {categories.map((category) => {

          const Icon = category.icon;

          return (

            <div
              key={category.name}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">

                <Icon className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                {category.name}

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                {category.description}

              </p>

            </div>

          );

        })}

      </div>
    </section>
  );
}
