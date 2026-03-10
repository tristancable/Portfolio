"use client";

import dynamic from "next/dynamic";

// Dynamic import with SSR disabled
const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((mod) => mod.GitHubCalendar || mod),
    { ssr: false } // important: only render on client
);

export default function GithubActivity() {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">GitHub Activity</h2>

            <GitHubCalendar
                username="tristancable"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
            />
        </div>
    );
}