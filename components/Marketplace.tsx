import { ArrowRight, ShoppingBag } from "lucide-react";
import SectionTitle from "./SectionTitle";

const marketplaces = [
  {
    name: "Mercado Livre",
    description: "Encontre produtos com praticidade, velocidade e segurança na maior plataforma de comércio do Brasil.",
    cta: "Comprar",
    href: "https://www.mercadolivre.com.br/pagina/vanzashop",
  },
  {
    name: "Shopee",
    description: "Descubra itens selecionados com uma experiência de compra simples e acessível.",
    cta: "Comprar",
    href: "https://shopee.com.br/vanzashop?categoryId=100636&entryPoint=ShopByPDP&itemId=58251526226",
  },
  {
    name: "Amazon",
    description: "Acompanhe a abertura de novas oportunidades em um canal de alcance ainda maior.",
    cta: "Em breve",
    href: "#",
  },
  {
    name: "Magalu",
    description: "Explore novos produtos e categorias em uma operação em expansão.",
    cta: "Em breve",
    href: "#",
  },
];

export default function Marketplace() {
  return (
    <section id="marketplaces" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Onde comprar"
        title="Acesse a VANZASHOP pelos principais marketplaces"
        description="A experiência de compra foi reorganizada para mostrar claramente onde o cliente pode encontrar produtos com confiança."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {marketplaces.map((marketplace) => (
          <div key={marketplace.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">{marketplace.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{marketplace.description}</p>
            <a
              href={marketplace.href}
              target={marketplace.href.startsWith("http") ? "_blank" : undefined}
              rel={marketplace.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
            >
              {marketplace.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
