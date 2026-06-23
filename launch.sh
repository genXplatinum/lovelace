#!/usr/bin/env bash
# One-click launcher for macOS / Linux. Run: ./launch.sh
cd "$(dirname "$0")" || exit 1

if ! command -v node >/dev/null 2>&1; then
  echo "[!] Node.js is not installed. Get the LTS build from https://nodejs.org and try again."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "First run: installing dependencies..."
  npm install
fi

echo "Starting the site — your browser will open automatically."
npm run dev -- --open
