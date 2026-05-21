import { FileText, MapPin, Camera, Sparkles } from "lucide-react";

const STEPS = [
  { num:"01", icon:FileText,  title:"Brief & Discovery",  desc:"We deep-dive into your vision, KPIs, audience, and creative ambition — then architect a production strategy built for results." },
  { num:"02", icon:MapPin,    title:"Pre-Production",     desc:"Scripting, storyboarding, UAE location scouting, talent casting, permit processing. Every detail locked before we lift a camera." },
  { num:"03", icon:Camera,    title:"Production Day",     desc:"Our elite crew arrives fully equipped with cinematic-grade gear. We shoot with precision, energy, and an obsessive creative eye." },
  { num:"04", icon:Sparkles,  title:"Post & Delivery",   desc:"Colour grading, sound design, motion graphics, and platform-specific exports — delivered in 48–72 hours. Zero compromise." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-ink-3 relative overflow-hidden">
      <div className="section-num">05</div>

      {/* Horizontal gold rule top */}
      <div className="gold-line-full" />

      <div className="container-xl pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <p className="eyebrow mb-4">The Method</p>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none">
              <span className="text-cream">HOW WE</span><br />
              <span className="gold-text">WORK</span>
            </h2>
          </div>
          <p className="text-silver/50 max-w-xs text-sm font-light leading-relaxed">
            A process refined over 8+ years and 500+ productions across the UAE — built for speed without sacrificing craft.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative group border-r border-white/5 last:border-r-0 px-8 first:pl-0 last:pr-0">
                {/* Connector dot */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-2 h-2 rounded-full bg-gold/30 translate-x-1/2 z-10" />
                )}

                {/* Number */}
                <p className="font-display text-6xl text-white/[0.04] leading-none mb-4 group-hover:text-gold/10 transition-colors duration-500">
                  {step.num}
                </p>

                {/* Icon circle */}
                <div className="w-12 h-12 rounded-sm border border-gold/20 bg-gold/5 flex items-center justify-center mb-5
                                group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:shadow-[0_0_20px_rgba(212,160,23,0.15)]
                                transition-all duration-500">
                  <Icon size={20} className="text-gold" />
                </div>

                <h3 className="text-cream font-semibold text-base mb-3 group-hover:text-gold-light transition-colors duration-300">{step.title}</h3>
                <p className="text-silver/50 text-sm font-light leading-relaxed">{step.desc}</p>

                {/* Bottom gold accent line */}
                <div className="mt-6 w-0 h-px bg-gold group-hover:w-12 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="gold-line-full mt-16" />
    </section>
  );
}
