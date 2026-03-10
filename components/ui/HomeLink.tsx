"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function HomeLink({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push("/");
        }
    };

    return (
        <a href="/" onClick={handleClick} className={className}>
            {children}
        </a>
    );
}