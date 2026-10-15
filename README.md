# Bulbul Singh · Portfolio

Static site: plain HTML, CSS and a small JS file. No build step.

## Structure
- `index.html`: home (hero, about, projects, skills, experience, contact)
- `projects/<name>/index.html`: one page per project
- `styles.css`, `app.js`, `assets/`: shared styling, behaviour and images
- `Bulbul_Singh_Resume.pdf`: the Resume links open this file (replace it, keep the name)
- `vercel.json`, `robots.txt`, `sitemap.xml`, `404.html`, `favicon.svg`, `og-image.png`

## Preview locally
    python3 -m http.server 8000
then open http://localhost:8000

## Deploy (Vercel, auto-deploys on every push)
1. Create a GitHub repo named `portfolio`, then push this folder to it.
2. On vercel.com choose Add New, Project, import the repo.
3. Framework preset: Other. Leave build command and output directory empty. Deploy.
4. Every later `git push` to `main` redeploys automatically.

## After the first deploy
Run `python3 scripts/set_site_url.py https://YOUR-LIVE-URL`, then commit and push. This fixes the canonical, social-preview and sitemap addresses.

## Common edits
- New resume: replace `Bulbul_Singh_Resume.pdf`, commit, push.
- New project: copy a folder in `projects/`, edit it, add a card in `index.html`, add the URL to `sitemap.xml`.
