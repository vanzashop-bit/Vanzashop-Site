import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40";

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-[0_12px_40px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 hover:bg-blue-700",
    secondary:
      "border border-slate-200 bg-white text-slate-800 hover:border-blue-200 hover:text-blue-700",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
