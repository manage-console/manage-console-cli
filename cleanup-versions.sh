
#!/bin/bash

PACKAGE_NAME="manage-console-cli"
KEEP_VERSIONS=("1.0.0" "1.0.1" "1.0.2") # الإصدارات المراد الاحتفاظ بها

# 1. Delete excess NPM versions
echo "📦 Deleting excess NPM versions..."
NPM_VERSIONS=$(npm view $PACKAGE_NAME versions --json | jq -r '.[]')

for VERSION in $NPM_VERSIONS; do
  if [[ ! " ${KEEP_VERSIONS[@]} " =~ " ${VERSION} " ]]; then
    echo "🗑️ Deleting version $VERSION from NPM..."
    npm unpublish $PACKAGE_NAME@$VERSION --force
  fi
done

echo "✅ NPM cleanup completed!"

# 2. Delete excess GitHub Releases
echo "📋 Deleting excess GitHub releases..."
GH_VERSIONS=$(gh release list | cut -f1)

for VERSION in $GH_VERSIONS; do
  if [[ ! " ${KEEP_VERSIONS[@]} " =~ " ${VERSION} " ]]; then
    echo "🗑️ Deleting release $VERSION from GitHub..."
    gh release delete $VERSION -y
  fi
done

# 3. Delete drafts on GitHub Releases
echo "📋 Deleting draft GitHub releases..."
GH_DRAFTS=$(gh release list | grep 'Draft' | cut -f1)

for DRAFT in $GH_DRAFTS; do
  echo "🗑️ Deleting draft release $DRAFT from GitHub..."
  gh release delete $DRAFT -y
done

echo "✅ GitHub cleanup completed!"
