"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const target = searchParams.get("scroll");

        if (target) {
            const el = document.getElementById(target);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState({}, "", "/");
            }
        }
    }, [searchParams]);

    return null; // doesn't render anything
}