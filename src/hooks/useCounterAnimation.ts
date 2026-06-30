"use client";

import { useState, useEffect, useRef } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useCounterAnimation(
  target: number,
  duration = 1200,
  inView = false,
) {
  const [value, setValue] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;

    const start = performance.now();
    let rafId: number;

    function step(now: number) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  return value;
}
