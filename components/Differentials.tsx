import { BadgeCheck, Box, ShieldCheck, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "Produtos selecionados",
    description: "Itens com foco em qualidade, relevância e maior chance de conversão.",
    icon: Sparkles,
  },
  {
    title: "Entrega rápida",
    description: "Operação pensada para oferecer mais velocidade e praticidade ao consumidor.",
    icon: Box,
  },
  {
    title: "Compra segura",
    description: "Processos e suporte alinhados com segurança, clareza e confiança.",
    icon: ShieldCheck,
  },
  {
    title: "Atendimento humanizado",
    description: "Uma equipe dedicada para auxiliar em cada etapa da experiência de compra.",
    icon: BadgeCheck,
  },
];

export default function Differentials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Por que comprar com a VANZASHOP"
        title="Mais confiança, mais praticidade e uma experiência mais completa"
        description="A proposta é simples: tornar a compra mais simples, segura e agradável para o consumidor."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
