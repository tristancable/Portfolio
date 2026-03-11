"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function VisitorCounter({ className }: { className?: string }) {
    const [visits, setVisits] = useState<number | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        async function trackVisit() {
            const hasVisited = localStorage.getItem("portfolio_visited");

            // Only increment if on homepage AND not already counted
            if (pathname === "/" && !hasVisited) {
                await fetch("/api/visits", { method: "POST" });

                // mark visitor so refresh doesn't increment
                // Boolean makes it so it counts visit per browser
                // localStorage.setItem("portfolio_visited", "true");
                // Timestamp makes it so it counts a visit every 24 hours per browser
                localStorage.setItem("portfolio_visited", Date.now().toString());
            }

            const res = await fetch("/api/visits");
            const data = await res.json();
            setVisits(data.visits);
        }

        trackVisit();
    }, [pathname]);

    return (
        <div className={className}>
            {visits !== null ? `Visitors: ${visits}` : "Loading..."}
        </div>
    );
}