@echo off
REM Verification Script for Career Catalyst Institute Website (Windows)

echo.
echo ================================
echo Career Catalyst Institute Project
echo Verification Script (Windows)
echo ================================
echo.

setlocal enabledelayedexpansion

set "files=package.json vite.config.js tailwind.config.js postcss.config.js index.html .gitignore .env.example README.md QUICKSTART.md INSTALLATION.md DEPLOYMENT_CHECKLIST.md FILE_LISTING.md PROJECT_COMPLETE.md src\App.jsx src\main.jsx src\index.css"

echo [Configuration Files]
for %%F in (package.json vite.config.js tailwind.config.js postcss.config.js index.html .gitignore .env.example) do (
    if exist "%%F" (
        echo   [OK] %%F
    ) else (
        echo   [MISSING] %%F
    )
)

echo.
echo [Documentation Files]
for %%F in (README.md QUICKSTART.md INSTALLATION.md DEPLOYMENT_CHECKLIST.md FILE_LISTING.md PROJECT_COMPLETE.md) do (
    if exist "%%F" (
        echo   [OK] %%F
    ) else (
        echo   [MISSING] %%F
    )
)

echo.
echo [Source Code Structure]
if exist "src\App.jsx" echo   [OK] src\App.jsx
if exist "src\main.jsx" echo   [OK] src\main.jsx
if exist "src\index.css" echo   [OK] src\index.css

echo.
echo [Components - 17 files]
for %%F in (Navbar Footer Hero SectionTitle CTASection FeatureCard CourseCard TestimonialCard BlogCard ToolCard CareerCard ModuleCard ProcessCard StatCard StatsCounter ContactForm FAQAccordion) do (
    if exist "src\components\%%F.jsx" (
        echo   [OK] %%F.jsx
    ) else (
        echo   [MISSING] %%F.jsx
    )
)

echo.
echo [Pages - 10 files]
for %%F in (Home About Course Placement SuccessStories Contact Blog FAQ PrivacyPolicy TermsConditions) do (
    if exist "src\pages\%%F.jsx" (
        echo   [OK] %%F.jsx
    ) else (
        echo   [MISSING] %%F.jsx
    )
)

echo.
echo [Utilities and Hooks]
if exist "src\hooks\useHooks.js" echo   [OK] src\hooks\useHooks.js
if exist "src\utils\helpers.js" echo   [OK] src\utils\helpers.js
if exist "src\utils\withHelmet.js" echo   [OK] src\utils\withHelmet.js
if exist "src\data\constants.js" echo   [OK] src\data\constants.js

echo.
echo [Directories]
for %%D in (components pages hooks utils data assets layouts routes services) do (
    if exist "src\%%D" (
        echo   [OK] src\%%D\
    ) else (
        echo   [MISSING] src\%%D\
    )
)

if exist "public" echo   [OK] public\

echo.
echo ================================
echo Project Structure Check Complete!
echo ================================
echo.
echo Next Steps:
echo   1. cd Careercat
echo   2. npm install
echo   3. npm run dev
echo.
echo Happy Coding! ^_^
echo.
pause
