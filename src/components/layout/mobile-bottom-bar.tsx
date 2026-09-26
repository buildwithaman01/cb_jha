"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0A0E14]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch h-[56px]">
        <a
          href="tel:+919470808655"
          className="flex-1 flex items-center justify-center gap-2 text-white/80 hover:text-white active:bg-white/10 transition-all text-xs sm:text-sm font-medium border-r border-white/10 touch-manipulation"
        >
          <Phone className="w-4 h-4 text-accent" />
          Call Now
        </a>
        <a
          href="https://wa.me/919470808655?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20C.B.%20Jha%20Tutorials"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs sm:text-sm font-semibold active:opacity-90 active:scale-[0.99] transition-all touch-manipulation border-r border-white/10 shadow-inner"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.975 0C5.361 0 0 5.361 0 11.975c0 2.096.546 4.06 1.501 5.768L0 24l6.435-1.688A11.932 11.932 0 0011.975 24C18.589 24 24 18.639 24 12.025 24 5.41 18.589 0 11.975 0zm0 21.818a9.84 9.84 0 01-5.018-1.374l-.36-.214-3.728.978.994-3.632-.235-.372A9.797 9.797 0 012.182 12.025c0-5.405 4.398-9.843 9.843-9.843 5.405 0 9.793 4.398 9.793 9.843s-4.428 9.793-9.843 9.793z"/>
          </svg>
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center bg-accent text-accent-foreground text-xs sm:text-sm font-heading font-bold active:opacity-90 active:scale-[0.99] transition-all touch-manipulation"
        >
          Enquire
        </Link>
      </div>
    </div>
  );
}
