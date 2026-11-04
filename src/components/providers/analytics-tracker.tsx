"use client";

import { useEffect } from "react";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        const text = target.innerText?.trim() || "Phone Link";
        trackCallClick(text);
      } else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        const text = target.innerText?.trim() || "WhatsApp Link";
        trackWhatsAppClick(text);
      }
    }

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

