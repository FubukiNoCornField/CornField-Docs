# 分页

为简单起见，分页采用 `页数 + 页容量` 模型。

```graphql
type Pagination {
  page: Int!
  capacity: Int!
}
```
