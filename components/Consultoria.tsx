import { ArrowRight, BarChart3, Building2, Compass, Cpu, PackageCheck, ShoppingCart } from "lucide-react";
import SectionTitle from "./SectionTitle";

const consultoriaItems = [
  { title: "Consultoria", description: "Estratégias de crescimento e posicionamento para marketplaces.", icon: Compass },
  { title: "Gestão", description: "Organização comercial, operação e performance de canal.", icon: Building2 },
  { title: "Automação", description: "Fluxos mais rápidos e menos erros operacionais.", icon: Cpu },
  { title: "ERP Tiny", description: "Integrações para gestão e controle dos processos.", icon: PackageCheck },
  { title: "Mercado Livre", description: "Estrutura comercial e operacional para cada categoria.", icon: ShoppingCart },
  { title: "Shopee", description: "Expansão com foco em performance e crescimento.", icon: BarChart3 },
];

export default function Consultoria() {
  return (
    <section id="consultoria" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-12 lg:p-16">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Consultoria para empresas
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Sua empresa vende em marketplaces?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Também ajudamos empresas a crescerem com consultoria especializada, automação, integração com ERP, gestão de marketplaces e estratégias de vendas.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {consultoriaItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-blue-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://wa.me/5554999981574"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Solicitar consultoria
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
