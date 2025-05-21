export type Direction = "ltr" | "rtl" | "auto";

export const getDirection = (): Direction => {
  // Check environment variable first
  const envDirection = process.env.NEXT_PUBLIC_DIRECTION as Direction;
  if (envDirection && ["ltr", "rtl", "auto"].includes(envDirection)) {
    return envDirection;
  }

  // If auto, detect based on user's browser language
  if (envDirection === "auto") {
    if (typeof window !== "undefined") {
      const htmlDir = document.documentElement.dir;
      if (htmlDir === "rtl") return "rtl";
    }
  }

  // Default to LTR
  return "ltr";
};

export const isRTL = (): boolean => {
  const direction = getDirection();
  if (direction === "auto" && typeof window !== "undefined") {
    return document.documentElement.dir === "rtl";
  }
  return direction === "rtl";
};
