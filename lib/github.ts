export async function getRepoStats(owner: string, repo: string) {
    const url = `https://api.github.com/repos/${owner}/${repo}`;
    console.log("Fetching:", url);

    const res = await fetch(url, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        console.error(await res.text());
        throw new Error("Failed to fetch repo data");
    }

    const data = await res.json();

    return {
        stars: data.stargazers_count,
        forks: data.forks_count,
        // language: data.language,
    };
}