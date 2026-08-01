import { BarChart3, Bot, ClipboardList, MessageSquareQuote, ShoppingCart, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Gestão de marketplace",
    description: "Supervisão operacional de catálogo, estoque e performance de canal com camada de serviço premium.",
    icon: ShoppingCart,
  },
  {
    title: "Automação",
    description: "Fluxos otimizados para cadastros, aprovações e tarefas operacionais recorrentes.",
    icon: Bot,
  },
  {
    title: "Estratégia de preços",
    description: "Modelos de precificação orientados por dados para melhorar competitividade e proteger a margem.",
    icon: BarChart3,
  },
  {
    title: "Cadastro de produtos",
    description: "Implantação rápida e precisa de catálogo com dados estruturados e consciência de compliance.",
    icon: ClipboardList,
  },
  {
    title: "Consultoria",
    description: "Assessoria executiva para expansão de canal, posicionamento e decisões de crescimento do dia a dia.",
    icon: MessageSquareQuote,
  },
  {
    title: "Relatórios e BI",
    description: "Dashboards acionáveis para que líderes entendam a performance em tempo real.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Serviços"
        title="Uma estrutura operacional completa para crescer com excelência."
        description="Do planejamento à execução, cada serviço é pensado para elevar a performance sem abrir mão de qualidade, controle e escala."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:scale-105">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
