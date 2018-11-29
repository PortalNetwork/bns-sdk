git status
echo "Version update"
npm version patch
echo "Commit"
npm run build
git add lib/* -f
git commit --amend -m  "[ci skip] version changed"
git remote -v
echo "Push"
git push https://${GIT_ACCOUNT}:${GIT_PW}@github.com/PortalNetwork/bns-sdk.git master