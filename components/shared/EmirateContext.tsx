import { emirateFactsFor } from "@/lib/emirateFacts";

/**
 * Renders the emirate-specific substance on a location page.
 *
 * This block is the whole reason /locations/<city>/<service> pages can stop
 * being duplicates of each other. Everything else on those pages is templated
 * by design — the service description, the package table, the CTA. This is the
 * part that is genuinely different per emirate, and it is deliberately placed
 * high, directly after the intro, rather than buried at the bottom.
 *
 * The permit paragraph is the strongest piece: it is specific, it is the thing
 * clients actually get wrong, and it is different in every emirate. Where the
 * authority could not be verified the copy says the route is confirmed per
 * shoot and names nobody — see the sourcing rules in lib/emirateFacts.ts. That
 * honesty reads better than a confident wrong answer and is safer.
 */
export default function EmirateContext({
  citySlug,
  serviceLabel,
}: {
  citySlug: string;
  serviceLabel?: string;
}) {
  const f = emirateFactsFor(citySlug);
  if (!f) return null;

  const what = serviceLabel ? serviceLabel.toLowerCase() : "production work";

  return (
    <section
      className="mt-12 p-6 sm:p-8 rounded-sm"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid var(--border)",
      }}
      aria-labelledby={`shooting-in-${citySlug}`}
    >
      <h2
        id={`shooting-in-${citySlug}`}
        className="font-display text-2xl sm:text-3xl mb-6"
        style={{ color: "var(--cream)" }}
      >
        WHAT SHOOTING {what.toUpperCase()} IN {f.label.toUpperCase()} ACTUALLY INVOLVES
      </h2>

      <div className="space-y-5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <div>
          <span className="block font-display text-base mb-1" style={{ color: "var(--gold)" }}>
            Permissions
          </span>
          <p>{f.permitNote}</p>
        </div>

        <div>
          <span className="block font-display text-base mb-1" style={{ color: "var(--gold)" }}>
            Light and landscape
          </span>
          <p>
            {f.label} is known for {f.knownFor}. Technically it means {f.terrain}.
          </p>
        </div>

        <div>
          <span className="block font-display text-base mb-1" style={{ color: "var(--gold)" }}>
            Where we shoot
          </span>
          <p>
            {f.venues.charAt(0).toUpperCase() + f.venues.slice(1)}.
          </p>
        </div>

        <div>
          <span className="block font-display text-base mb-1" style={{ color: "var(--gold)" }}>
            The scheduling constraint
          </span>
          <p>
            {f.logistics.charAt(0).toUpperCase() + f.logistics.slice(1)}.
          </p>
        </div>
      </div>
    </section>
  );
}
