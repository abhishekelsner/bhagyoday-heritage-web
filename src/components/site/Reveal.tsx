import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h2" | "p";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export function SectionHeading({
  eyebrow, title, description, center = true,
}: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <div className={`divider-ornament text-xs font-medium tracking-[0.3em] uppercase ${center ? "" : "!justify-start"}`}>
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-display leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-light-text text-base md:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
