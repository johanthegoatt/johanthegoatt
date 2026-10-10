// Renders profile/trophy.svg: a row of ranked trophies from public GitHub data.
// Usage: GITHUB_TOKEN=... node .github/scripts/trophies.mjs <username> <output>

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const [login = "johanthegoatt", out = "profile/trophy.svg"] = process.argv.slice(2);
const token = process.env.GITHUB_TOKEN;

const query = `query($login: String!) {
  user(login: $login) {
    createdAt
    followers { totalCount }
    pullRequests { totalCount }
    issues { totalCount }
    contributionsCollection { totalCommitContributions restrictedContributionsCount }
    repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
      totalCount
      nodes { stargazerCount languages(first: 10) { nodes { name } } }
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({ query, variables: { login } }),
});
const json = await res.json();
if (!json.data?.user) {
  console.error("GitHub query failed:", JSON.stringify(json.errors ?? json));
  process.exit(1);
}
const u = json.data.user;

const repos = u.repositories.nodes;
const languages = new Set(repos.flatMap((r) => r.languages.nodes.map((l) => l.name)));
const stars = repos.reduce((n, r) => n + r.stargazerCount, 0);
const commits =
  u.contributionsCollection.totalCommitContributions +
  u.contributionsCollection.restrictedContributionsCount;
const years = (Date.now() - new Date(u.createdAt)) / (365.25 * 24 * 3600 * 1000);

// [rank, minimum] from best to worst. Only ranks A and above are shown.
const TIERS = {
  Repositories: [["SSS", 100], ["SS", 70], ["S", 50], ["AAA", 30], ["AA", 20], ["A", 10], ["B", 5], ["C", 1]],
  Languages:    [["SSS", 15], ["SS", 12], ["S", 10], ["AAA", 8], ["AA", 6], ["A", 4], ["B", 2], ["C", 1]],
  Commits:      [["SSS", 4000], ["SS", 2000], ["S", 1000], ["AAA", 500], ["AA", 200], ["A", 100], ["B", 10], ["C", 1]],
  Stars:        [["SSS", 2000], ["SS", 700], ["S", 200], ["AAA", 100], ["AA", 50], ["A", 30], ["B", 10], ["C", 1]],
  "Pull Requests": [["SSS", 1000], ["SS", 500], ["S", 200], ["AAA", 100], ["AA", 50], ["A", 20], ["B", 5], ["C", 1]],
  Followers:    [["SSS", 1000], ["SS", 400], ["S", 200], ["AAA", 100], ["AA", 50], ["A", 20], ["B", 5], ["C", 1]],
  Issues:       [["SSS", 1000], ["SS", 500], ["S", 200], ["AAA", 100], ["AA", 50], ["A", 20], ["B", 5], ["C", 1]],
};

const values = {
  Repositories: u.repositories.totalCount,
  Languages: languages.size,
  Commits: commits,
  Stars: stars,
  "Pull Requests": u.pullRequests.totalCount,
  Followers: u.followers.totalCount,
  Issues: u.issues.totalCount,
};

const COLOR = { SSS: "#ffd166", SS: "#ffd166", S: "#ffd166", AAA: "#5b9dff", AA: "#5b9dff", A: "#5b9dff", B: "#a2a8b0", C: "#7b828b" };
const TITLE = {
  Repositories: ["Builder", "Repositories"], Languages: ["Polyglot", "Languages"], Commits: ["Committer", "Commits"],
  Stars: ["Starred", "Stars"], "Pull Requests": ["Contributor", "Pull Requests"], Followers: ["Followed", "Followers"],
  Issues: ["Reporter", "Issues"],
};

const earned = Object.entries(values)
  .map(([k, v]) => {
    const tier = TIERS[k].find(([, min]) => v >= min);
    return tier && { key: k, value: v, rank: tier[0] };
  })
  .filter((t) => t && !['B', 'C'].includes(t.rank));

const fmt = (n) => (n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n));
const W = 128, H = 150, GAP = 12;
const width = Math.max(earned.length, 1) * (W + GAP) - GAP;

const tile = (t, i) => {
  const x = i * (W + GAP);
  const c = COLOR[t.rank];
  const [name, label] = TITLE[t.key];
  return `
  <g transform="translate(${x},0)">
    <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="10" fill="#0d1117" stroke="#1d2024"/>
    <circle cx="${W / 2}" cy="48" r="28" fill="none" stroke="${c}" stroke-width="2" opacity="0.9"/>
    <circle cx="${W / 2}" cy="48" r="22" fill="${c}" opacity="0.12"/>
    <text x="${W / 2}" y="${48 + (t.rank.length > 2 ? 5 : 7)}" text-anchor="middle" font-size="${t.rank.length > 2 ? 15 : 20}" font-weight="700" fill="${c}">${t.rank}</text>
    <text x="${W / 2}" y="100" text-anchor="middle" font-size="13" font-weight="600" fill="#f2f3f5">${name}</text>
    <text x="${W / 2}" y="122" text-anchor="middle" font-size="12" fill="#a2a8b0">${fmt(t.value)} ${label}</text>
  </g>`;
};

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${H}" viewBox="0 0 ${width} ${H}" font-family="-apple-system,'Segoe UI',Helvetica,Arial,sans-serif">
  <title>GitHub trophies for ${login}</title>${earned.map(tile).join("")}
</svg>
`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, svg);
console.log(`wrote ${out}:`, earned.map((t) => `${t.key}=${t.value}(${t.rank})`).join(", "), `| account ${years.toFixed(1)}y`);
