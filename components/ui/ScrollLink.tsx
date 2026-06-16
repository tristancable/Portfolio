"use client";

import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ScrollLink({
    targetId,
    children,
    className,
    onNavigate,
}: {
    targetId: string;
    children: ReactNode;
    className?: string;
    onNavigate?: () => void;
}) {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (pathname !== "/") {
            if (targetId === "home") {
                // Navigate to root without any query param
                router.push("/");
            } else {
                router.push(`/?scroll=${targetId}`);
            }
        } else {
            if (targetId === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const el = document.getElementById(targetId);
                el?.scrollIntoView({ behavior: "smooth" });
            }
        }

        onNavigate?.();
    };

    return (
        <a href="/" onClick={handleClick} className={className}>
            {children}
        </a>
    );
}