export const isDecember = () => {
  if (typeof window === "undefined") return false;
  const now = new Date();
  return now.getMonth() === 11;
};
