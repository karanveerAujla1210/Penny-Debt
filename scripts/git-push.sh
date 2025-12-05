#!/bin/bash

echo "========================================"
echo " Pushing Penny-Debt to GitHub"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed"
    exit 1
fi

echo "[1/5] Checking current branch..."
git branch --show-current
echo ""

echo "[2/5] Adding all changes..."
git add .
echo ""

echo "[3/5] Checking status..."
git status
echo ""

echo "[4/5] Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_msg
commit_msg=${commit_msg:-"Update: Push all changes to GitHub"}

git commit -m "$commit_msg"
echo ""

echo "[5/5] Pushing to GitHub..."
git push origin main
echo ""

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo " Successfully pushed to GitHub!"
    echo "========================================"
    echo ""
    echo "Repository: https://github.com/karanveerAujla1210/Penny-Debt"
    echo ""
else
    echo ""
    echo "========================================"
    echo " Push FAILED!"
    echo "========================================"
    echo ""
    echo "Possible reasons:"
    echo "- Authentication required"
    echo "- Network issues"
    echo "- Branch conflicts"
    echo ""
    echo "Try: git push origin main --force (use with caution!)"
    echo ""
    exit 1
fi
