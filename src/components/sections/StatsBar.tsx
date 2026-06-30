"use client";

import { useInView } from "react-intersection-observer";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { stats } from "@/lib/data";

// Parse the numeric portion from strings like "150+", "5+", "1000+"
function parseTarget(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+)(\D*)$/);
  return match ? { num: parseInt(match[1]), suffix: match[2] } : { num: 0, suffix: "" };
}

function StatItem({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { num, suffix } = parseTarget(value);
  const count = useCounterAnimation(num, 1200, inView);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-6 px-4 text-center">
      <span className="font-display text-3xl font-semibold text-cafe-accent opsz-md">
        {count}{suffix}
      </span>
      <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-cafe-muted">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section aria-label="Stats" className="relative z-10">
      {/* Top/bottom warm borders */}
      <div className="border-y border-cafe-border" style={{ background: "var(--cafe-surface)" }}>
        <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-4 divide-x divide-cafe-border">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
