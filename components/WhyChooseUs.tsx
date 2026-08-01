import { ArrowRight, Clock3, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import SectionTitle from "./SectionTitle";

const reasons = [
  {
    title: "Tecnologia que escala",
    description: "Operamos com fluxos robustos, automação, integrações claras e camadas premium de operação.",
    icon: Sparkles,
  },
  {
    title: "Suporte humano",
    description: "Uma equipe dedicada acompanha seus objetivos com comunicação ágil e execução prática.",
    icon: ShieldCheck,
  },
  {
    title: "Execução rápida",
    description: "Cada entrega é pensada para avançar com velocidade sem abrir mão de qualidade ou confiabilidade.",
    icon: Clock3,
  },
  {
    title: "Operações orientadas a crescimento",
    description: "Do cuidado com catálogo à expansão de canal, projetamos para manter impulso e proteger a margem.",
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Por que escolher a VANZASHOP"
        title="Pensado para marcas ambiciosas que precisam de precisão, velocidade e clareza."
        description="Unimos estratégia e execução operacional para que seu negócio em marketplace cresça sem atrito."
        center
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-[0_24px_60px_rgba(37,99,235,0.2)]">
          <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
            Modelo operacional premium
          </div>
          <h3 className="mt-6 text-3xl font-semibold tracking-tight">
            Um sistema que ajuda clientes a comprar, equipes a entregar e liderança a enxergar o cenário completo.
          </h3>
          <p className="mt-4 text-base leading-8 text-blue-50">
            Da coordenação de campanhas à saúde de estoque, transformamos a complexidade do comércio multisite em uma máquina organizada e escalável.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-100">
            Explore nosso modelo de consultoria
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-950">{reason.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
