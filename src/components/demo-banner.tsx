"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  // Default to true — set NEXT_PUBLIC_DEMO_MODE=false to hide
  if (process.env.NEXT_PUBLIC_DEMO_MODE === "false") return null;
  if (dismissed) return null;

  return (
    <div className="sticky top-0 z-[60] bg-amber-400 text-amber-950 text-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <p className="text-center flex-1">
          DEMO SITE — Phone, email, photos, and stats are placeholders. Real
          info goes here before launch.
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 p-1 hover:bg-amber-500/50 rounded"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
