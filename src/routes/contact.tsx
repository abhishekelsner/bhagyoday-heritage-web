import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Check } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionHeading } from "../components/site/Reveal";
import about from "../assets/about.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bhagyoday Restaurant — Reserve a Table in Ahmedabad" },
      { name: "description", content: "Reserve a table, book the banquet hall, or reach us in Thakkarbapa Nagar, Ahmedabad. Open 11 AM – 11 PM every day." },
      { property: "og:title", content: "Contact Bhagyoday Restaurant" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const FAQ = [
  { q: "Do I need a reservation?", a: "Reservations are recommended for weekends, festivals and family gatherings. Walk-ins are always welcome." },
  { q: "Do you host large events?", a: "Yes — our banquet hall accommodates from 50 to 500+ guests for weddings, receptions and corporate events." },
  { q: "Is parking available?", a: "Yes, ample on-site parking is available for both restaurant and banquet-hall guests." },
  { q: "Do you have vegan and Jain options?", a: "Absolutely — every menu section is 100% pure-veg, with clearly-marked vegan dishes and Jain preparations on request." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We'd love to have you at our table."
        subtitle="Reserve a seat, plan a celebration, or simply say hello — our team is a phone call away."
        image={about}
      />

      {/* Contact grid */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          {/* Details */}
          <Reveal className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, title: "Visit Us", body: "Block No. 31–33, Amee Plaza Complex, Below Hotel New Shreenath Inn, Opp. India Colony, Thakkarbapa Nagar Road, Ahmedabad – 382350" },
              { icon: Clock, title: "Opening Hours", body: "Monday – Sunday · 11:00 AM – 11:00 PM" },
              { icon: Phone, title: "Call Us", body: "+91 99999 99999", href: "tel:+919999999999" },
              { icon: MessageCircle, title: "WhatsApp", body: "+91 99999 99999", href: "https://wa.me/919999999999" },
              { icon: Mail, title: "Email", body: "hello@bhagyoday.in", href: "mailto:hello@bhagyoday.in" },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:shadow-luxe transition">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-gold text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-lg">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-light-text hover:text-gold break-words">{c.body}</a>
                  ) : (
                    <p className="mt-1 text-light-text leading-relaxed">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-luxe">
              <h2 className="font-display text-3xl">Reserve or enquire</h2>
              <p className="mt-2 text-light-text">Send us a message — we'll respond within a few hours.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <div className="sm:col-span-2"><Field label="Email" name="email" type="email" required /></div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea required rows={5} name="message"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold focus:ring-4 focus:ring-gold/15 transition resize-none"
                    placeholder="Number of guests, date, any special requests..." />
                </div>
              </div>
              <button type="submit"
                className={`btn-gold mt-8 w-full sm:w-auto ${sent ? "!bg-none !bg-emerald-500" : ""}`}>
                {sent ? <><Check className="h-4 w-4" /> Message sent</> : <><Send className="h-4 w-4" /> Send Message</>}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="rounded-3xl overflow-hidden border border-border shadow-luxe">
            <iframe
              title="Bhagyoday Restaurant location map"
              src="https://www.google.com/maps?q=Thakkarbapa+Nagar+Road+Ahmedabad&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <SectionHeading eyebrow="FAQ" title="Answers to common questions" />
          <div className="mt-14 max-w-3xl mx-auto space-y-4">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group rounded-2xl border border-border bg-card p-6 open:shadow-luxe transition">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg list-none">
                    {f.q}
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-border text-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-light-text leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold focus:ring-4 focus:ring-gold/15 transition"
      />
    </div>
  );
}
