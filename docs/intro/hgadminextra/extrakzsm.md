# 如何访问我们的 web 管理员菜单

### 配置说明
1. 如未开通 默认设置 `50120` 端口 需 联系您机房 客服 开通 50120 端口 否则外网是无法访问的 

2. 不要 使用默认密码 以及账户 权限 事件 一定要认真分配 以及 一些事件 不要分配给 不重要的管理员  能明白？ 

本地 `http://localhost:50120` 使用这个访问

外网 `http://您的IP:50120`      切记本地跟外网都是需要开设`50120`端口的，否则是无法访问的

 新增管理员白名单功能，游戏内，外网，都可以审核处理白名单，以及优化bug， 处理一些细节上的东西，
 我们的官方文档


您的账号在哪里 修改？  请您 前往 我们的 `HGadmin-v3_extra\server\xiaoha.lua` 进行 配置 账户相关权限事宜 

::: details config.lua配置配置文件
```lua
xiaoha = {}

-- ============================================
-- Web 管理员权限分级系统
-- H&G Admin Cloud Management Permission System
-- ============================================
---- !!!!!!!!!!!!!!!! 重点  代码编辑功能的权限 一定要谨慎分配 !!!!!!!!!!!!!!!!!!!!!
-- ============================================
-- 所有可用权限列表 (All Available Permissions)
-- ============================================
xiaoha.AllPermissions = {
    -- ============================================================
    -- 基础权限 (Basic Permissions)
    -- ============================================================
    "panel.access",              -- 访问管理面板
    "panel.refresh",             -- 刷新玩家列表
    
    -- ============================================================
    -- 玩家查看权限 (Player View Permissions)
    -- ============================================================
    "player.view",               -- 查看玩家信息
    "player.viewOffline",        -- 查看离线玩家
    "player.characters",         -- 查看角色列表
    
    -- ============================================================
    -- 玩家管理权限 (Player Management Permissions)
    -- ============================================================
    "player.kick",               -- 踢出玩家
    "player.ban",                -- 封禁玩家 (本地)
    "player.warn",               -- 警告玩家
    "player.freeze",             -- 冻结玩家
    "player.cuff",               -- 手铐玩家
    "player.kill",               -- 击杀玩家
    "player.revive",             -- 复活玩家
    "player.heal",               -- 治疗/恢复玩家 (feed)
    "player.spectate",           -- 观察玩家
    "player.screenshot",         -- 截图玩家
    "player.save",               -- 保存玩家数据
    
    -- ============================================================
    -- 玩家传送权限 (Player Teleport Permissions)
    -- ============================================================
    "player.teleport",           -- 传送玩家 (通用)
    "player.teleport.toPlayer",  -- 传送到玩家
    "player.teleport.toMe",      -- 传送玩家到自己
    "player.teleport.toCoords",  -- 传送到坐标/标记点
    "player.teleport.sendBack",  -- 传送回上个位置
    "player.teleport.summonAll", -- 召集所有玩家
    
    -- ============================================================
    -- 玩家外观权限 (Player Appearance Permissions)
    -- ============================================================
    "player.setModel",           -- 设置玩家模型
    "player.clothing",           -- 打开换装菜单
    
    -- ============================================================
    -- 玩家库存权限 (Player Inventory Permissions)
    -- ============================================================
    "player.inventory.view",     -- 查看库存 (openinv)
    "player.inventory.clear",    -- 清空库存 (clearinv)
    "player.inventory.give",     -- 给予物品 (giveitem)
    "player.inventory.remove",   -- 移除物品 (removeitem)
    
    -- ============================================================
    -- 角色管理权限 (Character Management Permissions)
    -- ============================================================
    "character.delete",          -- 删除角色
    "character.rename",          -- 重命名角色
    
    -- ============================================================
    -- 车辆权限 (Vehicle Permissions)
    -- ============================================================
    "vehicle.view",              -- 查看车辆列表
    "vehicle.spawn",             -- 刷车 (givecar)
    "vehicle.save",              -- 保存车辆到车库 (savecar)
    "vehicle.delete",            -- 删除车辆 (deletecar, DeletePlayerVehicle)
    "vehicle.repair",            -- 修车 (repaircar)
    "vehicle.trunk",             -- 查看车辆储物
    
    -- ============================================================
    -- 经济权限 (Economy Permissions)
    -- ============================================================
    "economy.view",              -- 查看经济数据/排行榜
    "economy.giveCash",          -- 给予现金 (givecash, givemoney)
    "economy.removeCash",        -- 移除现金 (removecash, removemoney)
    "economy.giveBank",          -- 给予银行存款 (givebank)
    "economy.removeBank",        -- 移除银行存款 (removebank)
    
    -- ============================================================
    -- 职业权限 (Job Permissions)
    -- ============================================================
    "job.view",                  -- 查看职业信息
    "job.set",                   -- 设置职业 (setjob)
    "job.remove",                -- 移除职业 (removejob)
    "job.setGrade",              -- 设置职业等级
    "job.fire",                  -- 解雇员工
    
    -- ============================================================
    -- 帮派权限 (Gang Permissions)
    -- ============================================================
    "gang.view",                 -- 查看帮派信息
    "gang.set",                  -- 设置帮派 (setgang)
    "gang.remove",               -- 移除帮派 (removegang)
    "gang.setGrade",             -- 设置帮派等级
    "gang.setMember",            -- 设置帮派成员
    
    -- ============================================================
    -- 封禁管理权限 (Ban Management Permissions)
    -- ============================================================
    "ban.view",                  -- 查看封禁列表
    "ban.unban",                 -- 解除封禁
    "ban.jointBan",              -- 联合封禁
    "ban.jointBanView",          -- 查看联合封禁列表
    "ban.submitRequest",         -- 提交封禁请求
    "ban.validateRequest",       -- 验证封禁请求
    "ban.batchOperations",       -- 批量封禁操作
    
    -- ============================================================
    -- 白名单权限 (Whitelist Permissions)
    -- ============================================================
    "whitelist.view",            -- 查看白名单
    "whitelist.update",          -- 更新白名单
    
    -- ============================================================
    -- 服务器资源权限 (Server Resource Permissions)
    -- ============================================================
    "server.resources.view",     -- 查看资源列表
    "server.resources.start",    -- 启动资源 (startresource)
    "server.resources.stop",     -- 停止资源 (stopresource)
    "server.resources.restart",  -- 重启资源 (restartresource)
    
    -- ============================================================
    -- 控制台权限 (Console Permissions)
    -- ============================================================
    "console.view",              -- 查看控制台 (liveConsole:getData, liveConsole:subscribe)
    "console.execute",           -- 执行控制台命令 (liveConsole:command)
    
    -- ============================================================
    -- 代码编辑器权限 (Code Editor Permissions)
    -- ============================================================
    "editor.view",               -- 查看文件
    "editor.edit",               -- 编辑文件
    "editor.create",             -- 创建文件
    
    -- ============================================================
    -- 地图权限 (Map Permissions)
    -- ============================================================
    "map.view",                  -- 查看地图 (map:getPlayers)
    "map.waypoint",              -- 设置地图标记 (map:setWaypoint)
    "map.teleport",              -- 地图传送 (teleport:toPlayer)
    
    -- ============================================================
    -- 日志权限 (Log Permissions)
    -- ============================================================
    "logs.view",                 -- 查看日志 (LoadLogs, LoadPlayerLogs)
    "logs.highRisk",             -- 查看高危日志 (LoadHighRiskLogs)
    
    -- ============================================================
    -- 举报权限 (Report Permissions)
    -- ============================================================
    "reports.view",              -- 查看举报 (LoadReportsInfo)
    "reports.handle",            -- 处理举报
    
    -- ============================================================
    -- 公告/聊天权限 (Announcement/Chat Permissions)
    -- ============================================================
    "chat.adminChat",            -- 管理员聊天 (AdminChatSend, LoadAdminChat)
    "server.announce",           -- 发送公告 (announce)
    
    -- ============================================================
    -- 员工管理权限 (Staff Management Permissions)
    -- ============================================================
    "staff.view",                -- 查看员工 (staff:getGroups, staff:getMembers)
    "staff.manage",              -- 管理员工 (staff:updateGroup, staff:updateMember)
    "staff.createGroup",         -- 创建权限组 (staff:createGroup)
    "staff.deleteGroup",         -- 删除权限组 (staff:deleteGroup)
    "staff.createMember",        -- 添加员工 (staff:createMember)
    "staff.deleteMember",        -- 删除员工 (staff:deleteMember)
    
    -- ============================================================
    -- Kook机器人权限 (Kook Bot Permissions)
    -- ============================================================
    "kook.view",                 -- 查看Kook配置 (kook:getConfig, kook:getJobs)
    "kook.edit",                 -- 编辑Kook配置 (kook:saveConfig)
    "kook.test",                 -- 测试Kook连接 (kook:testConnection)
    
    -- ============================================================
    -- 服务器指标权限 (Server Metrics Permissions)
    -- ============================================================
    "server.metrics",            -- 查看服务器指标 (LoadServerMetrics)
}

-- ============================================
-- 权限组定义 (Role Definitions)
-- ============================================
xiaoha.Roles = {
    -- ===== 超级管理员 - 拥有所有权限 =====
    ["superadmin"] = {
        name = "超级管理员",
        priority = 100,
        permissions = {"*"},  -- * 代表所有权限
    },
    
    -- ===== 高级管理员 - 拥有大部分权限 =====
    ["admin"] = {
        name = "高级管理员",
        priority = 80,
        permissions = {
            -- 基础
            "panel.access", "panel.refresh",
            -- 玩家查看
            "player.view", "player.viewOffline", "player.characters",
            -- 玩家管理
            "player.kick", "player.ban", "player.warn", "player.freeze",
            "player.cuff", "player.kill", "player.revive", "player.heal",
            "player.spectate", "player.screenshot", "player.save",
            -- 玩家传送
            "player.teleport", "player.teleport.toPlayer", "player.teleport.toMe",
            "player.teleport.toCoords", "player.teleport.sendBack", "player.teleport.summonAll",
            -- 玩家外观
            "player.setModel", "player.clothing",
            -- 库存
            "player.inventory.view", "player.inventory.clear", 
            "player.inventory.give", "player.inventory.remove",
            -- 角色
            "character.delete", "character.rename",
            -- 车辆
            "vehicle.view", "vehicle.spawn", "vehicle.save", 
            "vehicle.delete", "vehicle.repair", "vehicle.trunk",
            -- 经济
            "economy.view", "economy.giveCash", "economy.removeCash",
            "economy.giveBank", "economy.removeBank",
            -- 职业
            "job.view", "job.set", "job.remove", "job.setGrade", "job.fire",
            -- 帮派
            "gang.view", "gang.set", "gang.remove", "gang.setGrade", "gang.setMember",
            -- 封禁
            "ban.view", "ban.unban", "ban.jointBan", "ban.jointBanView",
            "ban.submitRequest", "ban.validateRequest",
            -- 白名单
            "whitelist.view", "whitelist.update",
            -- 服务器资源
            "server.resources.view", "server.resources.start",
            "server.resources.stop", "server.resources.restart",
            -- 控制台
            "console.view", "console.execute",
            -- 地图
            "map.view", "map.waypoint", "map.teleport",
            -- 日志
            "logs.view", "logs.highRisk",
            -- 举报
            "reports.view", "reports.handle",
            -- 聊天/公告
            "chat.adminChat", "server.announce",
            -- 服务器指标
            "server.metrics",
            -- Kook
            "kook.view",
        },
    },
    
    -- ===== 普通管理员 - 基础管理权限 =====
    ["moderator"] = {
        name = "普通管理员",
        priority = 50,
        permissions = {
            -- 基础
            "panel.access", "panel.refresh",
            -- 玩家查看
            "player.view", "player.characters",
            -- 玩家管理 (受限 - 无封禁权限)
            "player.kick", "player.warn", "player.freeze", "player.cuff",
            "player.revive", "player.heal", "player.spectate", "player.screenshot",
            "player.save",
            -- 玩家传送 (受限 - 无召集所有)
            "player.teleport", "player.teleport.toPlayer", "player.teleport.toMe",
            "player.teleport.toCoords", "player.teleport.sendBack",
            -- 玩家外观
            "player.setModel", "player.clothing",
            -- 库存 (只能查看和给予)
            "player.inventory.view", "player.inventory.give",
            -- 车辆 (受限 - 无删除)
            "vehicle.view", "vehicle.spawn", "vehicle.repair", "vehicle.trunk",
            -- 经济 (只读)
            "economy.view",
            -- 职业/帮派 (只读)
            "job.view", "gang.view",
            -- 封禁 (只读)
            "ban.view", "ban.jointBanView",
            -- 地图
            "map.view", "map.waypoint", "map.teleport",
            -- 日志
            "logs.view",
            -- 举报
            "reports.view", "reports.handle",
            -- 聊天
            "chat.adminChat",
        },
    },
    
    -- ===== 观察员 - 仅查看权限 =====
    ["observer"] = {
        name = "观察员",
        priority = 10,
        permissions = {
            -- 基础
            "panel.access", "panel.refresh",
            -- 玩家查看
            "player.view", "player.characters", "player.viewOffline",
            -- 观察 (只能观察和截图)
            "player.spectate", "player.screenshot",
            -- 库存 (只读)
            "player.inventory.view",
            -- 车辆 (只读)
            "vehicle.view", "vehicle.trunk",
            -- 经济 (只读)
            "economy.view",
            -- 职业/帮派 (只读)
            "job.view", "gang.view",
            -- 封禁 (只读)
            "ban.view", "ban.jointBanView",
            -- 地图 (只读)
            "map.view",
            -- 日志
            "logs.view",
            -- 举报 (只读)
            "reports.view",
        },
    },
    
    -- ===== 自定义权限组示例 =====
    -- 你可以根据需要添加更多权限组
    
    -- ===== 经济管理员 - 专门管理经济 =====
    ["economy_admin"] = {
        name = "经济管理员",
        priority = 40,
        permissions = {
            -- 基础
            "panel.access", "panel.refresh",
            -- 玩家查看
            "player.view", "player.characters", "player.viewOffline",
            -- 完整经济权限
            "economy.view", "economy.giveCash", "economy.removeCash",
            "economy.giveBank", "economy.removeBank",
            -- 库存 (完整权限)
            "player.inventory.view", "player.inventory.give", 
            "player.inventory.remove", "player.inventory.clear",
            -- 职业 (可设置)
            "job.view", "job.set", "job.remove", "job.setGrade",
            -- 帮派 (可设置)
            "gang.view", "gang.set", "gang.remove", "gang.setGrade",
            -- 车辆 (可给予)
            "vehicle.view", "vehicle.spawn", "vehicle.save", "vehicle.trunk",
            -- 日志
            "logs.view",
            -- 地图
            "map.view",
        },
    },
    
    -- ===== 服务器管理员 - 专门管理服务器 =====
    ["server_admin"] = {
        name = "服务器管理员",
        priority = 60,
        permissions = {
            -- 基础
            "panel.access", "panel.refresh",
            -- 玩家查看
            "player.view",
            -- 服务器资源 (完整权限)
            "server.resources.view", "server.resources.start",
            "server.resources.stop", "server.resources.restart",
            -- 控制台 (完整权限)
            "console.view", "console.execute",
            -- 代码编辑器 (完整权限)    !!!!!!!!!!!!!!!! 重点  代码编辑功能的权限 一定要谨慎分配 !!!!!!!!!!!!!!!!!!!!!
            "editor.view", "editor.edit", "editor.create",
            -- 服务器指标
            "server.metrics",
            -- Kook (完整权限)
            "kook.view", "kook.edit", "kook.test",
            -- 日志 (完整权限)
            "logs.view", "logs.highRisk",
            -- 白名单
            "whitelist.view", "whitelist.update",
        },
    },
    
    -- ===== 封禁管理员 - 专门管理封禁 =====
    ["ban_admin"] = {
        name = "封禁管理员",
        priority = 45,
        permissions = {
            -- 基础
            "panel.access", "panel.refresh",
            -- 玩家查看
            "player.view", "player.characters", "player.viewOffline",
            -- 玩家管理 (封禁相关)
            "player.kick", "player.ban", "player.warn",
            "player.spectate", "player.screenshot",
            -- 封禁 (完整权限)
            "ban.view", "ban.unban", "ban.jointBan", "ban.jointBanView",
            "ban.submitRequest", "ban.validateRequest", "ban.batchOperations",
            -- 白名单
            "whitelist.view", "whitelist.update",
            -- 日志
            "logs.view", "logs.highRisk",
            -- 地图
            "map.view",
        },
    },
}

-- ============================================
-- 管理员账号配置 (Admin Accounts)
-- ============================================
xiaoha.Admins = {
    -- 超级管理员账号
    ['0'] = {
        username = "superadmin",      -- 登录用户名
        password = "123456",          -- 登录密码
        role = "superadmin",          -- 权限角色
        nickname = "超级管理员",       -- 显示名称
    },
    
    -- 高级管理员账号
    ['1'] = {
        username = "admin",
        password = "123456",
        role = "admin",
        nickname = "管理员",
    },
    
    -- 普通管理员账号
    ['2'] = {
        username = "mod",
        password = "123456",
        role = "moderator",
        nickname = "版主",
    },
    
    -- 观察员账号
    ['3'] = {
        username = "observer",
        password = "123456",
        role = "observer",
        nickname = "观察员",
    },
    
    -- 经济管理员账号
    ['4'] = {
        username = "economy",
        password = "123456",
        role = "economy_admin",
        nickname = "经济管理",
    },
    
    -- 服务器管理员账号
    ['5'] = {
        username = "server",
        password = "123456",
        role = "server_admin",
        nickname = "服务器管理",
    },
    
    -- 封禁管理员账号
    ['6'] = {
        username = "banman",
        password = "123456",
        role = "ban_admin",
        nickname = "封禁管理",
    },
    
    -- ============================================================
    -- 添加更多账号 (Add More Accounts)
    -- ============================================================
    -- 可用权限组 (Available Roles):
    --   superadmin   - 超级管理员 (所有权限)
    --   admin        - 高级管理员 (大部分权限)
    --   moderator    - 普通管理员 (基础管理)
    --   observer     - 观察员 (仅查看)
    --   economy_admin - 经济管理员 (经济相关)
    --   server_admin - 服务器管理员 (服务器相关)
    --   ban_admin    - 封禁管理员 (封禁相关)
    --
    -- 示例:
    -- ['7'] = {
    --     username = "新用户名",
    --     password = "新密码",
    --     role = "moderator",
    --     nickname = "显示名称",
    -- },
}

-- ============================================
-- 权限检查函数 (Permission Check Functions)
-- ============================================

-- 根据 token 获取管理员信息
function xiaoha.GetAdminByToken(token)
    for k, v in pairs(xiaoha.Admins) do
        local adminToken = exports['HGadmin-v3_extra']:GetMd(v.username.."h&g&a&d&m&i&n"..v.password)
        if adminToken == token then
            return {
                id = k,
                username = v.username,
                role = v.role or "observer",
                nickname = v.nickname or v.username,
            }
        end
    end
    return nil
end

-- 获取角色的权限列表
function xiaoha.GetRolePermissions(roleName)
    local role = xiaoha.Roles[roleName]
    if not role then return {} end
    return role.permissions or {}
end

-- 获取角色信息
function xiaoha.GetRoleInfo(roleName)
    return xiaoha.Roles[roleName]
end

-- 检查管理员是否有特定权限
function xiaoha.HasPermission(token, permission)
    local admin = xiaoha.GetAdminByToken(token)
    if not admin then return false end
    
    local role = xiaoha.Roles[admin.role]
    if not role then return false end
    
    -- 检查权限
    for _, perm in ipairs(role.permissions) do
        -- * 代表所有权限
        if perm == "*" then return true end
        -- 精确匹配
        if perm == permission then return true end
        -- 通配符匹配 (例如 player.* 匹配 player.kick)
        if string.sub(perm, -2) == ".*" then
            local prefix = string.sub(perm, 1, -3)
            if string.sub(permission, 1, #prefix) == prefix then
                return true
            end
        end
        -- 父权限匹配 (例如 player.teleport 匹配 player.teleport.toPlayer)
        if string.sub(permission, 1, #perm) == perm and 
           (string.sub(permission, #perm + 1, #perm + 1) == "." or #permission == #perm) then
            return true
        end
    end
    
    return false
end

-- 检查管理员是否为超级管理员
function xiaoha.IsSuperAdmin(token)
    local admin = xiaoha.GetAdminByToken(token)
    if not admin then return false end
    return admin.role == "superadmin"
end

-- 获取管理员的角色优先级
function xiaoha.GetPriority(token)
    local admin = xiaoha.GetAdminByToken(token)
    if not admin then return 0 end
    
    local role = xiaoha.Roles[admin.role]
    if not role then return 0 end
    
    return role.priority or 0
end

-- 获取所有可用权限列表
function xiaoha.GetAllPermissions()
    return xiaoha.AllPermissions
end

-- 获取所有角色列表
function xiaoha.GetAllRoles()
    local roles = {}
    for roleName, roleData in pairs(xiaoha.Roles) do
        table.insert(roles, {
            id = roleName,
            name = roleData.name,
            priority = roleData.priority,
            permissionCount = #roleData.permissions
        })
    end
    -- 按优先级排序
    table.sort(roles, function(a, b) return a.priority > b.priority end)
    return roles
end

-- ============================================
-- 导出函数供其他资源使用
-- ============================================
exports("GetAdminByToken", xiaoha.GetAdminByToken)
exports("HasWebPermission", xiaoha.HasPermission)
exports("IsSuperAdmin", xiaoha.IsSuperAdmin)
exports("GetWebAdminPriority", xiaoha.GetPriority)
exports("GetAllPermissions", xiaoha.GetAllPermissions)
exports("GetAllRoles", xiaoha.GetAllRoles)
exports("GetRoleInfo", xiaoha.GetRoleInfo)

```
::: 







