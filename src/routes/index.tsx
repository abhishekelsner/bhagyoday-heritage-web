import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ChevronDown, Utensils, Leaf, Baby, Users, Soup, Sparkles,
  Star, MapPin, Navigation, ArrowRight, Award, HeartHandshake,
  ShieldCheck, Clock, ChefHat, Wallet,
} from "lucide-react";
import { Reveal, SectionHeading } from "../components/site/Reveal";
import hero from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";
import banquetImg from "../assets/banquet.jpg";
import gujarati from "../assets/gujarati.jpg";
import northindian from "../assets/northindian.jpg";
import chinese from "../assets/chinese.jpg";
import sweets from "../assets/sweets.jpg";
import naan from "../assets/naan.jpg";
import dosa from "../assets/dosa.jpg";
import chef from "../assets/chef.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagyoday Restaurant — Authentic Pure Veg Dining in Ahmedabad Since 1992" },
      { name: "description", content: "Premium pure-veg Gujarati, North Indian & Chinese cuisine in Thakkarbapa Nagar, Ahmedabad. Family dining, unlimited thali & a luxury banquet hall." },
      { property: "og:title", content: "Bhagyoday Restaurant — Pure Veg Dining Since 1992" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SPECIALTIES = [
  { icon: Soup, title: "Unlimited Thali", desc: "A grand platter of curries, rotis, rice, sweets & more — refilled on request." },
  { icon: Utensils, title: "Gujarati Cuisine", desc: "Homestyle dishes crafted with regional spices and traditional recipes." },
  { icon: Sparkles, title: "North Indian", desc: "Rich gravies, tandoori breads, and creamy paneer classics." },
  { icon: ChefHat, title: "Chinese", desc: "Wok-tossed noodles, hakka, manchurian and Indo-Chinese favourites." },
  { icon: Users, title: "Family Dining", desc: "Warm, comfortable seating designed for gatherings big and small." },
  { icon: Baby, title: "Kids Menu", desc: "Thoughtful little plates that keep the youngest guests smiling." },
  { icon: Leaf, title: "Vegan Friendly", desc: "Clearly-marked plant-based options prepared with care." },
];

const WHY = [
  { icon: Leaf, title: "Fresh Ingredients" },
  { icon: ShieldCheck, title: "100% Pure Veg" },
  { icon: HeartHandshake, title: "Family Friendly" },
  { icon: Wallet, title: "Affordable" },
  { icon: ChefHat, title: "Experienced Chefs" },
  { icon: Clock, title: "Quick Service" },
  { icon: Sparkles, title: "Hygienic Kitchen" },
  { icon: Award, title: "Premium Ambience" },
];

const TESTIMONIALS = [
  { name: "Ritu Shah", role: "Family gathering", text: "The unlimited thali is unbeatable — every katori tastes like home. We celebrated my father's 70th here and the service was warm and personal." },
  { name: "Kunal Mehta", role: "Regular guest", text: "Consistently delicious for 20+ years. Their Gujarati thali and paneer tikka masala are the reason my family keeps coming back." },
  { name: "Priya Desai", role: "Wedding host", text: "We booked the banquet hall for our reception. Stunning decor, flawless coordination, and 300 guests raving about the food." },
];

const GALLERY = [gujarati, northindian, chinese, sweets, naan, dosa];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-dvh min-h-[640px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={hero} alt="Authentic Indian vegetarian thali" className="h-full w-full object-cover scale-110" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <motion.div style={{ opacity }} className="relative h-full container-x flex flex-col justify-center text-white">
          <Reveal>
            <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-accent">Since 1992 · Ahmedabad</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] max-w-5xl">
              Experience Authentic <span className="text-gradient-gold">Pure Vegetarian</span> Dining
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
              Serving delicious Gujarati, North Indian & Chinese cuisine with love — for over three decades.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Reserve a Table <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/restaurant" className="btn-outline-gold !text-white !border-white/60 hover:!bg-white hover:!text-foreground">Explore Menu</Link>
            </div>
          </Reveal>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-scroll-hint" />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-luxe">
                <img src={aboutImg} alt="Elegant restaurant interior" loading="lazy" className="h-[520px] w-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:right-8 rounded-2xl bg-card p-6 shadow-luxe border border-border max-w-[240px]">
                <p className="text-5xl font-display text-gradient-gold leading-none">34+</p>
                <p className="mt-2 text-sm text-light-text">Years of authentic pure-veg hospitality</p>
              </div>
            </div>
          </Reveal>
          <div>
            <div className="divider-ornament !justify-start text-xs font-medium tracking-[0.3em] uppercase">Our Story</div>
            <Reveal>
              <h2 className="mt-5 font-display text-3xl md:text-5xl leading-[1.1]">
                A legacy of flavour, family and warmth.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-light-text text-base md:text-lg leading-relaxed">
                Founded in 1992, Bhagyoday has grown from a small neighbourhood eatery into
                one of Ahmedabad's most-loved pure-veg destinations. Every plate is a
                celebration of tradition, hand-picked ingredients and Gujarati hospitality.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  ["34+ Years Experience", Award],
                  ["Authentic Taste", Utensils],
                  ["Family Restaurant", HeartHandshake],
                  ["Fresh Ingredients", Leaf],
                ].map(([label, Icon]) => {
                  const I = Icon as typeof Award;
                  return (
                    <li key={label as string} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                      <I className="h-5 w-5 text-gold" />
                      <span className="text-sm font-medium">{label as string}</span>
                    </li>
                  );
                })
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/about" className="btn-outline-gold mt-9">Discover Our Story <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-24 md:py-32 bg-muted/60">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Serve"
            title="Our Signature Specialties"
            description="A curated menu drawing from three cuisines — every dish, unmistakably pure vegetarian."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPECIALTIES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl bg-card border border-border p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe hover:border-gold/40">
                  <div className="grid h-14 w-14 place-items-center rounded-xl gradient-gold text-white shadow-luxe transition-transform group-hover:scale-110">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-light-text leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Gallery" title="Straight from our kitchen" />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {GALLERY.map((src, i) => (
              <Reveal key={src} delay={i * 0.05}>
                <div className={`group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"}`}>
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-transparent to-muted/60">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Details that shape every visit"
            description="From the ingredients we source to the way we welcome you — nothing is left to chance."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.04}>
                <div className="group text-center rounded-2xl border border-border bg-card p-6 transition hover:border-gold/50 hover:shadow-luxe">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-muted transition-colors group-hover:gradient-gold">
                    <w.icon className="h-7 w-7 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <p className="mt-5 font-medium">{w.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Guest Stories" title="Loved by generations of Ahmedabad" />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="h-full rounded-3xl bg-card border border-border p-8 shadow-luxe">
                  <div className="flex gap-1 text-accent">
                    {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                  </div>
                  <blockquote className="mt-5 font-display text-lg leading-relaxed text-foreground">
                    "{t.text}"
                  </blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-light-text">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BANQUET PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
            <img src={banquetImg} alt="Banquet hall" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
            <div className="relative px-8 py-20 md:p-20 max-w-2xl text-white">
              <p className="text-xs tracking-[0.4em] uppercase text-accent">Banquet Hall</p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight">
                Celebrate life's biggest moments in luxury.
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed">
                Weddings, receptions, anniversaries and corporate events — hosted in an
                elegant hall with impeccable service and unforgettable cuisine.
              </p>
              <Link to="/banquet-hall" className="btn-gold mt-8">Explore Banquet Hall <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 md:py-32 bg-muted/60">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <div className="divider-ornament !justify-start text-xs font-medium tracking-[0.3em] uppercase">Visit Us</div>
            <h2 className="mt-5 font-display text-3xl md:text-5xl leading-tight">Find your seat at Bhagyoday</h2>
            <p className="mt-5 text-light-text leading-relaxed max-w-lg">
              Amee Plaza Complex, Below Hotel New Shreenath Inn, Opposite India Colony,
              Thakkarbapa Nagar Road, Thakkarbapa Nagar, Ahmedabad – 382350, Gujarat.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-foreground">
              <Clock className="h-5 w-5 text-gold" /> Open daily · 11:00 AM – 11:00 PM
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Thakkarbapa+Nagar+Ahmedabad"
                target="_blank" rel="noreferrer"
                className="btn-gold"
              ><Navigation className="h-4 w-4" /> Get Directions</a>
              <Link to="/contact" className="btn-outline-gold"><MapPin className="h-4 w-4" /> More Details</Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border shadow-luxe min-h-[380px]">
            <iframe
              title="Bhagyoday Restaurant location"
              src="https://www.google.com/maps?q=Thakkarbapa+Nagar+Road+Ahmedabad&output=embed"
              loading="lazy"
              className="h-full w-full min-h-[380px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
