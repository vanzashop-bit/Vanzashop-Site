import { ArrowRight, ShoppingBag } from "lucide-react";
import SectionTitle from "./SectionTitle";

const marketplaces = [
  {
    name: "Mercado Livre",
    description: "Otimize ofertas, disponibilidade de estoque e campanhas para o maior marketplace do país.",
    cta: "Explorar canal",
  },
  {
    name: "Shopee",
    description: "Aumente a conversão com campanhas mais bem estruturadas e merchandising mais eficiente.",
    cta: "Explorar canal",
  },
  {
    name: "Amazon",
    description: "Fortaleça performance de listagem, conteúdo e excelência operacional em escala.",
    cta: "Explorar canal",
  },
  {
    name: "Magalu",
    description: "Apoie crescimento de alta velocidade com catálogo forte e agilidade comercial.",
    cta: "Explorar canal",
  },
];

export default function Marketplace() {
  return (
    <section id="marketplaces" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Marketplaces de confiança"
        title="Suporte operacional para os canais que realmente importam."
        description="Construímos prontidão para cada plataforma para que o crescimento seja controlado, mensurável e premium."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {marketplaces.map((marketplace) => (
          <div key={marketplace.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{marketplace.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{marketplace.description}</p>
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
              {marketplace.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
