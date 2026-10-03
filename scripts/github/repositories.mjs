import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const output = path.join(root, 'src/data/githubProjects.generated.json');
const cache = path.join(root, '.cache/github-projects.json');
const owner = 'OlatomiwaTech';

async function readJson(file) {
  try { return JSON.parse(await fs.readFile(file, 'utf8')); } catch { return undefined; }
}

export async function fetchRepositories(fetchImpl = fetch) {
  const response = await fetchImpl(`https://api.github.com/users/${owner}/repos?per_page=100&sort=updated`, { headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' } });
  if (!response.ok) throw new Error(`GitHub repository request failed (${response.status} ${response.statusText})`);
  const data = await response.json();
  if (!Array.isArray(data)) throw new Error('GitHub returned an invalid repository list');
  return data.filter((repo) => repo.owner?.login?.toLowerCase() === owner.toLowerCase() && repo.visibility === 'public');
}

export function normalizeRepositories(repositories) {
  return repositories.map(({ name, full_name, description, html_url, homepage, language, topics, stargazers_count, forks_count, updated_at, archived, visibility, owner: repoOwner }) => ({ name, full_name, description, html_url, homepage, language, topics: topics ?? [], stargazers_count, forks_count, updated_at, archived, visibility, owner: { login: repoOwner.login } }));
}

async function main() {
  const existing = await readJson(output);
  const cached = await readJson(cache);
  try {
    const repositories = normalizeRepositories(await fetchRepositories());
    const snapshot = { generatedAt: new Date().toISOString(), repositories };
    await fs.mkdir(path.dirname(output), { recursive: true });
    await fs.mkdir(path.dirname(cache), { recursive: true });
    await fs.writeFile(output, `${JSON.stringify(snapshot, null, 2)}\n`);
    await fs.writeFile(cache, JSON.stringify(snapshot));
    console.log(`Updated GitHub project data for ${repositories.length} public repositories.`);
  } catch (error) {
    const fallback = existing?.repositories?.length ? existing : cached;
    if (!fallback?.repositories?.length) throw new Error(`Could not refresh GitHub project data and no valid snapshot exists: ${error.message}`);
    console.warn(`GitHub sync failed: ${error.message}. Keeping the previous ${fallback.repositories.length}-repository snapshot.`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
