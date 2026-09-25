"use client";

import { useEffect } from "react";

// Handles Vercel "chunk load error" — when a new deployment invalidates old JS
// chunks, catch the error and force a full page reload to get fresh chunks.
function useChunkErrorRecovery() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const msg = event.message || "";
      if (
        msg.includes("Loading chunk") ||
        msg.includes("ChunkLoadError") ||
        msg.includes("Failed to fetch dynamically imported module")
      ) {
        window.location.reload();
      }
    };
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = String(event.reason || "");
      if (
        reason.includes("Loading chunk") ||
        reason.includes("ChunkLoadError") ||
        reason.includes("Failed to fetch dynamically imported module")
      ) {
        window.location.reload();
      }
    };
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Auto-recover from Vercel chunk load errors (intermittent "page couldn't load")
  useChunkErrorRecovery();

  // No Lenis — native browser smooth scroll is used via CSS (html { scroll-behavior: smooth })
  // This avoids all GSAP/Lenis conflicts that were causing scroll freezes and crashes.
  return <>{children}</>;
}
