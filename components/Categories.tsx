import SectionTitle from "./SectionTitle";

const categories = [
  { name: "Ferramentas", description: "Ferramentas e acessórios para casa e obra." },
  { name: "Elétrica", description: "Produtos essenciais para instalações e manutenção." },
  { name: "Hidráulica", description: "Soluções práticas para encanamento e reforma." },
  { name: "Pintura", description: "Tintas, acabamentos e itens de acabamento." },
  { name: "Construção", description: "Materiais e produtos para projetos completos." },
  { name: "Casa", description: "Itens para decoração, organização e conforto." },
  { name: "Jardinagem", description: "Ferramentas e soluções para o exterior." },
  { name: "Organização", description: "Produtos para otimizar espaços e rotina." },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Categorias em destaque"
        title="Encontre soluções para cada etapa da sua compra"
        description="Uma seleção prática para quem busca facilidade, variedade e confiança nos principais marketplaces."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-950">{category.name}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
