"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error caught by boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background px-4 py-16">
      <Container className="max-w-md text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-3">
          Something went wrong
        </h1>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          We encountered a temporary issue while loading this page. Please try refreshing or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center h-11 px-6 bg-accent text-accent-foreground font-heading font-semibold text-sm hover:opacity-95 transition-opacity"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 border border-border text-foreground font-medium text-sm hover:bg-muted/50 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
        <p className="text-xs text-muted-foreground/60 mt-8">
          Need immediate assistance? Call{" "}
          <a href="tel:+919470808655" className="underline hover:text-accent">
            +91 94708 08655
          </a>
        </p>
      </Container>
    </div>
  );
}
