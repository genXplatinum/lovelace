@echo off
title Publish Lovelace to GitHub
cd /d "%~dp0"
echo ================================================================
echo     PUBLISH LOVELACE TO GITHUB
echo ================================================================
echo.
echo  STEP 1 - do this FIRST if you haven't already:
echo  Create an EMPTY project on GitHub here:  https://github.com/new
echo     - Repository name:  lovelace
echo     - Choose:           Public
echo     - Do NOT tick "Add a README", ".gitignore", or "license"
echo     - Click "Create repository"
echo.
echo  When you continue, a browser window may open asking you to log
echo  in to GitHub. That is normal - just approve / sign in.
echo.
pause
echo.
echo  Connecting this folder to your GitHub project...
git remote remove origin >nul 2>nul
git remote add origin https://github.com/genXplatinum/lovelace.git
git branch -M main
echo  Uploading your website (this can take a moment)...
git push -u origin main
if errorlevel 1 goto failed

echo.
echo ================================================================
echo   SUCCESS! Your code is now on GitHub.
echo.
echo   ONE LAST STEP to switch the website on:
echo     1) Open: https://github.com/genXplatinum/lovelace
echo     2) Click  Settings   (top of the page)
echo     3) Click  Pages      (left-hand menu)
echo     4) Under "Source", choose:  GitHub Actions
echo.
echo   Then wait about 2 minutes and open your live site:
echo     https://genXplatinum.github.io/lovelace/
echo ================================================================
goto end

:failed
echo.
echo ================================================================
echo   The upload did not finish.
echo   The usual reason: the GitHub project wasn't created yet, or it
echo   has a different name.
echo.
echo   Fix: go to https://github.com/new and create a PUBLIC project
echo   named exactly   lovelace   (don't add any files),
echo   then run this file again.
echo ================================================================

:end
echo.
pause
