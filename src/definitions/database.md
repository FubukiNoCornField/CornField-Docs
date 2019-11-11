# 数据库

在 Router 中初始化数据库。

```js
const {
  userDBConnector,
  cvDBConnector,
  auDBConnector,
  gaDBConnector,
  flDBConnector
} = require('../utils/db')
const userDB = await userDBConnector // 用户数据库
const cvDB = await cvDBConnector // 专栏数据库
const auDB = await auDBConnector // 音频数据库
const gaDB = await gaDBConnector // 图集数据库
const flDB = await flDBConnector // 文件数据库
```

如果 utils 或其他的 modules 有使用数据库的需要，请向下传值。
