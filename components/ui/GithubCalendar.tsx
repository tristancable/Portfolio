"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => mod.GitHubCalendar || mod),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-[140px] w-full max-w-3xl mx-auto rounded-xl bg-zinc-800/40 animate-pulse"
        aria-hidden
      />
    ),
  },
);

export default function GithubActivity() {
  return (
    <div className="mt-16 min-h-[180px] flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">GitHub Activity</h2>

      <div className="w-full flex justify-center overflow-x-auto">
        <GitHubCalendar
          username="tristancable"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </div>
  );
}
