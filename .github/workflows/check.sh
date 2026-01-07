#!/bin/sh

set -e

# Install
yarn

# Depcheck
yarn depcheck

# Prettier
yarn prettier

# Build
yarn build

# Sitemap
yarn sitemap

echo "Done!"
