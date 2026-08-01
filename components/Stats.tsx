"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 300, suffix: "k+", label: "Clientes" },
  { value: 7000, suffix: "+", label: "Pedidos mensais" },
  { value: 98, suffix: "%", label: "Satisfação do cliente" },
  { value: 4, suffix: "", label: "Marketplaces" },
];

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return value;
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const count = useCountUp(stat.value);

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
      <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {stat.value >= 1000 ? `${Math.round(count / 1000)}k+` : `${count}${stat.suffix}`}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
