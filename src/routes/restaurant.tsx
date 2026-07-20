import { createFileRoute, Link } from "@tanstack/react-router";
import { AirVent, Car, Baby, Users, Sparkles, ShieldCheck, Star, ArrowRight, ChefHat } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionHeading } from "../components/site/Reveal";
import aboutImg from "../assets/about.jpg";
import gujarati from "../assets/gujarati.jpg";
import northindian from "../assets/northindian.jpg";
import chinese from "../assets/chinese.jpg";
import sweets from "../assets/sweets.jpg";
import naan from "../assets/naan.jpg";
import dosa from "../assets/dosa.jpg";
import chef from "../assets/chef.jpg";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "The Restaurant — Bhagyoday Ahmedabad | Gujarati, North Indian & Chinese" },
      { name: "description", content: "Explore Bhagyoday's pure-veg dining experience — Gujarati thalis, North Indian classics, Indo-Chinese favourites and warm family seating in Ahmedabad." },
      { property: "og:title", content: "The Restaurant — Bhagyoday" },
      { property: "og:url", content: "/restaurant" },
    ],
    links: [{ rel: "canonical", href: "/restaurant" }],
  }),
  component: RestaurantPage,
});

const CUISINES = [
  { img: gujarati, tag: "Gujarati", title: "Unlimited Gujarati Thali", text: "A grand thali of seasonal shaak, dal, kadhi, farsan, rotli, rice and sweets — refilled generously." },
  { img: northindian, tag: "North Indian", title: "Paneer Butter Masala & Classics", text: "Rich creamy gravies, dal makhani, jeera rice and tandoori breads straight from the clay oven." },
  { img: chinese, tag: "Chinese", title: "Indo-Chinese Favourites", text: "Hakka noodles, veg manchurian, chilli paneer and crispy fried rice — wok-tossed to order." },
  { img: dosa, tag: "Multicuisine", title: "South Indian & More", text: "Dosa, uttapam, sizzlers, pav bhaji, punjabi platters — a menu built for every mood." },
];

const FACILITIES = [
  { icon: Baby, title: "Kids Friendly" },
  { icon: Users, title: "Family Seating" },
  { icon: Car, title: "Ample Parking" },
  { icon: AirVent, title: "Air Conditioned" },
  { icon: Sparkles, title: "Clean Environment" },
  { icon: ShieldCheck, title: "Premium Interiors" },
];

const REVIEWS = [
  { name: "Mehul P.", text: "Best pure-veg thali in Thakkarbapa Nagar. Great service, great taste." },
  { name: "Anaya S.", text: "The Chinese section here is surprisingly excellent. Loved the manchurian!" },
  { name: "Ravi J.", text: "We come every Sunday for the thali. Never disappointed in years." },
];

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        eyebrow="The Restaurant"
        title="A pure-veg dining experience, thoughtfully crafted."
        subtitle="Three cuisines under one roof — each prepared with authenticity, care and the finest seasonal ingredients."
        image={aboutImg}
      />

      {/* Gallery marquee */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[gujarati, naan, sweets, dosa, northindian, chinese, chef, aboutImg].slice(0, 4).map((src) => (
              <Reveal key={src}>
                <div className="group aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisines */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Cuisines" title="Three traditions, one table" description="Explore our signature menus, each prepared by chefs who've mastered their craft." />
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {CUISINES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-luxe">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-[10px] font-medium tracking-[0.25em] uppercase text-gold">
                      {c.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl">{c.title}</h3>
                    <p className="mt-3 text-light-text leading-relaxed">{c.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="py-24 md:py-32 bg-muted/60">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-luxe">
              <img src={chef} alt="Head chef" loading="lazy" className="h-[560px] w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <div className="divider-ornament !justify-start text-xs font-medium tracking-[0.3em] uppercase">Meet the Chef</div>
            <Reveal><h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">Recipes perfected over decades.</h2></Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-light-text leading-relaxed">
                Our head chef and his team bring together classical Gujarati techniques,
                north-Indian tandoor mastery and Indo-Chinese wok skill — held together
                by an obsession with freshness and hygiene.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full gradient-gold text-white"><ChefHat className="h-6 w-6" /></div>
                <div>
                  <p className="font-display text-lg">30+ years in the kitchen</p>
                  <p className="text-sm text-light-text">Trained across Gujarat, Delhi & Mumbai</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Facilities" title="Designed for a comfortable meal" />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="text-center rounded-2xl border border-border bg-card p-6 hover:shadow-luxe hover:border-gold/50 transition">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-muted">
                    <f.icon className="h-6 w-6 text-gold" />
                  </div>
                  <p className="mt-4 text-sm font-medium">{f.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-muted/60">
        <div className="container-x">
          <SectionHeading eyebrow="Guest Reviews" title="What our diners say" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-card border border-border p-7 shadow-luxe">
                  <div className="flex gap-1 text-accent">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
                  <p className="mt-4 font-display text-lg leading-snug">"{r.text}"</p>
                  <p className="mt-6 text-sm font-medium">— {r.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] gradient-gold p-12 md:p-20 text-center text-white shadow-luxe">
            <h2 className="font-display text-3xl md:text-5xl">Ready to dine with us?</h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto">Reserve your table and let us take care of the rest.</p>
            <Link to="/contact" className="inline-flex mt-8 items-center gap-2 rounded-full bg-white text-foreground px-8 py-3.5 font-medium hover:bg-foreground hover:text-white transition">
              Reserve a Table <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
