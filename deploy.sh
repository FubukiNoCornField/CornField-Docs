#!/usr/bin/env sh

set -e
npm run build
cp -r -f src/.vuepress/dist/ docs/
git add -A
git commit -m 'chore: 🤖 GitHub Pages Deploy in Travis CI'
git push -f https://${GITHUB_TOKEN}@github.com/FubukiNoCornField/fubukinocornfield.github.io.git master
