declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

export function trackCallClick(source?: string) {
  trackEvent("contact_call_click", {
    event_category: "Engagement",
    event_label: source || "Phone Click",
    phone_number: "+919470808655",
  });
}

export function trackWhatsAppClick(source?: string) {
  trackEvent("whatsapp_click", {
    event_category: "Engagement",
    event_label: source || "WhatsApp Click",
  });
}

export function trackFormSubmission(formType: string) {
  trackEvent("generate_lead", {
    event_category: "Leads",
    event_label: formType,
  });
}

