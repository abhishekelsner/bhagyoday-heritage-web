import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-white" : "text-foreground";
  const sub = variant === "light" ? "text-white/70" : "text-light-text";
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Bhagyoday Restaurant home">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full gradient-gold text-white font-display text-xl shadow-luxe">
        B
        <span className="absolute inset-0 rounded-full ring-1 ring-white/30" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-lg sm:text-xl ${color} tracking-tight`}>
          Bhagyoday
        </span>
        <span className={`text-[10px] uppercase tracking-[0.22em] ${sub}`}>
          Pure Veg · Since 1992
        </span>
      </span>
    </Link>
  );
}
