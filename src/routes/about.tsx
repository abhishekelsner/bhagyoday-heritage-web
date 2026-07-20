import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Leaf, ShieldCheck, Users, Utensils, ArrowRight } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionHeading } from "../components/site/Reveal";
import aboutImg from "../assets/about.jpg";
import chef from "../assets/chef.jpg";
import gujarati from "../assets/gujarati.jpg";
import sweets from "../assets/sweets.jpg";
import naan from "../assets/naan.jpg";
import dosa from "../assets/dosa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bhagyoday — Pure Veg Restaurant in Ahmedabad Since 1992" },
      { name: "description", content: "Learn the story of Bhagyoday Restaurant — three decades of authentic pure-vegetarian cooking, family hospitality and Gujarati warmth in Ahmedabad." },
      { property: "og:title", content: "About Bhagyoday Restaurant" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "1992", title: "Where it began", text: "A small pure-veg kitchen opens in Thakkarbapa Nagar with a single dream — feed families like our own." },
  { year: "2001", title: "Expanding the table", text: "We introduce our unlimited Gujarati thali and North Indian menu after popular demand." },
  { year: "2010", title: "The banquet hall", text: "We open a full-service banquet hall for weddings, receptions and celebrations of every size." },
  { year: "2018", title: "Modern classic", text: "A complete redesign of the restaurant with warm interiors, family seating and a redesigned kitchen." },
  { year: "Today", title: "Three decades on", text: "Thousands of families later, our promise remains unchanged — pure veg, cooked with love." },
];

const VALUES = [
  { icon: Leaf, title: "Purely Vegetarian", text: "We're 100% pure veg — always have been, always will be." },
  { icon: Heart, title: "Cooked with Love", text: "Recipes passed down and perfected across generations." },
  { icon: ShieldCheck, title: "Uncompromising Hygiene", text: "A meticulously clean kitchen and sourcing you can trust." },
  { icon: Users, title: "Family First", text: "Warm hospitality that feels like coming home." },
];

const STATS = [
  { n: "34+", l: "Years serving Ahmedabad" },
  { n: "10L+", l: "Happy guests" },
  { n: "100%", l: "Pure vegetarian" },
  { n: "3", l: "Signature cuisines" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Three decades of pure-veg hospitality."
        subtitle="From a modest kitchen in 1992 to a beloved Ahmedabad institution — the Bhagyoday story is written in recipes, relationships and returning guests."
        image={aboutImg}
      />

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-5 gap-12 items-center">
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl shadow-luxe">
              <img src={chef} alt="Head chef preparing food" loading="lazy" className="h-[520px] w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-3">
            <div className="divider-ornament !justify-start text-xs font-medium tracking-[0.3em] uppercase">Since 1992</div>
            <Reveal><h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">A recipe that started with family, for family.</h2></Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-light-text leading-relaxed">
                Bhagyoday began in 1992 as a labour of love — a small pure-vegetarian
                kitchen serving Gujarati home food to a growing neighbourhood in Ahmedabad.
                Over three decades, we've grown into a full-service restaurant and banquet
                hall — but our founding philosophy hasn't budged an inch.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-light-text leading-relaxed">
                Every dish is made from scratch, every guest is greeted by name whenever
                we can, and every meal is served the way it was meant to be — with warmth,
                generosity, and unmistakable Gujarati hospitality.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Mission</p>
                  <p className="mt-3 font-display text-xl leading-snug">To serve every family a meal worth remembering.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Vision</p>
                  <p className="mt-3 font-display text-xl leading-snug">Ahmedabad's most-loved pure-veg destination — for the next generation.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-muted/60">
        <div className="container-x">
          <SectionHeading eyebrow="Our Journey" title="From 1992 to today" />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <ul className="space-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05}>
                  <li className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                      <p className="font-display text-4xl md:text-5xl text-gradient-gold">{t.year}</p>
                      <h3 className="mt-2 font-display text-2xl">{t.title}</h3>
                      <p className="mt-3 text-light-text leading-relaxed">{t.text}</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full gradient-gold ring-4 ring-background text-white text-xs">
                      {i + 1}
                    </div>
                    <div className="hidden md:block" />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="What We Stand For" title="Values on every plate" />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 hover:shadow-luxe hover:-translate-y-1 transition">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-gold text-white"><v.icon className="h-5 w-5" /></div>
                  <h3 className="mt-6 font-display text-xl">{v.title}</h3>
                  <p className="mt-3 text-sm text-light-text leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 bg-muted/60">
        <div className="container-x">
          <SectionHeading eyebrow="Moments" title="Glimpses of Bhagyoday" />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gujarati, naan, sweets, dosa].map((src) => (
              <Reveal key={src}>
                <div className="group aspect-square overflow-hidden rounded-2xl">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32">
        <div className="container-x rounded-[2rem] gradient-gold text-white px-8 py-16 md:p-16 shadow-luxe">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.l}>
                <p className="font-display text-5xl md:text-6xl">{s.n}</p>
                <p className="mt-3 text-sm text-white/90 uppercase tracking-widest">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-7 py-3 font-medium hover:bg-foreground hover:text-white transition">
              Reserve a Table <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
