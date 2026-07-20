import { Reveal } from "./Reveal";

export function PageHero({
  title, subtitle, image, eyebrow,
}: { title: string; subtitle?: string; image: string; eyebrow?: string }) {
  return (
    <section className="relative h-[65vh] min-h-[420px] flex items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      <div className="relative container-x pb-16 md:pb-24 text-white">
        {eyebrow && (
          <Reveal>
            <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-accent">{eyebrow}</p>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
