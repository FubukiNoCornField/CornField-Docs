# 开发规范

## 搭建本地开发环境

:::tip
本文档站中的所有命令请在 Command Prompt（on Windows）或 Terminal（on \*NIX）中使用。
:::

首先，将 CornField 的主代码库 clone 到本地。

```sh
git clone https://github.com/FubukiNoCornField/CornField.git
```

如果有编辑文档的需要的话则需拉取子模块：

```sh
git submodule update --remote
```

使用你的名字或昵称新建一个新的分支并签出。

```sh
git branch <nickname> && git checkout <nickname>
```

任何仅针对文档的更新只需提交更改并推送到 [CornField-Docs](https://github.com/FubukiNoCornField/CornField-Docs)。该代码库已经启用了 Travis CI。

在项目的根目录下以及`packages`文件夹下的各个目录中分别执行`npm i`。

最后一步，在终端中键入 `npm install -g git-cz commitizen` 并回车。 `git-cz` 是一个自动格式化提交信息的 CLI 工具。

现在，你的开发环境以及准备就绪。推荐使用 [VS Code](https://code.visualstudio.com/) 进行开发。

## 搭建本地数据库环境

在本地下载 `MySQL` 和 `Redis` 并安装。确保服务启动且监听默认端口。

## Docker 包生成及推送

我们使用 GitHub Actions 进行 Docker Image 的生成及推送。

## 线上部署

```sh
# 如果旧的 Images 已经存在则需要先行移除
docker rmi afanyiyu/cornfield-frontend || true
docker rmi afanyiyu/cornfield-backend || true

docker run -d -p 2170:2170 --env-file /cornfield/env --name cornfield-frontend --rm afanyiyu/cornfield-frontend

docker run -d -p 2171:2171 --env-file /cornfield/env --name cornfield-backend --rm afanyiyu/cornfield-backend
```
