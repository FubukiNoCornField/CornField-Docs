# 后端路由文档

后端所有路由全部遵循 `/<模块>/<操作>`的格式。Request 和 Payload 统一使用 JSON。

## Payload 通用格式

```json
{
  "code": 0,
  "message": "success",
  "data": {}
}
```
