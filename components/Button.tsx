import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  leftIcon,
  rightIcon,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:-translate-y-1 hover:shadow-xl",

    secondary:
      "bg-slate-900 text-white hover:bg-black hover:-translate-y-1",

    outline:
      "border border-slate-300 bg-white text-slate-800 hover:border-orange-500 hover:text-orange-600 hover:-translate-y-1",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </Link>
  );
}
