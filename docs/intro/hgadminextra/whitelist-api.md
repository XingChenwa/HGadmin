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

## Node.js 调用示例

### 安装依赖

```bash
npm install axios
```

### 基础用法

```javascript
const axios = require('axios');

const BASE_URL = 'http://你的服务器IP:30120/hgadmin_extra';
const TOKEN = '你的安全密钥';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// 健康检查
async function healthCheck() {
  const { data } = await axios.get(`${BASE_URL}/api/health`);
  console.log(data);
}

// 获取待审核列表
async function getPending() {
  const { data } = await api.get('/api/whitelist/pending');
  console.log(data);
}

// 批准白名单
async function approve(requestId) {
  const { data } = await api.post('/api/whitelist/approve', {
    request_id: requestId
  });
  console.log(data);
}

// 驳回白名单
async function reject(requestId) {
  const { data } = await api.post('/api/whitelist/reject', {
    request_id: requestId
  });
  console.log(data);
}

// 搜索白名单
async function search(query) {
  const { data } = await api.get(`/api/whitelist/search?q=${query}`);
  console.log(data);
}

// 使用示例
(async () => {
  await healthCheck();
  await getPending();
  await approve('ABC123');
})();
```

---

## C# 调用示例

```csharp
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

class WhitelistAPI
{
    private readonly HttpClient _client;
    private readonly string _baseUrl;

    public WhitelistAPI(string baseUrl, string token)
    {
        _baseUrl = baseUrl.TrimEnd('/');
        _client = new HttpClient();
        _client.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);
        _client.Timeout = TimeSpan.FromSeconds(10);
    }

    // 健康检查
    public async Task<JsonElement> HealthCheckAsync()
    {
        var response = await _client.GetAsync($"{_baseUrl}/api/health");
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<JsonElement>(json);
    }

    // 获取待审核列表
    public async Task<JsonElement> GetPendingAsync()
    {
        var response = await _client.GetAsync($"{_baseUrl}/api/whitelist/pending");
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<JsonElement>(json);
    }

    // 批准白名单
    public async Task<JsonElement> ApproveAsync(string requestId)
    {
        var content = new StringContent(
            JsonSerializer.Serialize(new { request_id = requestId }),
            Encoding.UTF8, "application/json");
        var response = await _client.PostAsync($"{_baseUrl}/api/whitelist/approve", content);
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<JsonElement>(json);
    }

    // 驳回白名单
    public async Task<JsonElement> RejectAsync(string requestId)
    {
        var content = new StringContent(
            JsonSerializer.Serialize(new { request_id = requestId }),
            Encoding.UTF8, "application/json");
        var response = await _client.PostAsync($"{_baseUrl}/api/whitelist/reject", content);
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<JsonElement>(json);
    }

    // 搜索白名单
    public async Task<JsonElement> SearchAsync(string query)
    {
        var response = await _client.GetAsync($"{_baseUrl}/api/whitelist/search?q={query}");
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<JsonElement>(json);
    }
}

// 使用示例
class Program
{
    static async Task Main(string[] args)
    {
        var api = new WhitelistAPI("http://你的服务器IP:30120/hgadmin_extra", "你的安全密钥");

        var health = await api.HealthCheckAsync();
        Console.WriteLine(health);

        var pending = await api.GetPendingAsync();
        Console.WriteLine(pending);

        var result = await api.ApproveAsync("ABC123");
        Console.WriteLine(result);
    }
}
```

---