### 白名单相关 
1. 如需要使用我们的白名单管理员 直接在 游戏内kook机器人配置里面开启 不要在`config.lua` 里面 将`EnableWhiteList` 为 `true` 

```lua
-- 白名单配置
-- ⚠️ 注意：如果 HGadmin-v3 资源已启动，白名单开关将从 HGadmin-v3 的「Kook日志配置」页面读取
-- 在管理面板中的「Kook日志配置」->「白名单功能」中可以配置：
--   - 是否启用白名单
--   - KOOK 审核频道（打勾过白）
--   - 表情配置、命令过白、私信通知等
-- 此处的配置仅作为回退选项（当 HGadmin-v3 未安装或未启用时使用）
-- ============================================
Config.EnableWhiteList = false -- 是否开启白名单（建议在 HGadmin-v3 管理面板中配置） 在游戏内 进行配置  这里默认为false 即可
```






### kook bot

这里 请自行 前往`kook开发者中心` 进行 配置机器人 `token` 即可 以及您的 频道id    验证的token 不用填  serverid 也不用填 
```lua
-- KOOK 配置
Config.KookBot = {
    enabled = true,                   -- 是否启用 KOOK 通知
    onlySendDanger = true,            -- 只发送危险通知
    token = "1/MzI2NjU=/MmedIAIvyYM86vKzXMaZLA==",    -- KOOK Webhook Token
    channelId = "6833600055197838",   -- KOOK 频道 ID
    serverName = "小哈esx测试服务器",  -- 服务器名称
    serverId = "7221692429868924",
    verifyToken = "L07jyRvMnoxG78yw",  -- 你的验证 Token

    -- 通知类型配置
    notificationTypes = {
        items = true,      -- 物品操作通知
        money = true,      -- 金钱操作通知
        admin = true,      -- 管理员操作通知
        dangerous = true,  -- 危险物品通知
        vehicle = true     -- 车辆操作通知
    },
    
    -- 阈值配置
    thresholds = {
        money = {
            warning = 50000,      -- 金钱警告阈值
            danger = 1000000,     -- 金钱危险阈值
            cheat = 100000000     -- 作弊检测阈值
        },
        items = {
            warning = 100,        -- 物品警告阈值
            danger = 1000         -- 物品危险阈值
        }
    }
}
```
