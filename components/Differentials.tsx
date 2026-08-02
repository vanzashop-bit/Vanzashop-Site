import {
  BadgeCheck,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "Lojas Oficiais",
    description:
      "Compre diretamente pelas lojas oficiais da VANZASHOP nos principais marketplaces do Brasil.",
    icon: BadgeCheck,
  },
  {
    title: "Produtos de Qualidade",
    description:
      "Selecionamos produtos de marcas reconhecidas para oferecer qualidade e excelente custo-benefício.",
    icon: PackageCheck,
  },
  {
    title: "Compra Protegida",
    description:
      "Pagamento seguro, rastreamento de pedidos e toda a proteção oferecida pelos marketplaces parceiros.",
    icon: ShieldCheck,
  },
  {
    title: "Entrega Nacional",
    description:
      "Receba seus produtos em qualquer região do Brasil utilizando a estrutura logística dos marketplaces.",
    icon: Truck,
  },
];

export default function Differentials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

      <SectionTitle
        eyebrow="POR QUE ESCOLHER A VANZASHOP"
        title="Comprar ficou mais fácil, seguro e confiável."
        description="Estamos presentes nos maiores marketplaces do Brasil para oferecer praticidade, segurança e uma excelente experiência de compra."
        center
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">

                <Icon className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">

                {item.title}

              </h3>

              <p className="mt-4 leading-7 text-slate-600">

                {item.description}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
