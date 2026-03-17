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
#### 联系与支持
如有问题或需要支持，请联系 HG Admin 开发团队。 