echo "Getting lastest updates..."
git pull origin master
echo "Pushing practicum..."
git add .
git commit -m "Updated"
git push origin master
