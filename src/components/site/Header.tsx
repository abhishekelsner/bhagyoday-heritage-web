import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/restaurant", label: "Restaurant" },
  { to: "/banquet-hall", label: "Banquet Hall" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_4px_30px_-20px_rgba(0,0,0,0.15)]"
        }`}
      >
        <div className="container-x flex items-center justify-between py-4">
          <Logo variant={transparent ? "light" : "dark"} />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    transparent
                      ? "text-white/90 hover:text-white"
                      : active
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full gradient-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden sm:inline-flex btn-gold !py-2.5 !px-5 text-sm">
              <CalendarDays className="h-4 w-4" />
              Reserve Table
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                transparent ? "text-white bg-white/10 hover:bg-white/20" : "text-foreground bg-muted hover:bg-border"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-dvh w-[86%] max-w-sm bg-background shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-10">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item, i) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center justify-between border-b border-border py-4 text-lg font-display text-foreground"
                  style={{ animation: open ? `float-up 0.5s ${0.05 * i + 0.1}s both` : undefined }}
                >
                  <span>{item.label}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition">→</span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <Link to="/contact" className="btn-gold w-full">
                <CalendarDays className="h-4 w-4" /> Reserve a Table
              </Link>
              <p className="mt-4 text-xs text-light-text text-center">Open daily · 11:00 AM – 11:00 PM</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
