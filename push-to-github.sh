#!/bin/bash

# Technology Central - Push to GitHub Script
echo "🚀 Pushing Technology Central to GitHub..."

# Navigate to project directory
cd "/Users/mike/Documents/Cursor Projects/Technology Central"

# Initialize git repository
echo "📁 Initializing git repository..."
git init

# Add all files
echo "📦 Adding all files..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Technology Central website with outcomes-focused copy

- Complete site rewrite with outcomes-focused messaging
- 8 key service areas: Fast Support, Email Setup, Collaboration, etc.
- Updated contact info: mike@technologycentral.net, (661) 714-1593
- Fixed text cutoff issues in hero section
- Cleaned up footer and header navigation
- All buttons now lead to relevant sections"

# Add remote origin
echo "🔗 Adding remote origin..."
git remote add origin https://github.com/MichaelPPeters/TechnologyCentral.git

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo "✅ Successfully pushed to GitHub!"
echo "🌐 Repository: https://github.com/MichaelPPeters/TechnologyCentral"
