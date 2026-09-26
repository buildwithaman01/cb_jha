"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundColor: "#0A0E14",
          color: "#FAFAF7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <div style={{ maxWidth: "420px" }}>
          <h1
            style={{
              fontSize: "1.75rem",
              marginBottom: "0.75rem",
              color: "#E8A33D",
            }}
          >
            C.B. Jha Tutorials
          </h1>
          <p
            style={{
              color: "rgba(250, 250, 247, 0.7)",
              fontSize: "0.95rem",
              lineHeight: "1.5",
              marginBottom: "1.5rem",
            }}
          >
            The application experienced an unexpected error. Please click below to
            refresh the page.
          </p>
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: "#E8A33D",
              color: "#1B1B1B",
              border: "none",
              padding: "0.75rem 1.5rem",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              borderRadius: "2px",
            }}
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  );
}
