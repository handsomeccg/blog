# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
# cd docs/.vuepress/dist

# 复制生成的文件到本地git仓库中
# cp -r docs/.vuepress/dist/* docs/remote/
# cd docs/remote

cd docs/.vuepress/dist
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<784705345@qq.com>/<784705345@qq.com>.github.io.git master

# git push origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:handsomeccg/blog.git master:gh-pages

# 回到上次使用的目录
cd -