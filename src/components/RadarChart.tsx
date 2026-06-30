"use client";

import { motion } from "framer-motion";
import { VIEWPORT, EASE } from "@/lib/motion";

const AXES = [
  { label: "AI / ML",       score: 90 },
  { label: "Frontend",      score: 82 },
  { label: "Backend",       score: 78 },
  { label: "DevOps/Cloud",  score: 72 },
  { label: "Robotics",      score: 80 },
  { label: "Data",          score: 75 },
];

const N     = AXES.length;
const CX    = 160;
const CY    = 160;
const RINGS = [0.2, 0.4, 0.6, 0.8, 1.0];

function polarToXY(angle: number, r: number) {
  return {
    x: CX + r * Math.cos(angle),
    y: CY + r * Math.sin(angle),
  };
}

function axisAngle(i: number) {
  return -Math.PI / 2 + (2 * Math.PI * i) / N;
}

interface Props {
  compact?: boolean;
  maxR?: number;
}

export default function RadarChart({ compact = false, maxR = 120 }: Props) {
  const viewBox = compact ? "20 20 280 280" : "0 0 320 320";
  const svgSize = compact ? 240 : 320;

  // Grid ring polygons
  const ringPolygons = RINGS.map((ratio) => {
    const pts = Array.from({ length: N }, (_, i) => {
      const { x, y } = polarToXY(axisAngle(i), ratio * maxR);
      return `${x},${y}`;
    }).join(" ");
    return pts;
  });

  // Data polygon
  const dataPoints = AXES.map((ax, i) => {
    const { x, y } = polarToXY(axisAngle(i), (ax.score / 100) * maxR);
    return `${x},${y}`;
  }).join(" ");

  // Axis endpoints
  const axisEnds = AXES.map((_, i) => polarToXY(axisAngle(i), maxR));

  // Label positions (slightly outside)
  const labelPositions = AXES.map((ax, i) => {
    const { x, y } = polarToXY(axisAngle(i), maxR + (compact ? 20 : 24));
    return { x, y, label: ax.label };
  });

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={viewBox}
      aria-label="Skills radar chart"
      role="img"
      className="overflow-visible"
    >
      {/* Grid rings */}
      {ringPolygons.map((pts, ri) => (
        <motion.polygon
          key={ri}
          points={pts}
          fill="none"
          stroke="var(--cafe-border)"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.3, delay: ri * 0.08 }}
        />
      ))}

      {/* Axis lines */}
      {axisEnds.map((end, i) => (
        <motion.line
          key={i}
          x1={CX}
          y1={CY}
          x2={end.x}
          y2={end.y}
          stroke="var(--cafe-border)"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
        />
      ))}

      {/* Axis dots */}
      {axisEnds.map((end, i) => (
        <motion.circle
          key={i}
          cx={end.x}
          cy={end.y}
          r={3}
          fill="var(--cafe-accent)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.3, delay: 0.6 + i * 0.06 }}
          style={{ transformOrigin: `${end.x}px ${end.y}px` }}
        />
      ))}

      {/* Data polygon fill */}
      <motion.polygon
        points={dataPoints}
        fill="color-mix(in srgb, var(--cafe-accent) 18%, transparent)"
        stroke="none"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.85, delay: 0.7, ease: EASE }}
        style={{ transformOrigin: `${CX}px ${CY}px`, transformBox: "fill-box" }}
      />

      {/* Data polygon stroke */}
      <motion.polygon
        points={dataPoints}
        fill="none"
        stroke="var(--cafe-accent)"
        strokeWidth={compact ? 1.5 : 2}
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.5, delay: 0.9 }}
      />

      {/* Center dot */}
      <circle cx={CX} cy={CY} r={3} fill="var(--cafe-accent)" opacity={0.6} />

      {/* Labels */}
      {!compact && labelPositions.map(({ x, y, label }) => {
        const anchorX = x < CX - 5 ? "end" : x > CX + 5 ? "start" : "middle";
        const dy = y < CY ? "-4" : "14";
        return (
          <motion.text
            key={label}
            x={x}
            y={y}
            dy={dy}
            textAnchor={anchorX}
            fontSize={11}
            fontFamily="var(--font-jost)"
            fill="#a08060"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            {label}
          </motion.text>
        );
      })}
    </svg>
  );
}
