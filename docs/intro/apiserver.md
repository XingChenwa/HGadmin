# API 接口
> [!NOTE] 🚧 API接口

##### HGadmin-v3资源保护系统接口文档
##### 概述
HG Admin 资源保护系统是一个全面的服务器资源监控和保护解决方案，旨在防止未授权的资源操作、检测作弊行为，并保护服务器的稳定运行。该系统包含多层保护机制，从客户端到服务端的全方位监控，确保服务器资源的安全。
##### TX 相关权限配置
为了确保管理员能够正常使用 TX 相关功能而不会触发权限提示，以下权限已添加到管理员权限组中： 需要将自己  添加 到 对应例如 ESX
或者 qbcore 框架等 的权限组管理员  否则使用 tx 等的功能会被踢出 
```lua
-- TX 相关权限
"txcl:tpToWaypoint",   -- 传送到标记点权限
"txcl:setPlayerMode",  -- 设置玩家模式权限
"txcl:teleport",       -- 传送权限
"txcl:tp",             -- 传送简写权限
"txcl:god",            -- 无敌模式权限
"txcl:godmode",        -- 无敌模式权限
"txcl:invincible",     -- 无敌模式权限
"txcl:noclip",         -- 穿墙模式权限
"txsv:req:healMyself", -- 治疗自己权限
```
这些权限已添加到 `admin`、`superadmin` 和 `mod` 权限组中，确保所有级别的管理员都能正常使用这些功能。
#### 核心组件
##### 1. 资源监控系统
资源监控系统通过心跳检测机制，持续监控服务器上所有注册资源的状态变化，并在检测到未授权的资源停止时采取相应措施。 可自行调用此接口， 为您的资源 做事件保护机制  此功能需要 对有一定编码能力的人 否则不太适合
###### 服务端接口 (server/resource_monitor.lua)
```lua
-- 初始化资源监控
-- 自动扫描并注册所有活跃资源
-- 无需手动调用，系统启动时自动执行
-- 处理客户端请求资源信息
RegisterNetEvent("HGadmin-v3:server:requirePlayerInfo")
-- 处理客户端报告的资源停止事件
RegisterNetEvent("HGadmin-v3:server:requirePlayerInfoMissing")
-- 处理客户端资源状态报告
RegisterNetEvent("HGadmin-v3:server:reportResourceState")
```
###### 客户端接口 (client/resource_monitor_client.lua)
```lua
-- 接收服务器发送的资源列表
RegisterNetEvent("HGadmin-v3:client:sendPlayerInfo")
-- 处理服务器检查请求
RegisterNetEvent("HGadmin-v3:client:checkResourceState")
-- 管理员命令：重新加载资源监控
RegisterNetEvent("HGadmin-v3:client:reloadResourceMonitor")
-- 调试命令：显示当前监控的资源
RegisterCommand("checkresources")
```
##### 2. 作弊检测系统
作弊检测系统监控常见的作弊事件，如传送、无敌模式、穿墙等，并在检测到未授权使用时采取措施。
##### 服务端接口 (server/monitor.lua)
```lua
-- 检查受保护事件的权限
RegisterNetEvent('HGadmin-v3:server:CheckProtectedEvent')
-- 检查玩家模式设置的权限
RegisterNetEvent('HGadmin-v3:server:CheckPlayerMode')
-- 检查传送操作的权限
RegisterNetEvent('HGadmin-v3:server:CheckTeleport')
-- 检查管理员权限
function hasAdminPermission(source)
-- 处理未授权的作弊行为
function handleUnauthorizedCheat(playerId, eventName, cheatType)
```
##### 客户端接口 (client/monitor_client.lua)
```lua
-- 监控受保护事件
-- 包括: 'txcl:tpToWaypoint', 'txcl:setPlayerMode', 'txcl:teleport', 'txcl:tp',
--       'txcl:god', 'txcl:godmode', 'txcl:invincible', 'txcl:noclip'
-- 监控玩家模式设置
RegisterNetEvent('txcl:setPlayerMode')
-- 监控传送到标记点
RegisterNetEvent('txcl:tpToWaypoint')
```

