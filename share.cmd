@echo off
title Lovelace - Public Share Link
cd /d "%~dp0"
echo ============================================
echo    LOVELACE  -  create a share link
echo ============================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo [!] Node.js is not installed. Get it from https://nodejs.org and retry.
  pause
  exit /b 1
)
if not exist "node_modules" ( call npm install )
echo Building the latest version...
call npm run build
echo.
echo Starting local server and public tunnel...
echo Your shareable https link appears below in a few seconds.
echo Keep THIS window open to keep the link alive. Close it to stop sharing.
echo.
start "lovelace-server" /min cmd /c "npx --yes serve -s dist -l 4321"
timeout /t 4 >nul
call npx --yes cloudflared tunnel --protocol http2 --url http://localhost:4321
echo.
echo Stopping share server...
taskkill /im cloudflared.exe /f >nul 2>nul
taskkill /fi "WINDOWTITLE eq lovelace-server*" /t /f >nul 2>nul
pause
