# 开发流程规范

## 提交规范

:::tip
Commit 的用法可以是多种多样的。例如，有的开发者喜欢只在功能更新和 bug 修复时 commit 一次，而有的开发者喜欢将 commit 作为“还原点”或“同步器”使用。我们并不强制要求开发者仅在功能更新时进行 commit，只是要求最后一次 commit 总结本次更改的内容并 PR（下文中会提到）。
:::

确保你的工作目录在项目目录（开发主项目）或在 Docs 目录（编写文档）。在 Terminal 中键入：

```sh
npm run commit
```

并回车。之后，按照交互式提示完成 commit。

## 基于 Pull Request 的开发流程

功能修改或 bug 修复的最后一个 commit 提交并推送完毕之后，打开 [New Pull Request](https://github.com/FubukiNoCornField/CornField/compare)页面。选择“master <- &lt;nickname&gt;”并创建新的 Pull Request。
