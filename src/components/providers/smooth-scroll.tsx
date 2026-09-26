"use client";

import { useEffect } from "react";

// Defensive DOM Patch:
// React 18/19 throws an unhandled fatal DOMException:
// "NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node"
// and "insertBefore" when browser extensions (Google Translate, Grammarly, DarkReader, etc.),
// auto-fillers, or client hydration alter the DOM outside React's Virtual DOM.
// This patch intercepts removeChild and insertBefore and handles detached or re-parented nodes gracefully.
if (typeof window !== "undefined" && typeof Node === "function" && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("Prevented fatal removeChild crash (node was not a child of parent).");
      }
      return child;
    }
    return originalRemoveChild.apply(this, arguments as unknown as [T]) as T;
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("Prevented fatal insertBefore crash (reference node was not a child of parent).");
      }
      if (referenceNode.parentNode) {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode) as T;
      }
      return newNode;
    }
    return originalInsertBefore.apply(this, arguments as unknown as [T, Node | null]) as T;
  };
}

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
  useChunkErrorRecovery();
  return <>{children}</>;
}
