const paragraphs = [
  "I enjoy turning ambitious ideas into clear, reliable digital products.",
  "My work brings together thoughtful frontend experiences, practical backend systems, and close collaboration.",
  "I care about the small details that make software feel considered, useful, and easy to return to.",
];

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="border-border mx-auto w-full max-w-7xl border-t px-5 py-24 sm:px-8 sm:py-36 lg:px-10 lg:py-52"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <h2
          id="about-title"
          className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3"
        >
          About
        </h2>
        <div className="max-w-2xl space-y-7 text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.18] tracking-[-0.035em] md:col-span-8 md:col-start-5 lg:col-span-7">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
