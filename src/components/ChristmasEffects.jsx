import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { isDecember } from "../utils/isDecember";
import { fireCrackers } from "../utils/fireCrackers";
import "../styles/christmas.css";

/**
 * ChristmasEffects
 *
 * Displays festive Christmas effects:
 * - Falling snow ❄️
 * - Animated greeting text 🎄
 * - Firecracker explosions 🎆
 *
 * The greeting text appears from the center of the screen.
 * On every firecracker blast, each alphabet scatters randomly
 * across the entire viewport.
 *
 * Effects are shown automatically in December,
 * or can be forced for testing.
 *
 * @param {Object} props - Component props
 * @param {string} [props.text="🎄 Merry Christmas 🎄"]
 *  Text displayed in the center of the screen.
 * @param {number} [props.snowflakeCount=200]
 *  Number of snowflakes rendered.
 * @param {boolean} [props.showText=true]
 *  Whether to show the greeting text.
 * @param {boolean} [props.fireworks=true]
 *  Enable or disable firecracker explosions.
 * @param {number} [props.fireworkInterval=12000]
 *  Interval (in milliseconds) between firecracker blasts.
 * @param {number} [props.startDay=1]
 *  Start day in December when effects become active.
 * @param {number} [props.endDay=31]
 *  End day in December when effects stop.
 * @param {boolean} [props.force=false]
 *  Force enable effects regardless of date.
 *
 * @returns {JSX.Element|null}
 *  The Christmas effects UI or null when inactive.
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
   * Controls whether the text is in "exploded" state.
   * When true, letters scatter across the screen.
   */
  const [explode, setExplode] = useState(false);

  /**
   * Determines whether effects should be active.
   * - Enabled when `force` is true
   * - Otherwise enabled only in December within the date range
   */
  const active =
    force ||
    (isDecember() &&
      now.getDate() >= startDay &&
      now.getDate() <= endDay);

  /**
   * Handles firecracker blasts and text explosion animation.
   * Re-triggers animation at the configured interval.
   */
  useEffect(() => {
    if (!active || !fireworks) return;

    /**
     * Triggers one firecracker blast and text scatter.
     */
    const blast = () => {
      fireCrackers();
      setExplode(true);

      // Reset animation so it can replay on next blast
      setTimeout(() => setExplode(false), 1400);
    };

    blast();
    const id = setInterval(blast, fireworkInterval);

    // Cleanup interval on unmount or dependency change
    return () => clearInterval(id);
  }, [active, fireworks, fireworkInterval]);

  // Do not render anything if effects are inactive
  if (!active) return null;

  return (
    <div className="christmas-container">
      {/* ❄️ Snowfall background layer */}
      <div className="snow-layer">
        <Snowfall snowflakeCount={snowflakeCount} />
      </div>

      {/* 🎄 Animated greeting text */}
      {showText && (
        <div
          key={explode ? "explode" : "enter"}
          className={`christmas-text ${explode ? "explode" : "enter"}`}
        >
          {text.split("").map((char, i) => (
            <span
              key={`${explode}-${i}`}
              className="letter"
              style={{
                "--x": `${Math.random() * window.innerWidth -
                  window.innerWidth / 2}px`,
                "--y": `${Math.random() * window.innerHeight -
                  window.innerHeight / 2}px`,
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
