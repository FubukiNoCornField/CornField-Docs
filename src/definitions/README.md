# 定义概览

本章内容在描述数据格式的时候统一使用 Graphql Schema（`.gql`）。数据类型索引参考在[这里](https://github.com/FubukiNoCornField/CornField-Docs/blob/master/src/definitions/definitions.graphql)。由于更改将会较为频繁，具体的数据类型将仅会在该 Graphql Schema 中进行注释和更新，本文档站不提供具体数据类型的参考。引用将会以 L&lt;行号&gt;的形式标出。

:::tip
虽然我们使用 Graphql Schema 来描述类型，但我们仍旧使用 REST API，POST 请求的数据结构也是扁平的。因此，请确保您定义的字段不会与其他类型中的已有字段发生冲突。
:::

网站涉及到的“内容”有“专栏（`CV`）”、“图集（`GA`）”、“音频（`AU`）”和“文件（`FL`）”四类，它们均派生自“通用内容类型（`UniversalObject`）”。

## 专栏

ID： `cv` + 数字 ID

前端路由： `/read/cv114514`

## 图集

ID： `ga` + 数字 ID

前端路由： `/gallery/ga114514`

## 音频

ID： `au` + 数字 ID

前端路由： `/audio/au114514`

## 文件

ID： `fl` + 数字 ID

前端路由： `/file/fl114514`

## 用户

**注意：用户类型并不派生自通用内容类型。**

ID： `ul` + 数字 ID

前端路由： `/space/ul114514`
