"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Vocês atendem marcas no Brasil e fora dele?",
    answer: "Sim. Trabalhamos com varejistas brasileiros e marcas internacionais que precisam de execução local forte em marketplace e apoio estratégico.",
  },
  {
    question: "Vocês conseguem gerenciar vários marketplaces ao mesmo tempo?",
    answer: "Com certeza. Coordenamos operações multicanal, conteúdo, relatórios e otimização para que sua equipe foque no crescimento.",
  },
  {
    question: "A consultoria é indicada para empresas em fase inicial?",
    answer: "Sim. Adaptamos a abordagem para founders, times pequenos e marcas consolidadas que desejam um modelo operacional mais estruturado.",
  },
  {
    question: "Com que rapidez podemos começar?",
    answer: "Na maioria dos casos, iniciamos com uma sessão de descoberta e uma fase curta de onboarding para alinhar prioridades rapidamente.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Perguntas que líderes fazem antes de escalar sua presença em marketplace.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const expanded = index === openIndex;
            return (
              <div key={faq.question} className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(expanded ? null : index)}
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  {expanded ? <ChevronUp className="h-5 w-5 text-blue-700" /> : <ChevronDown className="h-5 w-5 text-slate-500" />}
                </button>
                {expanded ? <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
