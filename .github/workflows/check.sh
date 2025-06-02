#!/bin/sh

set -e

# Install
yarn

# Depcheck
yarn depcheck

# Prettier
yarn prettier

# Lint
yarn next lint

# Build
yarn build

# Sitemap
yarn sitemap

echo "Done!"
