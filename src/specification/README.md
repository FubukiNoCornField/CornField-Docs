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

## 提交规范

:::tip
Commit 的用法可以是多种多样的。例如，有的开发者喜欢只在功能更新和 bug 修复时 commit 一次，而有的开发者喜欢将 commit 作为“还原点”或“同步器”使用。我们并不强制要求开发者仅在功能更新时进行 commit，只是要求最后一次 commit 总结本次更改的内容并 PR（下一篇文章中会提到）。
:::

确保你的工作目录在项目目录（开发主项目）或在 Docs 目录（编写文档）。在 Terminal 中键入：

```sh
npm run commit
```

并回车。之后，按照交互式提示完成 commit。

## 基于 Pull Request 的开发流程

功能修改或 bug 修复的最后一个 commit 提交并推送完毕之后，打开 [New Pull Request](https://github.com/FubukiNoCornField/CornField/compare)页面。选择“master <- &lt;nickname&gt;”并创建新的 Pull Request。
