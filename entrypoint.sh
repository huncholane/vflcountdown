#!/bin/bash
nvm use 18.2.0
npm install
npm run build
echo `node -v`