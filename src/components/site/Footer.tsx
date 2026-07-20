import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.97_0.015_80)]">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 text-sm text-light-text leading-relaxed max-w-xs">
            Serving authentic pure vegetarian Gujarati, North Indian & Chinese cuisine
            with love since 1992.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/70 transition hover:text-white hover:gradient-gold hover:border-transparent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-light-text">
            {[["/", "Home"], ["/about", "About Us"], ["/restaurant", "Restaurant"], ["/banquet-hall", "Banquet Hall"], ["/contact", "Contact"]].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Opening Hours</h4>
          <ul className="space-y-2.5 text-sm text-light-text">
            <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" /> Monday – Sunday</li>
            <li className="pl-6 text-foreground font-medium">11:00 AM – 11:00 PM</li>
            <li className="pl-6 text-xs">Lunch · Dinner · Brunch</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-light-text">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              <span>Amee Plaza Complex, Thakkarbapa Nagar Road, Ahmedabad – 382350</span>
            </li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              <a href="tel:+919999999999" className="hover:text-gold">+91 99999 99999</a>
            </li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
              <a href="mailto:hello@bhagyoday.in" className="hover:text-gold">hello@bhagyoday.in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-light-text">
          <p>© {new Date().getFullYear()} Bhagyoday Restaurant. All rights reserved.</p>
          <p className="tracking-wider uppercase">Authentic · Pure Veg · Since 1992</p>
        </div>
      </div>
    </footer>
  );
}
