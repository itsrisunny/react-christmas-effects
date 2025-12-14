import { useEffect } from "react";
import Snowfall from "react-snowfall";
import { isDecember } from "../utils/isDecember";
import { fireCrackers } from "../utils/fireCrackers";
import "../styles/christmas.css";

/**
 * ChristmasEffects
 *
 * Displays Christmas snow and firecracker effects in a React app.
 * Effects are automatically shown only during December unless forced.
 *
 * @param {Object} props - Component props
 * @param {string} [props.text="🎄 Merry Christmas 🎄"] - Text displayed on screen
 * @param {number} [props.snowflakeCount=200] - Number of snowflakes rendered
 * @param {boolean} [props.showText=true] - Whether to show the greeting text
 * @param {boolean} [props.fireworks=true] - Enable firecracker (fireworks) effect
 * @param {number} [props.fireworkInterval=12000] - Interval (ms) between fireworks
 * @param {number} [props.startDay=1] - Start day in December to show effects
 * @param {number} [props.endDay=31] - End day in December to show effects
 * @param {boolean} [props.force=false] - Force enable effects outside December
 *
 * @returns {JSX.Element|null} React component or null when inactive
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
  // Current date reference
  const now = new Date();

  /**
   * Determines whether the Christmas effects should be active.
   * - Enabled if `force` is true
   * - Otherwise enabled only in December within the specified date range
   */
  const active =
    force ||
    (isDecember() &&
      now.getDate() >= startDay &&
      now.getDate() <= endDay);

  /**
   * Trigger firecrackers at a fixed interval while effects are active.
   */
  useEffect(() => {
    if (!active || !fireworks) return;

    // Initial firecracker blast 🎆
    fireCrackers();

    // Repeated firecrackers at configured interval
    const id = setInterval(fireCrackers, fireworkInterval);

    // Cleanup interval on unmount or when dependencies change
    return () => clearInterval(id);
  }, [active, fireworks, fireworkInterval]);

  // Do not render anything when effects are inactive
  if (!active) return null;

  return (
    <div className="christmas-container">
      {/* Snowfall overlay */}
      <Snowfall snowflakeCount={snowflakeCount} />

      {/* Greeting text */}
      {showText && (
        <h1 className="christmas-text">{text}</h1>
      )}
    </div>
  );
}
