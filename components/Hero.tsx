import { BadgeCheck, ShieldCheck, Truck } from "lucide-react";

const features = [
  { title: "Compra segura", icon: ShieldCheck },
  { title: "Entrega para todo o Brasil", icon: Truck },
  { title: "Atendimento especializado", icon: BadgeCheck },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Produtos • Marketplace • Compra online
          </span>

          <h1 className="mt-8 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Encontre os melhores produtos para sua casa, construção e reformas.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Comprar com segurança através dos maiores marketplaces do Brasil, com atendimento especializado e uma operação pensada para quem busca praticidade.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.mercadolivre.com.br/pagina/vanzashop"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Comprar no Mercado Livre
            </a>
            <a
              href="https://shopee.com.br/vanzashop?categoryId=100636&entryPoint=ShopByPDP&itemId=58251526226"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Comprar na Shopee
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <Icon className="h-4 w-4 text-blue-600" />
                  {feature.title}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Loja e operação</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">Disponível nos principais marketplaces</h2>
            </div>
            <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">Vanzashop</div>
          </div>

          <div className="mt-8 space-y-4">
            {[
              { name: "Mercado Livre", status: "Disponível agora" },
              { name: "Shopee", status: "Disponível agora" },
              { name: "Amazon", status: "Em breve" },
              { name: "Magalu", status: "Em breve" },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span className="font-medium text-slate-900">{item.name}</span>
                <span className={`text-sm font-semibold ${item.status === "Disponível agora" ? "text-emerald-600" : "text-slate-500"}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
