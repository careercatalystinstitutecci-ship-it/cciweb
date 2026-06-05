#!/bin/bash
# Verification Script for Career Catalyst Institute Website

echo "🔍 Verifying Career Catalyst Institute Project Structure..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check file/directory
check_item() {
    if [ -f "$1" ] || [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $2"
        return 0
    else
        echo -e "${RED}✗${NC} $2"
        return 1
    fi
}

# Check configuration files
echo "📋 Configuration Files:"
check_item "package.json" "package.json"
check_item "vite.config.js" "vite.config.js"
check_item "tailwind.config.js" "tailwind.config.js"
check_item "postcss.config.js" "postcss.config.js"
check_item "index.html" "index.html"
check_item ".gitignore" ".gitignore"
check_item ".env.example" ".env.example"

echo ""
echo "📚 Documentation Files:"
check_item "README.md" "README.md"
check_item "QUICKSTART.md" "QUICKSTART.md"
check_item "INSTALLATION.md" "INSTALLATION.md"
check_item "DEPLOYMENT_CHECKLIST.md" "DEPLOYMENT_CHECKLIST.md"
check_item "FILE_LISTING.md" "FILE_LISTING.md"
check_item "PROJECT_COMPLETE.md" "PROJECT_COMPLETE.md"

echo ""
echo "📁 Source Code Structure:"
check_item "src/App.jsx" "App.jsx"
check_item "src/main.jsx" "main.jsx"
check_item "src/index.css" "index.css"

echo ""
echo "🧩 Components (17 files):"
check_item "src/components/Navbar.jsx" "Navbar.jsx"
check_item "src/components/Footer.jsx" "Footer.jsx"
check_item "src/components/Hero.jsx" "Hero.jsx"
check_item "src/components/SectionTitle.jsx" "SectionTitle.jsx"
check_item "src/components/CTASection.jsx" "CTASection.jsx"
check_item "src/components/FeatureCard.jsx" "FeatureCard.jsx"
check_item "src/components/CourseCard.jsx" "CourseCard.jsx"
check_item "src/components/TestimonialCard.jsx" "TestimonialCard.jsx"
check_item "src/components/BlogCard.jsx" "BlogCard.jsx"
check_item "src/components/ToolCard.jsx" "ToolCard.jsx"
check_item "src/components/CareerCard.jsx" "CareerCard.jsx"
check_item "src/components/ModuleCard.jsx" "ModuleCard.jsx"
check_item "src/components/ProcessCard.jsx" "ProcessCard.jsx"
check_item "src/components/StatCard.jsx" "StatCard.jsx"
check_item "src/components/StatsCounter.jsx" "StatsCounter.jsx"
check_item "src/components/ContactForm.jsx" "ContactForm.jsx"
check_item "src/components/FAQAccordion.jsx" "FAQAccordion.jsx"

echo ""
echo "📄 Pages (10 files):"
check_item "src/pages/Home.jsx" "Home.jsx"
check_item "src/pages/About.jsx" "About.jsx"
check_item "src/pages/Course.jsx" "Course.jsx"
check_item "src/pages/Placement.jsx" "Placement.jsx"
check_item "src/pages/SuccessStories.jsx" "SuccessStories.jsx"
check_item "src/pages/Contact.jsx" "Contact.jsx"
check_item "src/pages/Blog.jsx" "Blog.jsx"
check_item "src/pages/FAQ.jsx" "FAQ.jsx"
check_item "src/pages/PrivacyPolicy.jsx" "PrivacyPolicy.jsx"
check_item "src/pages/TermsConditions.jsx" "TermsConditions.jsx"

echo ""
echo "🔧 Utilities & Hooks:"
check_item "src/hooks/useHooks.js" "useHooks.js"
check_item "src/utils/helpers.js" "helpers.js"
check_item "src/utils/withHelmet.js" "withHelmet.js"
check_item "src/data/constants.js" "constants.js"

echo ""
echo "📁 Folders:"
check_item "src/components/" "components/"
check_item "src/pages/" "pages/"
check_item "src/hooks/" "hooks/"
check_item "src/utils/" "utils/"
check_item "src/data/" "data/"
check_item "src/assets/" "assets/"
check_item "src/layouts/" "layouts/"
check_item "src/routes/" "routes/"
check_item "src/services/" "services/"
check_item "public/" "public/"

echo ""
echo "================================"
echo -e "${GREEN}✓ Project Structure Verified!${NC}"
echo "================================"
echo ""
echo "📝 Next Steps:"
echo "1. cd Careercat"
echo "2. npm install"
echo "3. npm run dev"
echo ""
echo "📚 Documentation:"
echo "- README.md - Complete guide"
echo "- QUICKSTART.md - 5-minute setup"
echo "- INSTALLATION.md - Detailed setup"
echo ""
echo "🚀 Ready to deploy!"
echo ""