#### 使用指南
##### 1. 资源监控系统
资源监控系统会自动启动并监控所有活跃资源。当检测到资源被停止时，系统会自动识别可能的违规者并采取措施。
**特点：**
- 自动扫描并监控所有活跃资源
- 实时检测资源状态变化
- 识别停止资源的玩家
- 自动封禁违规者
- 服务器通知和日志记录
**配置选项：**
```lua
local resourceMonitorConfig = {
    debugMode = Config.EnableDebug or false,  -- 调试模式
    checkTime = 2000,                         -- 检查间隔时间（毫秒）
    banMode = true,                           -- 是否启用自动封禁
    enableResourceMonitor = true              -- 是否启用资源监控
}
```
##### 2. 作弊检测系统
作弊检测系统监控常见的作弊行为，包括但不限于：
- 传送 (tp, teleport)
- 无敌模式 (god, godmode, invincible)
- 穿墙模式 (noclip)
- 治疗 (heal)
**处理流程：**
1. 客户端检测到受保护事件
2. 向服务端报告事件
3. 服务端验证玩家权限
4. 如果未授权，处理违规行为：
   - 服务器日志记录
   - 全服通知
   - 提交联合封禁
   - 踢出玩家

#### 给车系统 (server/givecar.lua)

给车系统提供了安全可靠的车辆赠送接口，内置权限验证和反作弊保护。其他资源可直接通过事件调用，无需自行处理权限和数据库写入。

##### 服务端事件接口

###### 1. 赠送车辆

向指定玩家赠送一辆车。系统会自动验证管理员权限、生成安全令牌、写入数据库并通知玩家。

```lua
-- 事件名: esx_admin:giveVehicle
-- 参数:
--   targetId (number) - 目标玩家的服务器 ID
--   carModel (string) - 车辆模型名 (如 "adder", "zentorno")
--   plate    (string|nil) - 自定义车牌号，为 nil 则自动生成

-- 调用示例：给 ID 为 1 的玩家一辆 adder，车牌 HGADMIN
TriggerEvent('esx_admin:giveVehicle', 1, "adder", "HGADMIN")
```

> [!WARNING] 权限要求
> 调用此事件的 `source` 必须是拥有管理员权限的玩家，否则会被安全系统拦截并记录。

###### 2. 删除车牌

从数据库中删除指定车牌的车辆记录。

```lua
-- 事件名: esx_admin:delCarPlate
-- 参数:
--   plate (string) - 要删除的车牌号

-- 调用示例：删除车牌为 HGADMIN 的车辆
TriggerEvent('esx_admin:delCarPlate', "HGADMIN")
```

###### 3. 写入车辆数据（内部事件）

将车辆属性写入 `owned_vehicles` 数据库表，通常由客户端生成车辆后回调触发。

```lua
-- 事件名: esx_giveownedcar:setVehicle
-- 参数:
--   vehicleProps (table) - 车辆属性表，包含 model, plate 等字段
--   playerID     (number) - 目标玩家 ID
--   vehicleType  (string) - 车辆类型，默认 "car"

-- 数据库写入格式:
-- INSERT INTO owned_vehicles (owner, plate, vehicle, stored, type)
```

> [!CAUTION] 安全保护
> 此事件内置反作弊机制。如果非管理员玩家尝试触发此事件，系统会：
> - 记录安全违规日志
> - 向全服管理员发送警告通知
> - 自动提交联合封禁
> - 踢出该玩家

##### 权限检查函数

```lua
-- 检查玩家是否有给车权限
-- 支持两种鉴权方式:
--   1. ESX 权限组: Config.AuthorizedRanks 中配置的组 (admin, superadmin 等)
--   2. ACE 权限: giveownedcar.command
function havePermission(_source)
    -- 返回 true/false
end
```

##### 在其他资源中调用示例

