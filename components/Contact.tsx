import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Button from "./Button";

const contactItems = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 54 99998-1574",
  },
  {
    icon: Mail,
    label: "Email",
    value: "vanzashop@vanzashop.com.br",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Caxias do Sul - RS",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-950 to-blue-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Pronto para construir uma operação de marketplace mais sólida?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Vamos conversar sobre como a VANZASHOP pode apoiar o seu crescimento com consultoria estratégica, automação e excelência operacional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="https://wa.me/5554999981574" className="bg-white text-slate-950 hover:bg-slate-100">
              Iniciar conversa
            </Button>
            <Button href="mailto:vanzashop@vanzashop.com.br" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
              Enviar e-mail
            </Button>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-slate-300">Entre em contato</p>
              <p className="text-xl font-semibold">vanzashop@vanzashop.com.br</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <Icon className="h-5 w-5 text-blue-200" />
                  <div>
                    <p className="text-sm text-slate-300">{item.label}</p>
                    <p className="font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm text-slate-300">
            CNPJ: 38.206.690/0001-02
          </div>
        </div>
      </div>
    </section>
  );
}
