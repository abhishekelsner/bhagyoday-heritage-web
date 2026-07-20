import { createFileRoute, Link } from "@tanstack/react-router";
import { AirVent, Car, Music, Sparkles, Utensils, Lightbulb, Cake, Heart, Briefcase, Baby, Gift, Users, ArrowRight } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionHeading } from "../components/site/Reveal";
import banquet from "../assets/banquet.jpg";
import about from "../assets/about.jpg";
import sweets from "../assets/sweets.jpg";
import naan from "../assets/naan.jpg";

export const Route = createFileRoute("/banquet-hall")({
  head: () => ({
    meta: [
      { title: "Banquet Hall — Bhagyoday Ahmedabad | Weddings, Receptions & Events" },
      { name: "description", content: "Host weddings, receptions, anniversaries and corporate events at Bhagyoday's luxury banquet hall in Ahmedabad. Elegant decor, pure-veg catering, full amenities." },
      { property: "og:title", content: "Bhagyoday Banquet Hall — Ahmedabad" },
      { property: "og:url", content: "/banquet-hall" },
    ],
    links: [{ rel: "canonical", href: "/banquet-hall" }],
  }),
  component: BanquetPage,
});

const EVENTS = [
  { icon: Heart, title: "Weddings" },
  { icon: Cake, title: "Birthdays" },
  { icon: Gift, title: "Receptions" },
  { icon: Briefcase, title: "Corporate Events" },
  { icon: Users, title: "Anniversaries" },
  { icon: Baby, title: "Baby Showers" },
];

const AMENITIES = [
  { icon: AirVent, title: "Full Air Conditioning" },
  { icon: Utensils, title: "In-house Pure-Veg Catering" },
  { icon: Car, title: "Ample Parking" },
  { icon: Music, title: "Professional Sound System" },
  { icon: Lightbulb, title: "Ambient Lighting" },
  { icon: Sparkles, title: "Custom Decor Packages" },
];

export default function BanquetPage() {
  return (
    <>
      <PageHero
        eyebrow="Banquet Hall"
        title="Where celebrations become memories."
        subtitle="A luxurious venue for weddings, receptions and every gathering that deserves to be perfect."
        image={banquet}
      />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="divider-ornament !justify-start text-xs font-medium tracking-[0.3em] uppercase">The Venue</div>
            <Reveal>
              <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">A grand hall built for grand moments.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-light-text leading-relaxed">
                Our banquet hall combines elegant Indian aesthetics with modern amenities.
                Whether you're hosting an intimate reception or a 500-guest wedding, our
                team handles every detail — from decor to dining — so you can be present
                for the moments that matter.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 gap-6">
                {[["50", "Min Guests"], ["500+", "Max Capacity"], ["360°", "Event Support"]].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-display text-3xl md:text-4xl text-gradient-gold">{n}</p>
                    <p className="mt-2 text-xs uppercase tracking-widest text-light-text">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/contact" className="btn-gold mt-10">Enquire About Booking <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-luxe">
              <img src={banquet} alt="Banquet hall interior" loading="lazy" className="h-[560px] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 md:py-32 bg-muted/60">
        <div className="container-x">
          <SectionHeading eyebrow="Events We Host" title="Every occasion, beautifully" />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-5">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl bg-card border border-border p-8 text-center transition hover:shadow-luxe hover:-translate-y-1">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-gold text-white transition-transform group-hover:scale-110">
                    <e.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-6 font-display text-xl">{e.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Decoration Gallery */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Decoration Gallery" title="A canvas for your celebration" />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[banquet, sweets, about, naan].map((src, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`group overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"}`}>
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 md:py-32 bg-muted/60">
        <div className="container-x">
          <SectionHeading eyebrow="Amenities" title="Everything your event needs" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-gold text-white">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-lg">{a.title}</p>
                    <p className="mt-1 text-sm text-light-text">Included with every booking.</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
            <img src={banquet} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative p-12 md:p-20 text-center text-white">
              <h2 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto leading-tight">Planning something unforgettable?</h2>
              <p className="mt-4 max-w-xl mx-auto text-white/85">Get in touch with our events team for availability, packages and a personal walkthrough of the hall.</p>
              <Link to="/contact" className="btn-gold mt-8">Book the Hall <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
