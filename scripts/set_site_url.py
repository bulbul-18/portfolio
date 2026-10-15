"""Usage: python3 scripts/set_site_url.py https://your-live-url
Rewrites the site address in canonical, social and sitemap tags after you know your real URL."""
import sys,pathlib
root=pathlib.Path(__file__).resolve().parent.parent;old=(root/'site-url.txt').read_text().strip();new=sys.argv[1].rstrip('/')
n=0
for f in list(root.rglob('*.html'))+[root/'sitemap.xml',root/'robots.txt']:
    t=f.read_text();
    if old in t:f.write_text(t.replace(old,new));n+=1
(root/'site-url.txt').write_text(new+'\n');print(f'Updated {n} files: {old} -> {new}')