```lua
-- 示例: 在你的脚本中给玩家赠送车辆
-- 注意: source 必须是管理员，否则会触发反作弊

-- 方式一: 通过事件触发 (需要管理员 source)
RegisterCommand("mygivevehicle", function(source, args)
    local targetId = tonumber(args[1])
    local model = args[2] or "adder"
    local plate = args[3] or nil
    TriggerEvent('esx_admin:giveVehicle', targetId, model, plate)
end, true) -- true = 仅限 ACE 授权

-- 方式二: 直接写入数据库 (绕过权限检查，仅在服务端内部逻辑使用)
-- 如果你需要在无玩家 source 的情况下给车（如奖励系统），
-- 可以直接操作数据库:
local function GiveVehicleDirect(playerIdentifier, model, plate, vehicleType)
    MySQL.Async.execute([[
        INSERT INTO owned_vehicles (owner, plate, vehicle, stored, type) 
        VALUES (@owner, @plate, @vehicle, @stored, @type)
    ]], {
        ['@owner'] = playerIdentifier,  -- 玩家 identifier
        ['@plate'] = string.upper(plate),
        ['@vehicle'] = json.encode({model = joaat(model), plate = string.upper(plate)}),
        ['@stored'] = 1,
        ['@type'] = vehicleType or 'car'
    }, function(rowsChanged)
        if rowsChanged > 0 then
            print("[GiveCar] 成功给 " .. playerIdentifier .. " 赠送车辆 " .. model)
        end
    end)
end
```

##### 数据库表结构

```sql
-- owned_vehicles 表 (ESX 框架自带)
CREATE TABLE IF NOT EXISTS `owned_vehicles` (
    `owner`   VARCHAR(60)  DEFAULT NULL,     -- 玩家 identifier
    `plate`   VARCHAR(12)  NOT NULL,         -- 车牌号
    `vehicle` LONGTEXT     DEFAULT NULL,     -- 车辆属性 JSON
    `stored`  TINYINT(1)   NOT NULL DEFAULT 0, -- 是否在车库
    `type`    VARCHAR(20)  NOT NULL DEFAULT 'car' -- 车辆类型
);
```

#### 联合封禁系统
资源保护系统与联合封禁系统集成，可以自动提交违规者信息进行封禁。
```lua
-- 提交联合封禁
TriggerEvent("HGadmin-v3:submitJointBan", {
    player_id = playerId,       -- 玩家ID
    reason = "违规原因",         -- 封禁原因
    player_ip = playerIP,       -- 玩家IP
    player_note = "详细说明",    -- 附加说明
    steam_account = licenseId   -- License ID
})
```
#### Kook / Discord 日志系统 (server/webhook.lua)

日志系统支持将服务器事件推送到 **KOOK 频道** 或 **Discord Webhook**，其他资源可以直接通过 exports 调用，方便接入自定义日志。

##### 核心导出函数

###### 1. SendKookLog — 发送日志消息

向配置的 KOOK 频道或 Discord Webhook 发送一条卡片消息日志。

```lua
-- 函数签名
exports['hgadmin']:SendKookLog(logType, title, content, extraFields, customTheme)
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `logType` | string | 是 | 日志类型，决定发送到哪个频道（见下方类型表） |
| `title` | string | 是 | 卡片标题 |
| `content` | string | 是 | 卡片正文内容，支持 kmarkdown 格式 |
| `extraFields` | table/nil | 否 | 额外字段列表，格式: `{ {name="字段名", value="值"}, ... }` |
| `customTheme` | string/nil | 否 | 卡片主题色：`"warning"`(黄) / `"danger"`(红) / `"info"`(蓝) / `"success"`(绿) / `"primary"`(紫) |

**返回值:** `true` 发送成功 / `false` 未发送（未启用或频道未配置）

**调用示例：**

```lua
-- 简单日志
exports['hgadmin']:SendKookLog(
    "Kick",                          -- 日志类型
    "🚫 玩家被踢出",                  -- 标题
    "**管理员:** Admin\n**玩家:** Test\n**原因:** 违规行为",  -- 内容 (kmarkdown)
    nil,                             -- 无额外字段
    "danger"                         -- 红色主题
)

-- 带额外字段的日志
exports['hgadmin']:SendKookLog(
    "GiveVehicle",
    "🚗 赠送车辆",
    "**管理员:** Admin\n**目标玩家:** Player1",
    {
        { name = "车辆模型", value = "adder" },
        { name = "车牌号", value = "HGADMIN" },
        { name = "车辆类型", value = "超级跑车" }
    },
    "success"  -- 绿色主题
)

