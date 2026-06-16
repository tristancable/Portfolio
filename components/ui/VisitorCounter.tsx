"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function VisitorCounter({ className }: { className?: string }) {
  const [visits, setVisits] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    async function trackVisit() {
      const hasVisited = localStorage.getItem("portfolio_visited");

      if (pathname === "/" && !hasVisited) {
        await fetch("/api/visits", { method: "POST" });
        localStorage.setItem("portfolio_visited", Date.now().toString());
      }

      const res = await fetch("/api/visits");
      const data = await res.json();
      setVisits(data.visits);
    }

    trackVisit();
  }, [pathname]);

  return (
    <div
      className={`tabular-nums min-w-[7.5rem] text-right ${className ?? ""}`}
      aria-live="polite"
    >
      {visits !== null ? `Visitors: ${visits}` : "\u00A0"}
    </div>
  );
}
