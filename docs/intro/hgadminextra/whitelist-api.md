# 白名单 HTTP API 接口文档

> [!WARNING] 💰 付费功能
> 白名单外部 HTTP API 为**付费功能**，需要联系 **小哈** 单独购买（¥50），购买后会为您开通 API 调用权限。未购买的用户无法使用此 API 功能。

> [!NOTE] 🔗 外部 HTTP API
> HGadmin Extra 提供 HTTP API 接口，允许外部应用（如 KOOK 机器人、Web 后台等）通过网络请求管理白名单系统。

## 基础信息

- **Base URL:** `http://你的服务器IP:30120/hgadmin_extra`
- **认证方式:** Bearer Token
- **数据格式:** JSON

## 配置

在 `server.cfg` 中设置 API Token：

```cfg
set hgadmin_api_token "你的安全密钥"
```

所有需要认证的接口都需要在请求头中携带 Token：

```
Authorization: Bearer 你的安全密钥
```

---

## 接口列表

### 1. 健康检查

检查 API 服务是否正常运行，**无需认证**。

- **URL:** `/api/health`
- **方法:** `GET`
- **认证:** 不需要

**请求示例：**
```bash
curl http://127.0.0.1:30120/hgadmin_extra/api/health
```

**响应示例：**
```json
{
  "success": true,
  "service": "hgadmin_extra",
  "version": "2.1"
}
```

---

### 2. 获取白名单列表

获取所有白名单数据。

- **URL:** `/api/whitelist`
- **方法:** `GET`
- **认证:** 需要

**请求示例：**
```bash
curl -H "Authorization: Bearer 你的Token" \
  http://127.0.0.1:30120/hgadmin_extra/api/whitelist
```

**响应示例：**
```json
{
  "success": true,
  "data": {
    "license:xxxxxxxx": {
      "id": 1,
      "code": "ABC123",
      "name": "玩家昵称",
      "is_approve": 1,
      "license": "license:xxxxxxxx",
      "create_time": "2024-01-01 12:00:00"
    }
  }
}
```

---

### 3. 获取待审核列表

获取所有未审核（`is_approve = 0`）的白名单申请。

- **URL:** `/api/whitelist/pending`
- **方法:** `GET`
- **认证:** 需要

**请求示例：**
```bash
curl -H "Authorization: Bearer 你的Token" \
  http://127.0.0.1:30120/hgadmin_extra/api/whitelist/pending
```

**响应示例：**
```json
{
  "success": true,
  "data": {
    "license:yyyyyyyy": {
      "id": 2,
      "code": "XYZ789",
      "name": "新玩家",
      "is_approve": 0,
      "license": "license:yyyyyyyy",
      "create_time": "2024-01-02 15:30:00"
    }
  }
}
```

---

### 4. 搜索白名单

通过识别码、玩家名或 license 搜索白名单记录。

- **URL:** `/api/whitelist/search?q=搜索关键词`
- **方法:** `GET`
- **认证:** 需要

| 参数 | 位置 | 类型 | 必填 | 说明 |
|------|------|------|------|------|
| `q` | Query | string | 是 | 搜索关键词 |

**请求示例：**
```bash
curl -H "Authorization: Bearer 你的Token" \
  "http://127.0.0.1:30120/hgadmin_extra/api/whitelist/search?q=ABC123"
```

**响应示例：**
```json
{
  "success": true,
  "data": {
    "license:xxxxxxxx": {
      "id": 1,
      "code": "ABC123",
      "name": "玩家昵称",
      "is_approve": 1,
      "license": "license:xxxxxxxx"
    }
  }
}
```

---

### 5. 批准白名单

通过识别码或 license 批准白名单申请。

- **URL:** `/api/whitelist/approve`
- **方法:** `POST`
- **认证:** 需要

| 参数 | 位置 | 类型 | 必填 | 说明 |
|------|------|------|------|------|
| `request_id` | Body | string | 二选一 | 白名单识别码 |
| `license` | Body | string | 二选一 | 玩家 license |

