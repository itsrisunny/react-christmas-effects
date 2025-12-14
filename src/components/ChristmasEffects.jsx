import React, { useEffect } from "react";
import Snowfall from "react-snowfall";
import { isDecember } from "../utils/isDecember";
import { fireCrackers } from "../utils/fireCrackers";
import "../styles/christmas.css";

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
  const now = new Date();

  const active =
    force ||
    (isDecember() &&
      now.getDate() >= startDay &&
      now.getDate() <= endDay);

  useEffect(() => {
    if (!active || !fireworks) return;

    fireCrackers();
    const id = setInterval(fireCrackers, fireworkInterval);
    return () => clearInterval(id);
  }, [active, fireworks, fireworkInterval]);

  if (!active) return null;

  return (
    <div className="christmas-container">
      <Snowfall snowflakeCount={snowflakeCount} />

      {showText && (
        <h1 className="christmas-text">{text}</h1>
      )}
    </div>
  );
}
