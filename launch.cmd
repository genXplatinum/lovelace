@echo off
title Lovelace
cd /d "%~dp0"
echo ============================================
echo    LOVELACE  -  local preview
echo ============================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo [!] Node.js is not installed.
  echo     Install the LTS version from https://nodejs.org then run this again.
  echo.
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo First run: installing dependencies. This can take a minute...
  echo.
  call npm install
  echo.
)
echo Starting the site - your browser will open automatically.
echo Keep this window open while you work. Close it to stop the site.
echo.
call npm run dev -- --open
pause
