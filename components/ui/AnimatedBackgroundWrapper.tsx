"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), {
  ssr: false,
});

const staticBackground = `
  radial-gradient(circle at 20% 25%, rgba(59,130,246,0.20), transparent 40%),
  radial-gradient(circle at 80% 70%, rgba(6,182,212,0.18), transparent 40%),
  radial-gradient(circle at 50% 95%, rgba(168,85,247,0.18), transparent 45%)
`;

export default function AnimatedBackgroundWrapper() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <>
      <div
        className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-black md:hidden"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{ background: staticBackground }}
        />
      </div>

      <div className="hidden md:contents">
        <AnimatedBackground />
      </div>
    </>
  );
}
