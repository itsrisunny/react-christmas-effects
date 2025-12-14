import React, { useEffect, useRef } from "react";
import Snowfall from "react-snowfall";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { isDecember } from "../utils/isDecember";
import { fireCrackers } from "../utils/fireCrackers";
import "../styles/christmas.css";

export function ChristmasEffects({
  text = "🎄 Merry Christmas 🎄",
  snowflakeCount = 200,
  showText = true,
  fireworks = true,
  startDay = 1,
  endDay = 31,
  force = false
}) {
  const now = new Date();
  const shouldReduceMotion = useReducedMotion();
  const hasPlayedRef = useRef(false);

  const active =
    force ||
    (isDecember() &&
      now.getDate() >= startDay &&
      now.getDate() <= endDay);

  useEffect(() => {
    if (!active || !fireworks || hasPlayedRef.current) return;

    fireCrackers();
    hasPlayedRef.current = true;
  }, [active, fireworks]);

  if (!active) return null;

  return (
    <div className="christmas-container">
      <div className="snow-layer">
        <Snowfall snowflakeCount={snowflakeCount} />
      </div>

      {showText && !hasPlayedRef.current && (
        <Motion.h1
          className="christmas-text"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {text}
        </Motion.h1>
      )}
    </div>
  );
}
