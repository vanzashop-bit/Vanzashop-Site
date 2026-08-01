import Link from "next/link";
import { Globe, MessageCircleMore, Send, Sparkles } from "lucide-react";

const footerLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Marketplaces", href: "#marketplaces" },
  { label: "Contato", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Globe },
  { label: "Instagram", href: "https://www.instagram.com", icon: Sparkles },
  { label: "X", href: "https://x.com", icon: Send },
  { label: "WhatsApp", href: "https://wa.me/5554999981574", icon: MessageCircleMore },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-2xl font-semibold tracking-tight text-white">VANZASHOP</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Operações premium de marketplace para marcas que querem crescer mais rápido, executar com mais força e ter melhor visibilidade.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Navegação</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Redes</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-blue-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © 2026 VANZASHOP. Todos os direitos reservados.
      </div>
    </footer>
  );
}
