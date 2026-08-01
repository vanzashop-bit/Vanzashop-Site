import { ArrowRight, Bot, Sparkles, Workflow } from "lucide-react";
import SectionTitle from "./SectionTitle";

const pillars = [
  {
    title: "Gestão de marketplace",
    description: "Coordinate catalogo, estoque e promoções entre canais com precisão operacional.",
    icon: Workflow,
  },
  {
    title: "Automação",
    description: "Automações reduzem esforço manual, aceleram respostas e protegem a margem em escala.",
    icon: Bot,
  },
  {
    title: "Business Intelligence",
    description: "Relatórios claros transformam dados de performance em ação, desde planejamento até estratégia de crescimento.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Sobre a VANZASHOP"
            title="Mais do que uma varejista online. Uma plataforma de crescimento para o comércio moderno."
            description="Ajudamos marcas a ir além de vendas pontuais e a construir operações de marketplace duradouras, mensuráveis e performáticas."
          />
          <div className="mt-8 space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-600">
              A VANZASHOP une consultoria estratégica, gestão operacional e tecnologia para desbloquear novas receitas nos marketplaces mais competitivos do Brasil.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
              Descubra como nossa equipe pode acelerar a próxima etapa do seu crescimento
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
