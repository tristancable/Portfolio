"use client";

import { useEffect, useState } from "react";

interface VisitorCounterProps {
    className?: string; // allow optional className
}

export default function VisitorCounter({ className }: VisitorCounterProps) {
    const [visits, setVisits] = useState<number | null>(null);

    useEffect(() => {
        async function fetchVisits() {
            const res = await fetch("/api/visits");
            const data = await res.json();
            setVisits(data.visits);
        }
        fetchVisits();
    }, []);

    return (
        <div className={className}>
            {visits !== null ? `Visitors: ${visits}` : "Loading..."}
        </div>
    );
}