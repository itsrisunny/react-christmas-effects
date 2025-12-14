import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { isDecember } from "../utils/isDecember";
import { fireCrackers } from "../utils/fireCrackers";
import "../styles/christmas.css";

/**
 * ChristmasEffects
 *
 * Renders festive Christmas visual effects including:
 * - Falling snow ❄️
 * - Firecracker explosions 🎆
 * - Animated greeting text 🎄
 *
 * The effects automatically activate only during December,
 * unless explicitly forced via props.
 *
 * @param {Object} props - Component props
 * @param {string} [props.text="🎄 Merry Christmas 🎄"]
 *   Text displayed in the center of the screen.
 * @param {number} [props.snowflakeCount=200]
 *   Number of snowflakes rendered on screen.
 * @param {boolean} [props.showText=true]
 *   Toggle visibility of the greeting text.
 * @param {boolean} [props.fireworks=true]
 *   Enable or disable firecracker (explosion) animation.
 * @param {number} [props.fireworkInterval=12000]
 *   Interval (in milliseconds) between firecracker blasts.
 * @param {number} [props.startDay=1]
 *   Start day in December from which effects become active.
 * @param {number} [props.endDay=31]
 *   End day in December until which effects remain active.
 * @param {boolean} [props.force=false]
 *   Force enable effects regardless of the current date.
 *
 * @returns {JSX.Element|null}
 *   The animated Christmas effects UI, or null when inactive.
 */
export function ChristmasEffects({
  text = "🎄 Merry Christmas 🎄",
  snowflakeCount = 200,
  showText = true,
  fireworks = true,
  fireworkInterval = 12000,
  startDay = 1,
  endDay = 31,
  force = false
}) {
  /** Current date reference */
  const now = new Date();

  /**
   * Tracks whether the text is currently exploding
   * (letters scattering across the screen).
   */
  const [explode, setExplode] = useState(false);

  /**
   * Determines whether the Christmas effects should be active.
   * - Active if `force` is true
   * - Otherwise active only in December within the date range
   */
  const active =
    force ||
    (isDecember() &&
      now.getDate() >= startDay &&
      now.getDate() <= endDay);

  /**
   * Handles firecracker explosions and text scatter animation.
   * Triggers immediately on activation and repeats on interval.
   */
  useEffect(() => {
    if (!active || !fireworks) return;

    /**
     * Triggers a single firecracker blast
     * and starts the text explosion animation.
     */
    const blast = () => {
      fireCrackers();
      setExplode(true);

      // Reset text animation after explosion completes
      setTimeout(() => setExplode(false), 1400);
    };

    blast();
    const id = setInterval(blast, fireworkInterval);

    // Cleanup interval on unmount or dependency change
    return () => clearInterval(id);
  }, [active, fireworks, fireworkInterval]);

  // Do not render anything when effects are inactive
  if (!active) return null;

  return (
    <div className="christmas-container">
      {/* ❄️ Snowfall background layer */}
      <div className="snow-layer">
        <Snowfall snowflakeCount={snowflakeCount} />
      </div>

      {/* 🎄 Animated greeting text */}
      {showText && (
        <div className={`christmas-text ${explode ? "explode" : "enter"}`}>
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="letter"
              style={{
                "--x": `${Math.random() * 600 - 300}px`,
                "--y": `${Math.random() * 600 - 300}px`,
                "--r": `${Math.random() * 720 - 360}deg`
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
