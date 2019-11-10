#!/usr/bin/env sh
set -e
git checkout master
npm run build
cp -rf src/.vuepress/dist/ docs/
rm -rf src/.vuepress/dist/
git add -A
git commit -m 'chore: 🤖 GitHub Pages Deploy in Travis CI'
git push -f https://${GITHUB_TOKEN}@github.com/FubukiNoCornField/fubukinocornfield.github.io.git master