-- 自定义日志（使用现有类型路由到对应频道）
exports['hgadmin']:SendKookLog(
    "Announcement",
    "📢 系统公告",
    "服务器将于 10 分钟后重启维护",
    nil,
    "warning"
)
```

###### 2. IsKookEnabled — 检查 KOOK 是否启用

```lua
local enabled = exports['hgadmin']:IsKookEnabled()
-- 返回 true/false
```

###### 3. IsKookLogEnabled — 检查指定日志类型是否启用

```lua
local enabled, channelId = exports['hgadmin']:IsKookLogEnabled("Kick")
-- enabled: true/false
-- channelId: KOOK 频道 ID（如果启用）
```

###### 4. IsDiscordEnabled — 检查 Discord 是否启用

```lua
local enabled = exports['hgadmin']:IsDiscordEnabled()
-- 返回 true/false
```

###### 5. GetLogPlatform — 获取当前日志平台

```lua
local platform = exports['hgadmin']:GetLogPlatform()
-- 返回 "kook" / "discord" / "both"
```

##### 日志类型与频道映射

| 日志类型 (logType) | 频道分组 | 说明 |
|-------------------|---------|------|
| `Kick` | AdminActions | 踢出玩家 |
| `Ban` | AdminActions | 封禁玩家 |
| `Unban` | AdminActions | 解封玩家 |
| `Warn` | AdminActions | 警告玩家 |
| `GiveItem` | AdminActions | 赠送物品 |
| `GiveMoney` | AdminActions | 赠送金钱 |
| `GiveVehicle` | AdminActions | 赠送车辆 |
| `Teleport` | AdminActions | 传送 |
| `SetJob` | AdminActions | 设置职业 |
| `SetGang` | AdminActions | 设置帮派 |
| `ClearInventory` | AdminActions | 清空背包 |
| `Revive` | AdminActions | 复活 |
| `Heal` | AdminActions | 治疗 |
| `Kill` | AdminActions | 击杀 |
| `Freeze` | AdminActions | 冻结 |
| `Spectate` | AdminActions | 观察 |
| `Noclip` | AdminActions | 穿墙 |
| `GodMode` | AdminActions | 无敌 |
| `Invisible` | AdminActions | 隐身 |
| `Weather` | ServerEvents | 天气变更 |
| `Time` | ServerEvents | 时间变更 |
| `TimeFreeze` | ServerEvents | 时间冻结 |
| `Announcement` | ServerEvents | 公告 |
| `ResourceStart` | ServerEvents | 资源启动 |
| `ResourceStop` | ServerEvents | 资源停止 |
| `Join` | PlayerConnect | 玩家加入 |
| `Leave` | PlayerConnect | 玩家离开 |
| `JointBanBlock` | PlayerConnect | 联合封禁拦截 |
| `LocalBan` | BanLogs | 本地封禁 |
| `LocalUnban` | BanLogs | 本地解封 |
| `JointBan` | BanLogs | 联合封禁 |
| `JointBanWhitelist` | BanLogs | 联合封禁白名单 |
| `AdminScreenshot` | Screenshots | 管理员截图 |

##### 在其他资源中使用示例

```lua
-- 示例: 在你的脚本中接入 HGAdmin 日志系统

-- 封装一个安全调用函数，防止 hgadmin 未启动时报错
local function SendLog(logType, title, content, extraFields, customTheme)
    if GetResourceState('hgadmin') ~= 'started' then return false end
    local success, result = pcall(function()
        return exports['hgadmin']:SendKookLog(logType, title, content, extraFields, customTheme)
    end)
    if not success then
        print("[MyScript] Kook 日志发送失败: " .. tostring(result))
        return false
    end
    return result
end

-- 使用示例: 玩家购买商品时发送日志
RegisterServerEvent('myshop:itemPurchased')
AddEventHandler('myshop:itemPurchased', function(itemName, price)
    local src = source
    local playerName = GetPlayerName(src)
    SendLog(
        "GiveItem",
        "🛒 商品购买",
        string.format("**玩家:** %s (ID: %s)\n**商品:** %s\n**价格:** $%d", 
            playerName, src, itemName, price),
        {
            { name = "购买时间", value = os.date("%Y-%m-%d %H:%M:%S") }
        },
        "info"
    )
end)

-- 使用示例: 检查日志系统状态
if exports['hgadmin']:IsKookEnabled() then
    print("KOOK 日志已启用，平台: " .. exports['hgadmin']:GetLogPlatform())
end
```

> [!TIP] 提示
> `content` 参数支持 KOOK 的 kmarkdown 格式，可以使用 `**加粗**`、`~~删除线~~`、`[链接](url)` 等语法。Discord 则使用标准 Markdown 格式。

#### 联系与支持
如有问题或需要支持，请联系 HG Admin 开发团队。