## Java 调用示例

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class WhitelistAPI {
    private final String baseUrl;
    private final String token;
    private final HttpClient client;

    public WhitelistAPI(String baseUrl, String token) {
        this.baseUrl = baseUrl.replaceAll("/$", "");
        this.token = token;
        this.client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();
    }

    // GET 请求
    private String get(String endpoint) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + endpoint))
            .header("Authorization", "Bearer " + token)
            .GET()
            .build();
        HttpResponse<String> response = client.send(request,
            HttpResponse.BodyHandlers.ofString());
        return response.body();
    }

    // POST 请求
    private String post(String endpoint, String jsonBody) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + endpoint))
            .header("Authorization", "Bearer " + token)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
            .build();
        HttpResponse<String> response = client.send(request,
            HttpResponse.BodyHandlers.ofString());
        return response.body();
    }

    // 健康检查
    public String healthCheck() throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/api/health"))
            .GET()
            .build();
        HttpResponse<String> response = client.send(request,
            HttpResponse.BodyHandlers.ofString());
        return response.body();
    }

    // 获取待审核列表
    public String getPending() throws Exception {
        return get("/api/whitelist/pending");
    }

    // 批准白名单
    public String approve(String requestId) throws Exception {
        return post("/api/whitelist/approve",
            "{\"request_id\":\"" + requestId + "\"}");
    }

    // 驳回白名单
    public String reject(String requestId) throws Exception {
        return post("/api/whitelist/reject",
            "{\"request_id\":\"" + requestId + "\"}");
    }

    // 搜索白名单
    public String search(String query) throws Exception {
        return get("/api/whitelist/search?q=" + query);
    }

    // 使用示例
    public static void main(String[] args) throws Exception {
        WhitelistAPI api = new WhitelistAPI(
            "http://你的服务器IP:30120/hgadmin_extra", "你的安全密钥");

        System.out.println(api.healthCheck());
        System.out.println(api.getPending());
        System.out.println(api.approve("ABC123"));
    }
}
```

---

## Rust 调用示例

在 `Cargo.toml` 中添加依赖：

```toml
[dependencies]
reqwest = { version = "0.12", features = ["json"] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
tokio = { version = "1", features = ["full"] }
```

```rust
use reqwest::Client;
use serde_json::{json, Value};

struct WhitelistAPI {
    base_url: String,
    token: String,
    client: Client,
}

impl WhitelistAPI {
    fn new(base_url: &str, token: &str) -> Self {
        Self {
            base_url: base_url.trim_end_matches('/').to_string(),
            token: token.to_string(),
            client: Client::new(),
        }
    }

    // 健康检查
    async fn health_check(&self) -> Result<Value, reqwest::Error> {
        let resp = self.client
            .get(format!("{}/api/health", self.base_url))
            .send()
            .await?
            .json::<Value>()
            .await?;
        Ok(resp)
    }

    // 获取待审核列表
    async fn get_pending(&self) -> Result<Value, reqwest::Error> {
        let resp = self.client
            .get(format!("{}/api/whitelist/pending", self.base_url))
            .header("Authorization", format!("Bearer {}", self.token))
            .send()
            .await?
            .json::<Value>()
            .await?;
        Ok(resp)
    }

    // 批准白名单
    async fn approve(&self, request_id: &str) -> Result<Value, reqwest::Error> {
        let resp = self.client
            .post(format!("{}/api/whitelist/approve", self.base_url))
            .header("Authorization", format!("Bearer {}", self.token))
            .json(&json!({"request_id": request_id}))
            .send()
            .await?
            .json::<Value>()
            .await?;
        Ok(resp)
    }

    // 驳回白名单
    async fn reject(&self, request_id: &str) -> Result<Value, reqwest::Error> {
        let resp = self.client
            .post(format!("{}/api/whitelist/reject", self.base_url))
            .header("Authorization", format!("Bearer {}", self.token))
            .json(&json!({"request_id": request_id}))
            .send()
            .await?
            .json::<Value>()
            .await?;
        Ok(resp)
    }

    // 搜索白名单
    async fn search(&self, query: &str) -> Result<Value, reqwest::Error> {
        let resp = self.client
            .get(format!("{}/api/whitelist/search?q={}", self.base_url, query))
            .header("Authorization", format!("Bearer {}", self.token))
            .send()
            .await?
            .json::<Value>()
            .await?;
        Ok(resp)
    }
}

#[tokio::main]
async fn main() {
    let api = WhitelistAPI::new(
        "http://你的服务器IP:30120/hgadmin_extra",
        "你的安全密钥",
    );

    match api.health_check().await {
        Ok(v) => println!("健康检查: {}", v),
        Err(e) => eprintln!("错误: {}", e),
    }

    match api.get_pending().await {
        Ok(v) => println!("待审核: {}", v),
        Err(e) => eprintln!("错误: {}", e),
    }

    match api.approve("ABC123").await {
        Ok(v) => println!("批准结果: {}", v),
        Err(e) => eprintln!("错误: {}", e),
    }
}
```

---

## C++ 调用示例

使用 [libcurl](https://curl.se/libcurl/) 和 [nlohmann/json](https://github.com/nlohmann/json)：

```cpp
#include <iostream>
#include <string>
#include <curl/curl.h>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

// libcurl 写回调
static size_t WriteCallback(void* contents, size_t size, size_t nmemb,
                            std::string* output) {
    size_t totalSize = size * nmemb;
    output->append((char*)contents, totalSize);
    return totalSize;
}

class WhitelistAPI {
private:
    std::string base_url;
    std::string token;

    // GET 请求
    json doGet(const std::string& endpoint) {
        CURL* curl = curl_easy_init();
        std::string response;
        std::string url = base_url + endpoint;

        struct curl_slist* headers = nullptr;
        std::string auth = "Authorization: Bearer " + token;
        headers = curl_slist_append(headers, auth.c_str());

        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 10L);

        curl_easy_perform(curl);
        curl_slist_free_all(headers);
        curl_easy_cleanup(curl);

        return json::parse(response);
    }

    // POST 请求
    json doPost(const std::string& endpoint, const json& body) {
        CURL* curl = curl_easy_init();
        std::string response;
        std::string url = base_url + endpoint;
        std::string bodyStr = body.dump();

        struct curl_slist* headers = nullptr;
        std::string auth = "Authorization: Bearer " + token;
        headers = curl_slist_append(headers, auth.c_str());
        headers = curl_slist_append(headers, "Content-Type: application/json");

        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, bodyStr.c_str());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 10L);

        curl_easy_perform(curl);
        curl_slist_free_all(headers);
        curl_easy_cleanup(curl);

        return json::parse(response);
    }

public:
    WhitelistAPI(const std::string& url, const std::string& tok)
        : base_url(url), token(tok) {
        curl_global_init(CURL_GLOBAL_DEFAULT);
    }

    ~WhitelistAPI() {
        curl_global_cleanup();
    }

    // 健康检查
    json healthCheck() {
        return doGet("/api/health");
    }

    // 获取待审核列表
    json getPending() {
        return doGet("/api/whitelist/pending");
    }

    // 批准白名单
    json approve(const std::string& requestId) {
        return doPost("/api/whitelist/approve",
                      {{"request_id", requestId}});
    }

    // 驳回白名单
    json reject(const std::string& requestId) {
        return doPost("/api/whitelist/reject",
                      {{"request_id", requestId}});
    }

    // 搜索白名单
    json search(const std::string& query) {
        return doGet("/api/whitelist/search?q=" + query);
    }
};

int main() {
    WhitelistAPI api("http://你的服务器IP:30120/hgadmin_extra", "你的安全密钥");

    std::cout << "健康检查: " << api.healthCheck().dump(2) << std::endl;
    std::cout << "待审核: " << api.getPending().dump(2) << std::endl;
    std::cout << "批准: " << api.approve("ABC123").dump(2) << std::endl;

    return 0;
}
```

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
