"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const AnimatedBackground = dynamic(
    () => import("./AnimatedBackground"),
    { ssr: false }
);

export default function AnimatedBackgroundWrapper() {
    const pathname = usePathname();

    if (pathname !== "/") return null;

    return <AnimatedBackground />;
}