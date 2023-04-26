#!/bin/bash

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
echo "Node Version: $(node -v)"
echo "NPM Version: $(npm -v)"
npm install yarn
yarn install