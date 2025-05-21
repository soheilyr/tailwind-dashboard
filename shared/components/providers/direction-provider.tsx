"use client";

import * as React from "react";
import { getDirection, isRTL } from "@/lib/config/direction";

interface DirectionProviderProps {
  children: React.ReactNode;
}

export function DirectionProvider({ children }: DirectionProviderProps) {
  const [direction, setDirection] = React.useState<"ltr" | "rtl">(
    isRTL() ? "rtl" : "ltr"
  );

  React.useEffect(() => {
    const dir = getDirection();
    if (dir === "auto") {
      // Watch for changes in the document direction
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "dir"
          ) {
            setDirection(document.documentElement.dir as "ltr" | "rtl");
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["dir"],
      });

      return () => observer.disconnect();
    } else {
      setDirection(dir as "ltr" | "rtl");
    }
  }, []);

  return (
    <div dir={direction} className={direction === "rtl" ? "rtl" : "ltr"}>
      {children}
    </div>
  );
}