**请求示例：**
```bash
# 通过识别码批准
curl -X POST \
  -H "Authorization: Bearer 你的Token" \
  -H "Content-Type: application/json" \
  -d '{"request_id": "ABC123"}' \
  http://127.0.0.1:30120/hgadmin_extra/api/whitelist/approve

# 通过 license 批准
curl -X POST \
  -H "Authorization: Bearer 你的Token" \
  -H "Content-Type: application/json" \
  -d '{"license": "license:xxxxxxxx"}' \
  http://127.0.0.1:30120/hgadmin_extra/api/whitelist/approve
```

**响应示例：**
```json
{
  "success": true,
  "license": "license:xxxxxxxx",
  "is_approve": 1
}
```

---

### 6. 驳回白名单

通过识别码或 license 驳回白名单申请。

- **URL:** `/api/whitelist/reject`
- **方法:** `POST`
- **认证:** 需要

| 参数 | 位置 | 类型 | 必填 | 说明 |
|------|------|------|------|------|
| `request_id` | Body | string | 二选一 | 白名单识别码 |
| `license` | Body | string | 二选一 | 玩家 license |

**请求示例：**
```bash
curl -X POST \
  -H "Authorization: Bearer 你的Token" \
  -H "Content-Type: application/json" \
  -d '{"request_id": "ABC123"}' \
  http://127.0.0.1:30120/hgadmin_extra/api/whitelist/reject
```

**响应示例：**
```json
{
  "success": true,
  "license": "license:xxxxxxxx",
  "is_approve": 0
}
```

---

### 7. 直接更新白名单状态

直接通过 license 设置白名单状态。

- **URL:** `/api/whitelist/update`
- **方法:** `POST`
- **认证:** 需要

| 参数 | 位置 | 类型 | 必填 | 说明 |
|------|------|------|------|------|
| `license` | Body | string | 是 | 玩家 license |
| `is_approve` | Body | boolean | 是 | `true` 通过 / `false` 驳回 |

**请求示例：**
```bash
curl -X POST \
  -H "Authorization: Bearer 你的Token" \
  -H "Content-Type: application/json" \
  -d '{"license": "license:xxxxxxxx", "is_approve": true}' \
  http://127.0.0.1:30120/hgadmin_extra/api/whitelist/update
```

**响应示例：**
```json
{
  "success": true,
  "license": "license:xxxxxxxx",
  "is_approve": 1
}
```

---

## 错误码

| 状态码 | 说明 |
|--------|------|
| `200` | 请求成功 |
| `400` | 请求参数缺失或格式错误 |
| `401` | 未授权（Token 错误或缺失） |
| `404` | 未找到对应玩家 |
| `405` | 请求方法不允许 |

**错误响应格式：**
```json
{
  "success": false,
  "error": "错误描述"
}
```

---

## Python 调用示例

### 安装依赖

```bash
pip install requests
```

### 基础用法

```python
import requests

BASE_URL = "http://你的服务器IP:30120/hgadmin_extra"
TOKEN = "你的安全密钥"

headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json"
}

# 健康检查
r = requests.get(f"{BASE_URL}/api/health")
print(r.json())

# 获取待审核列表
r = requests.get(f"{BASE_URL}/api/whitelist/pending", headers=headers)
print(r.json())

# 通过识别码批准白名单
r = requests.post(
    f"{BASE_URL}/api/whitelist/approve",
    headers=headers,
    json={"request_id": "ABC123"}
)
print(r.json())

# 驳回白名单
r = requests.post(
    f"{BASE_URL}/api/whitelist/reject",
    headers=headers,
    json={"request_id": "ABC123"}
)
print(r.json())

# 搜索白名单
r = requests.get(
    f"{BASE_URL}/api/whitelist/search?q=ABC123",
    headers=headers
)
print(r.json())
```

### KOOK 机器人集成

如需将白名单审核集成到 KOOK 机器人，请参考 `hgadmin_extra/examples/whitelist_api_example.py` 中的完整示例代码。

---

## Lua Exports（插件内部调用）

除了 HTTP API，白名单系统也支持在其他 FiveM 资源中通过 exports 调用：

```lua
-- 获取白名单列表
local whitelist = exports['hgadmin_extra']:GetWhiteList()

-- 更新玩家白名单状态
local success = exports['hgadmin_extra']:UpdatePlayerWhiteList(license, is_approve)

-- 生成白名单页面 HTML
local html = exports['hgadmin_extra']:GenerateWhitelistPage(requestId)
```
