import confetti from "canvas-confetti";

export const fireCrackers = () => {
  confetti({
    particleCount: 120,
    spread: 90,
    startVelocity: 45,
    gravity: 1.2,
    ticks: 200,
    origin: { y: 0.7 },
    colors: ["#ff0000", "#ffffff", "#00ff00"]
  });
};
