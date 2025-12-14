import React, { useEffect, useRef } from "react";
import Snowfall from "react-snowfall";
import { motion, useReducedMotion } from "framer-motion";
import { isDecember } from "../utils/isDecember";
import { fireCrackers } from "../utils/fireCrackers";
import "../styles/christmas.css";

/**
 * ChristmasEffects
 *
 * Displays Christmas snowfall with a one-time greeting text
 * and a single firecracker explosion.
 *
 * Snow continues to fall, while text and fireworks
 * appear only once per page load.
 */
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

  /**
   * Ensures fireworks and text run only once
   */
  const hasPlayedRef = useRef(false);

  /**
   * Determines whether effects should be active
   */
  const active =
    force ||
    (isDecember() &&
      now.getDate() >= startDay &&
      now.getDate() <= endDay);

  /**
   * Trigger firecracker only once
   */
  useEffect(() => {
    if (!active || !fireworks || hasPlayedRef.current) return;

    fireCrackers();
    hasPlayedRef.current = true;
  }, [active, fireworks]);

  if (!active) return null;

  return (
    <div className="christmas-container">
      {/* ❄️ Snow layer (continuous) */}
      <div className="snow-layer">
        <Snowfall snowflakeCount={snowflakeCount} />
      </div>

      {/* 🎄 Text appears only once */}
      {showText && !hasPlayedRef.current && (
        <motion.h1
          className="christmas-text"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
        >
          {text}
        </motion.h1>
      )}
    </div>
  );
}
