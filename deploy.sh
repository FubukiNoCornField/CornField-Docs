#!/usr/bin/env sh

set -e
npm run build
cp -r -f src/.vuepress/dist/ docs/
git add -A
git commit -m 'chore: 🤖 GitHub Pages Deploy in Travis CI'
git push -f git@github.com:FubukiNoCornField/fubukinocornfield.github.io.git master
