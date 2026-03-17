# HGadmin-v3 V3 pro 配置文件相关

### Config.lua配置说明
::: details Config.lua配置文件
```lua
Config = {}
Config.DB = {} 
--  阿拉伯人不配使用本脚本 ！！！！！！！！！！ 作者被阿拉伯人骗了非常多的金钱，所以我认为，阿拉伯人不配使用本脚本 阿拉伯人都是骗子 以及中东地区的人，全部都是骗子，
--  Arabs don't deserve to use this script !!!!!!!!! The author was cheated out of a lot of money by the Arabs, so I think
-- the Arabs don't deserve to use this script, and the Arabs are liars, and the people of the Middle East, all of them are liars.
-- 使用我们的脚本之前请先查看我们的配置的说明书，以及翻阅我们config的每一行注释谢谢 
-- 如有遇到问题，请到我们的售后群，艾特群主，或者到我们的discord开上一张票，
-- 如果是寻找他人购买的开源版本，不是寻找作者购买的脚本一切不给予任何支持，以及会被拉黑并踢出频道谢谢，
-- 也是当然凭跟小哈的一切购买记录，获取支持   
-- Before using our scripts, please read the configuration manual carefully and go through each line of the config file.
-- If you encounter any problems, please go to our support group, tag the group owner, or open a ticket on our Discord.
-- No support will be provided for open-source versions purchased from others, and such users will be blacklisted and removed.
-- 框架选择: "auto", "qbcore" 或 "esx" 
-- 在这里选择您使用的框架目前只支持qbcore 跟esx 如需要支持qb box 请联系支持 者，或者提升您的框架版本，
-- 当然最希望您升级您的框架版本，这样能适配更多的脚本
-- Framework selection: "auto", "qbcore" or "esx"
-- Choose the framework you are using. Currently, only qbcore and esx are supported. For qb box or to upgrade your framework version, contact support.
Config.Framework = "auto" -- "auto", "qbcore" 或 "esx"         默认是自动识别框架不需要去动它一般除非你打算写自写框架支持，或者你很懂！
-- 根据你框架选择
-- Choose based on your framework.
Config.EnableDebug = false -- 关闭调试模式以提高性能
-- 是否启用调试打印
-- Enable debug mode for detailed logs. (Only modify this if you know what you are doing.)
-- 资源监控功能总开关（true 开启 / false 关闭） 默认是开启  以及 如果开启后 则需要重启服务器才能重启脚本资源，否则会随机踢几个人， 这个没办法解决，只能重启服务器才能修改内容，如果需要重启脚本先来这里改为false， 然后在重启资源即可
-- Global toggle for Resource Monitor feature
Config.EnableResourceMonitor = true
Config.Inventory = "auto" -- 可选值: "auto", "ox", "qs", "qb", "ps", "tgiann", "ms_inventory", "codem-inventory", "origen_inventory" -- 目前仅支持这些库存 qb库存的方式是获取qbcore的items.lua 的物品，
-- Use "ox" or "qs" "ms_inventory" "tgiann" "codem-inventory" "ps" "qb". Leave empty to use the framework's default database method.
Config.ESXSkin = "auto" -- 使用 "auto" 自动检测, 或手动指定: "illenium-appearance", "ak47_clothing", "fivem-appearance", "esx_skin", "rcore_clothing"   默认是自动识别框架不需要去动它一般除非你打算写自写框架支持，或者你很懂！
-- 使用 "AK" 表示 ak47, 使用 "Default" 表示 esx_skin, or other compatible appearance systems.
Config.DefaultDarkMode = 1 
-- 默认是否启用暗色模式。1 表示默认开启,0 表示默认关闭
-- Default dark mode: 1 = enabled, 0 = disabled.
-- Config.ServerDiscord = "discord.gg/discord-链接"
-- -- 用于踢出/封禁消息
-- -- Used for kick/ban messages.
-- Config.ScreenshotWebhook = "" 
-- -- 可以在这里配置您的webhook 日志 如果您不知道您在做什么，您可以当然不用去管他，谢谢
-- -- Configure webhook logs here. Leave it empty if you're unsure.
-- Config.LogsWebhook = "" 
-- -- 可以在这里配置您的webhook 日志 如果您不知道您在做什么，您可以当然不用去管他，谢谢
-- -- Configure webhook logs here. Leave it empty if you're unsure.
-- ============================================
-- 旧 Discord Webhook 配置（已弃用）
-- 请使用下方的 Config.KookWebhook 配置
-- ============================================
Config.Webhook = {
    Enable = false,
    Throttle = 1000,
    BatchSize = 5,
    ScreenshotQuality = 0.8,
    LogRetentionDays = 7,
    Discord = { Screenshot = "", Logs = "", Ban = "", Admin = "" },
    Options = {
        IncludeScreenshots = false,
        IncludePlayerInfo = false,
        IncludeServerInfo = false,
        LogAdminActions = false,
        LogPlayerActions = false,
        LogSystemEvents = false,
    }
}
-- ============================================
-- Kook（开黑啦）日志配置
-- ⚠️ 注意：此配置已移动到游戏内管理面板！
-- 请在管理面板中的「Kook日志配置」页面进行配置
-- 配置会自动保存到 kook_config.json 文件中
-- ============================================  
-- 不会配置机器人？邀请我们的公共机器人：
-- https://www.kookapp.cn/app/oauth2/authorize?id=32665&permissions=1073741823&client_id=4tRYVE_8rAHIGmgk&redirect_uri=&scope=bot
-- 邀请后在管理面板中配置频道ID即可
-- 获取频道ID：在Kook设置里面把开发者模式打开，然后右键频道复制ID
-- ============================================
Config.KookWebhook = {}  -- 配置由 kook_config.json 管理，请勿在此处修改
-- 联合封禁同步设置
Config.JointBan = {
    API_KEY = "HuVzl5cK82nKvVCkK2okKmJEu7ECZHJa",     -- API密钥(API Key)   这里需要您前往我们的联ban 封禁官网 注册账户申请一个api 密钥 https://ban.web.1239.xin:883/  则填入这里，才可使用否则无法使用
    AutoSyncInterval = 3600000,                                     -- 自动同步间隔（毫秒，默认1小时）
    AutoSyncOnStartup = true,                                       -- 服务器启动时是否自动同步
    LoadFromAPIFirst = true,                                        -- 是否优先从API加载数据
    DisableAutoSync = false,                                        -- 是否禁用自动同步（只在手动点击刷新时同步）
    SaveToDatabase = true,                                          -- 是否将API数据保存到数据库作为备份
    -- 白名单设置
    Whitelist = {
        Enabled = true,                                            -- 是否启用联ban白名单功能
        CommandPrefix = "HGadmin-v3",                                 -- 白名单命令前缀
        Commands = {
            AddToWhitelist = "jieban",                             -- 添加到白名单的命令 (例如：/HGadmin-v3jieban)
            RemoveFromWhitelist = "deljieban",                     -- 从白名单移除的命令 (例如：/HGadmin-v3deljieban)
            ListWhitelist = "jiebanlist"                           -- 列出白名单的命令 (例如：/HGadmin-v3jiebanlist)
        },
        NotifyAdmins = true                                        -- 当添加或移除白名单时通知所有管理员
    }
}

-- 联合封禁页面文本（可翻译）
Config.JointBan.Localization = {
    title = "联合封禁",
    bannedMessage = "您已被全服联合封禁系统封禁，无法进入 <b>%s</b>。<span style='color:#ffb347;margin-left:8px;'>如有疑问请联系管理员申诉。</span>",
    reasonLabel = "原因：",
    timeLabel = "时间：",
    idLabel = "ID：",
    noteLabel = "备注：",
    footer = "联合封禁由多服共同维护，致力于打造更健康的游戏环境。",
    appealButton = "🍈如果你被误ban了，点我加群申诉"
}
Config.EnableAdminPanelCommand = true 
-- 是否启用管理员面板命令(默认为 /a)
-- Enable the admin panel command (default: /a).
Config.NoclipCommand = "noclip"
Config.AdminPanelCommand = "xiaoha"
-- 使用这个指令打开管理员面板 为什么使用xiaoha这个指令，为了让你们每次都能想起我，
-- 让你们为了对着我性感的来上一发，如果不喜欢这个指令，可以修改为任意任何指令谢谢！！！
-- Use this command to open the admin panel. You can modify this to any command you like.

-- 管理员白名单（license 标识符列表），示例："license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
Config.AdminWhitelist = {
	-- "license:1234567890abcdef1234567890abcdef",
}
-- 管理员 ACE 权限组（服务端 server.cfg 中 add_ace 配置的权限），任意一个命中即视为管理员
-- 例如：add_ace group.admin HGadmin-v3.adminmenu allow
Config.AdminAcePerms = {
	"HGadmin-v3.adminmenu",
	"command.HGadmin-v3",
}
-- ============================================
-- 超级管理员配置（拥有所有权限，可在游戏中管理其他管理员）
-- Super Admin Configuration (has all permissions, can manage other admins in-game)
-- ============================================
-- 在这里添加超级管理员的标识符，支持: license2:xxx, discord:xxx, steam:xxx, fivem:xxx
-- 超级管理员拥有所有权限，并且可以在游戏内管理员工权限系统
-- Add super admin identifiers here. Supports: license2:xxx, discord:xxx, steam:xxx, fivem:xxx
-- Super admins have all permissions and can manage the staff permission system in-game
Config.SuperAdmins = {
    -- "license:6b593f69c7ed2803f462248c1f02c285f947322c",
    -- "discord:123456789012345678",
    -- "steam:110000xxxxxxxxx",
}
-- 是否启用数据库权限系统（员工管理功能）
-- Enable database permission system (staff management feature)
Config.EnableStaffSystem = true
-----        add_ace group.admin HGadmin-v3.adminmenu allow  添加管理员权限ace权限
-- 结束观战   stopspectate
Config.StopSpectateCommand = "stopspectate"
Config.StopSpectateKey = 'X'
Config.EnableAdminPanelKey = true 
-- 需要使用这个按键绑定可在这里开关
-- Toggle admin panel keybind.
-- 这个是打开管理员面板的按键绑定
Config.anjian = 'PAGEUP'      -- 可修改为HOME，或者您想要的按键，此功能可在游戏里的设置找到按键绑定，里面修改到别的键位，  作者自用PGUP，因为作者键盘没有HOME键，所以默认PGUP，可自行修改为其他按键  
-- Config.AdminPanelKey = 212
-- 支持修改键位，但是 查看这里的官方文档 https://docs.fivem.net/docs/game-references/controls/
-- Keybind for the admin panel. Refer to the official documentation: https://docs.fivem.net/docs/game-references/controls/
-- 在适当位置添加以下配置
Config.NoClipKey = 'DELETE'  -- 使用键名而不是控制ID
Config.NoClipControls = {
    toggle = 'DELETE',       -- 切换无碰撞
    moveUp = 'Q',           -- 上升
    moveDown = 'E',         -- 下降
    moveForward = 'W',      -- 前进
    moveBack = 'S',         -- 后退
    turnLeft = 'A',         -- 左转
    turnRight = 'D',        -- 右转
    speedUp = 'LSHIFT',     -- 加速
    speedDown = 'LCTRL',    -- 减速
    changeSpeed = 'MWHEELUP' -- 切换速度
}
-- 添加NoClip控制ID映射
Config.NoClipControlIDs = {
    toggle = 178,        -- DELETE
    moveUp = 44,        -- Q
    moveDown = 46,       -- E
    moveForward = 32,    -- W
    moveBack = 33,       -- S
    turnLeft = 34,       -- A
    turnRight = 35,      -- D
    speedUp = 21,        -- LSHIFT
    speedDown = 36,      -- LCTRL
    changeSpeed = 15     -- MWHEELUP
}
Config.NoClipType = 1       -- 目前仅支持他，没啥事别修改，
-- 1 (默认) 新的类似 txAdmin 的 NoClip 系统,
Config.ShowIPInIdentifiers = true 
-- 在玩家信息视图的标识符框中是否显示玩家的 IP
-- Show player IPs in identifier boxes.
Config.NoClipConfig = {
    UpdateInterval = 0,      -- NoClip更新间隔(ms)
    CameraSmoothing = 0.9,   -- 相机平滑度(0-1)
    SpeedMultiplier = 1.0,   
    -- 速度倍数
    MaxSpeed = 15.0,         -- 最大速度
    MinSpeed = 0.1,         -- 最小速度
    -- 性能优化选项
    UseBuffering = true,     -- 使用位置缓冲
    BufferSize = 5,          -- 缓冲区大小
    OptimizeCollision = true, -- 优化碰撞检测
    ReduceNetworkUpdates = true -- 减少网络更新
}
-- 添加平板动画开关（true: 打开平板时播放动画；false: 仅显示平板道具，不播放动画）
Config.EnableTabletAnimation = false 
Config.EnableReportCommand = true 
-- 启用或禁用举报命令(如果您使用其他举报系统,举报标签页仍会显示)
-- Enable or disable the report command. (The report tab will still be displayed if you use another system.)
-- 全服补偿命令名称（用于向所有在线玩家发钱或物品）
-- Global compensation command name for mass rewards
Config.CompensationCommand = "buchang"
Config.SaveTOJSON = true 
-- 是否在资源停止时(服务器重启等)将举报和管理员聊天保存到 JSON,并在资源启动时从 JSON 加载
-- Save reports and admin chat to JSON when the resource stops (e.g., server restart) and load from JSON when it starts.
Config.DB.VehiclesTable = ''           -- 目前是自动识别
-- 标准: QBCore 使用  players | ESX 使用 owned_vehicles              
-- 默认留空就是自动识别最好不要去动它除非你 很懂！
-- Vehicles table: QBCore uses "players" | ESX uses "owned_vehicles".
-- Leave empty for automatic detection unless you know what you're doing.
Config.DB.CharactersTable = ''          -- 目前是自动识别
-- 标准: QBCore 使用 players | ESX 使用 users             
-- 默认留空就是自动识别最好不要去动它除非你 很懂！
-- Characters table: QBCore uses "players" | ESX uses "users".
-- Leave empty for automatic detection unless you know what you're doing.
Config.DB.BansTable = "bans" 
-- 如果您不知道您在做什么请不要去修改他
-- Ban table: Leave this unchanged unless you know what you're doing.
Config.AnnounceBan = true 
-- 是否在聊天中公告封禁
-- Announce bans in chat.
Config.TagEveryone = true 
-- 启用以在封禁的 Discord 日志中标记所有人
-- Tag everyone in Discord ban logs.
Config.EnableNames = false 
-- 是否启用头顶名称显示
-- Enable or disable overhead name display.
Config.AllPlayersUseNames = false 
-- 是否所有玩家都可以使用头顶名称显示
-- Allow all players to use overhead name display.

Config.NamesOverSelfHead = false 
-- 是否在自己头顶显示自己的名称和 ID
-- Show your own name and ID overhead.
-- 时间和天气系统选择配置
-- Time and Weather System Configuration
Config.TimeWeatherSystem = "auto" -- 可选值: "auto", "qb-weathersync", "esx_weathersync", "cd_easytime", "vSync", "vSyncR", "ServerSync", "Cx-RealSync-Reborn"
-- 选择使用的时间和天气系统 / Choose time and weather system to use
-- "auto" - 自动检测 / Auto detect
-- "qb-weathersync" - QB框架天气同步系统 / QB framework weather sync
-- "esx_weathersync" - ESX框架天气同步系统 / ESX framework weather sync  
-- "cd_easytime" - cd_easytime时间天气管理系统 / cd_easytime time weather management
-- "vSync" - 经典vSync天气时间同步系统 / Classic vSync weather time sync
-- "vSyncR" - vSync改进版本 / vSync Revamped version
-- "ServerSync" - ServerSync高级同步系统 / ServerSync advanced sync system
-- "Cx-RealSync-Reborn" - 真实天气API同步系统 / Real weather API sync system
Config.FuelScript = "auto" -- 可选值: "auto", "LegacyFuel", "ps-fuel", "ox_fuel", "cdn-fuel", "qb-fuel"
-- 使用的燃料脚本 ---支持各种燃油系统，自动识别
-- Fuel script used. Supports various fuel systems with auto-detection.
-- 自动检测燃油系统


-- 资源监控配置
Config.ResourceMonitor = {
    Enabled = (Config.EnableResourceMonitor ~= nil) and Config.EnableResourceMonitor or true,            -- 是否启用资源监控（由上面的总开关控制）
    BanMode = true,            -- 是否检测到违规时自动封禁
    CheckIntervalMs = 2000,    -- 检测间隔（毫秒）
    DevMode = {
        Enable = true,                   -- 是否启用开发者模式命令
        PauseCommand = "kaifazhemoshi",  -- 仅服务端可用：暂停检测循环
        ResumeCommand = "stopkaifazhe",  -- 仅服务端可用：恢复检测循环
        ConsoleOnly = true                -- 是否仅允许服务器控制台执行
    }
}
-- 安全监控（反作弊）配置
Config.SecurityMonitor = {
    Enabled = true,            -- 总开关：是否启用安全监控
    BroadcastWarning = true,   -- 是否向全服广播警告
    SubmitJointBan = true,     -- 是否提交联合封禁
    DropPlayer = true,         -- 是否直接踢出玩家
    Modules = {
        CheckProtectedEvent = true,  -- 监听 HGadmin-v3:server:CheckProtectedEvent
        CheckPlayerMode = true,      -- 监听 HGadmin-v3:server:CheckPlayerMode
        CheckTeleport = true,        -- 监听 HGadmin-v3:server:CheckTeleport
        GuardServerEvents = true,    -- 保护 protectedServerEvents 列表内事件
        TxSetPlayerMode = true,      -- 保护 txcl:setPlayerMode（服务器端）
        TxTpToWaypoint = true,       -- 保护 txcl:tpToWaypoint（服务器端）
        TxHealMyself = true          -- 保护 txsv:req:healMyself（服务器端）
    }
}
-- 坐标输出功能配置
Config.VectorExporter = {
    Enabled = true,                 -- 是否启用坐标输出功能
    Format = "vec3",               -- 输出格式: vec3 | vec4 | json | table | array | comma
    Decimals = 2,                   -- 保留小数位
    Command = "getpos",            -- 触发输出的命令（用于按键绑定）
    DefaultKey = "INSERT",         -- 默认按键（可在游戏内按键绑定里修改）
    UseKeyMapping = true,           -- 是否注册按键映射（绑定到上面的命令）
    PrintToChat = false             -- 可选：同时在聊天框显示（主要还是打印到客户端控制台）
}
local function DetectFuelSystem()
    if Config.FuelScript ~= "auto" then
        return Config.FuelScript
    end
    -- 检测各种燃油系统
    local fuelSystems = {
        "LegacyFuel",
        "ps-fuel",
        "ox_fuel",
        "cdn-fuel",
        "qb-fuel",
        "esx_legacyfuel",
        "rcore_fuel",
        "frfuel",
        "renzu_fuel",
        "hyon_fuel"
    }
    for _, system in ipairs(fuelSystems) do
        if GetResourceState(system) == "started" then
            local status, result = pcall(function()
                return exports[system]:GetFuel(1) ~= nil
            end)
            if status then
                print("^2[HGadmin] 自动检测到" .. system .. "燃油系统^7")
                return system
            end
        end
    end
    print("^3[HGadmin] 警告: 未检测到支持的燃油系统，使用原生系统^7")
    return "native"
end
-- 燃油系统接口
Config.FuelInterface = {
    ['LegacyFuel'] = {
        setfuel = function(vehicle, amount)
            exports['LegacyFuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['LegacyFuel']:GetFuel(vehicle)
        end
    },
    ['ps-fuel'] = {
        setfuel = function(vehicle, amount)
            exports['ps-fuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['ps-fuel']:GetFuel(vehicle)
        end
    },
    ['ox_fuel'] = {
        setfuel = function(vehicle, amount)
            exports['ox_fuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['ox_fuel']:GetFuel(vehicle)
        end
    },
    ['cdn-fuel'] = {
        setfuel = function(vehicle, amount)
            exports['cdn-fuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['cdn-fuel']:GetFuel(vehicle)
        end
    },
    ['qb-fuel'] = {
        setfuel = function(vehicle, amount)
            exports['qb-fuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['qb-fuel']:GetFuel(vehicle)
        end
    },
    ['esx_legacyfuel'] = {
        setfuel = function(vehicle, amount)
            exports['esx_legacyfuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['esx_legacyfuel']:GetFuel(vehicle)
        end
    },
    ['rcore_fuel'] = {
        setfuel = function(vehicle, amount)
            exports['rcore_fuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['rcore_fuel']:GetFuel(vehicle)
        end
    },
    ['frfuel'] = {
        setfuel = function(vehicle, amount)
            exports['frfuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['frfuel']:GetFuel(vehicle)
        end
    },
    ['renzu_fuel'] = {
        setfuel = function(vehicle, amount)
            exports['renzu_fuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['renzu_fuel']:GetFuel(vehicle)
        end
    },
    ['hyon_fuel'] = {
        setfuel = function(vehicle, amount)
            exports['hyon_fuel']:SetFuel(vehicle, amount)
        end,
        getfuel = function(vehicle)
            return exports['hyon_fuel']:GetFuel(vehicle)
        end
    }
}
-- 获取当前使用的燃油系统接口
Config.GetFuelSystem = function()
    local detectedSystem = DetectFuelSystem()
    return Config.FuelInterface[detectedSystem] or {
        setfuel = function(vehicle, amount)
            SetVehicleFuelLevel(vehicle, amount + 0.0)
        end,
        getfuel = function(vehicle)
            return GetVehicleFuelLevel(vehicle)
        end
    }
end
-- 自动检测时间天气系统
local function DetectTimeWeatherSystem()
    if Config.TimeWeatherSystem ~= "auto" then
        return Config.TimeWeatherSystem
    end
    -- 检测各种时间天气系统 (按受欢迎程度排序)
    local timeWeatherSystems = {
        "cd_easytime",
        "vSyncR",
        "vSync", 
        "ServerSync",
        "Cx-RealSync-Reborn",
        "qb-weathersync", 
        "esx_weathersync",
        "av_weather",
        "b2_weatherEssentials" -- 新增 b2_weatherEssentials 自动检测
    }
    for _, system in ipairs(timeWeatherSystems) do
        if GetResourceState(system) == "started" then
            print("^2[HGadmin] 自动检测到" .. system .. "时间天气系统^7")
            return system
        end
    end
    -- 根据框架选择默认系统
    if QBCore then
        print("^3[HGadmin] 未检测到专用时间系统，使用QB默认系统^7")
        return "qb-weathersync"
    elseif ESX then
        print("^3[HGadmin] 未检测到专用时间系统，使用ESX默认系统^7")
        return "esx_weathersync"
    end
    print("^1[HGadmin] 错误: 未检测到支持的时间天气系统^7")
    return "none"
end
-- 时间天气系统接口
Config.TimeWeatherInterface = {
    ['cd_easytime'] = {
        setWeather = function(weatherType)
            -- cd_easytime 使用命令或事件来设置天气
            -- 由于文档没有提供直接的export，我们尝试使用常见的事件名称
            TriggerEvent('cd_easytime:updateWeather', weatherType)
            print("^3[HGadmin] cd_easytime: 尝试设置天气为 " .. tostring(weatherType) .. "^7")
        end,
        setTime = function(hour, minute)
            -- cd_easytime 使用命令或事件来设置时间
            -- 由于文档没有提供直接的export，我们尝试使用常见的事件名称
            TriggerEvent('cd_easytime:updateTime', hour, minute or 0)
            print("^3[HGadmin] cd_easytime: 尝试设置时间为 " .. hour .. ":" .. (minute or 0) .. "^7")
        end,
        setTimeFreeze = function(freeze)
            -- cd_easytime 使用暂停同步来实现时间冻结
            -- 根据文档，可以通过PauseSync来控制
            if freeze then
                TriggerEvent('cd_easytime:pauseSync')
                print("^3[HGadmin] cd_easytime: 尝试暂停时间同步^7")
            else
                TriggerEvent('cd_easytime:resumeSync')
                print("^3[HGadmin] cd_easytime: 尝试恢复时间同步^7")
            end
        end,
        getTimeFreezeState = function()
            -- 使用cd_easytime的客户端export获取暂停状态
            local success, pauseState = pcall(function()
                return exports['cd_easytime']:GetPauseSyncState()
            end)
            if success then
                return pauseState
            else
                print("^1[HGadmin] cd_easytime: 无法获取暂停状态^7")
                return false
            end
        end,
        getAllData = function()
            -- 获取cd_easytime的所有数据
            local success, data = pcall(function()
                return exports['cd_easytime']:GetAllData()
            end)
            if success then
                return data
            else
                print("^1[HGadmin] cd_easytime: 无法获取数据^7")
                return nil
            end
        end
    },
    ['qb-weathersync'] = {
        setWeather = function(weatherType)
            exports["qb-weathersync"]:setWeather(weatherType)
        end,
        setTime = function(hour, minute)
            exports["qb-weathersync"]:setTime(hour, minute or 0)
        end,
        setTimeFreeze = function(freeze)
            exports["qb-weathersync"]:setTimeFreeze(freeze)
        end,
        getTimeFreezeState = function()
            return exports["qb-weathersync"]:getTimeFreezeState()
        end
    },
    ['esx_weathersync'] = {
        setWeather = function(weatherType)
            exports["esx_weathersync"]:setWeather(weatherType)
        end,
        setTime = function(hour, minute)
            exports["esx_weathersync"]:setTime(hour, minute or 0)
        end,
        setTimeFreeze = function(freeze)
            exports["esx_weathersync"]:setTimeFreeze(freeze)
        end,
        getTimeFreezeState = function()
            return exports["esx_weathersync"]:getTimeFreezeState()
        end
    },
    ['vSync'] = {
        setWeather = function(weatherType)
            -- vSync使用事件或命令系统
            TriggerEvent('vSync:updateWeather', weatherType)
            print("^3[HGadmin] vSync: 尝试设置天气为 " .. tostring(weatherType) .. "^7")
        end,
        setTime = function(hour, minute)
            -- vSync使用事件系统
            TriggerEvent('vSync:updateTime', hour, minute or 0)
            print("^3[HGadmin] vSync: 尝试设置时间为 " .. hour .. ":" .. (minute or 0) .. "^7")
        end,
        setTimeFreeze = function(freeze)
            -- vSync的时间冻结
            if freeze then
                TriggerEvent('vSync:freezeTime', true)
                print("^3[HGadmin] vSync: 尝试冻结时间^7")
            else
                TriggerEvent('vSync:freezeTime', false)
                print("^3[HGadmin] vSync: 尝试解冻时间^7")
            end
        end,
        getTimeFreezeState = function()
            -- vSync没有直接的状态获取，返回false
            print("^3[HGadmin] vSync: 无法获取时间冻结状态^7")
            return false
        end
    },
    ['vSyncR'] = {
        setWeather = function(weatherType)
            -- vSyncR (vSync Revamped) 使用改进的事件系统
            TriggerEvent('vSyncR:setWeather', weatherType)
            print("^3[HGadmin] vSyncR: 尝试设置天气为 " .. tostring(weatherType) .. "^7")
        end,
        setTime = function(hour, minute)
            -- vSyncR使用改进的时间设置
            TriggerEvent('vSyncR:setTime', hour, minute or 0)
            print("^3[HGadmin] vSyncR: 尝试设置时间为 " .. hour .. ":" .. (minute or 0) .. "^7")
        end,
        setTimeFreeze = function(freeze)
            -- vSyncR的时间冻结功能
            TriggerEvent('vSyncR:freezeTime', freeze)
            print("^3[HGadmin] vSyncR: 尝试" .. (freeze and "冻结" or "解冻") .. "时间^7")
        end,
        getTimeFreezeState = function()
            -- 尝试获取vSyncR状态
            local success, state = pcall(function()
                return exports['vSyncR']:isTimeFrozen()
            end)
            if success then
                return state
            else
                print("^3[HGadmin] vSyncR: 无法获取时间冻结状态^7")
                return false
            end
        end
    },
    ['ServerSync'] = {
        setWeather = function(weatherType)
            -- ServerSync使用自己的事件系统
            TriggerEvent('ServerSync:setWeather', weatherType)
            print("^3[HGadmin] ServerSync: 尝试设置天气为 " .. tostring(weatherType) .. "^7")
        end,
        setTime = function(hour, minute)
            -- ServerSync时间设置
            TriggerEvent('ServerSync:setTime', hour, minute or 0)
            print("^3[HGadmin] ServerSync: 尝试设置时间为 " .. hour .. ":" .. (minute or 0) .. "^7")
        end,
        setTimeFreeze = function(freeze)
            -- ServerSync时间冻结
            TriggerEvent('ServerSync:freezeTime', freeze)
            print("^3[HGadmin] ServerSync: 尝试" .. (freeze and "冻结" or "解冻") .. "时间^7")
        end,
        getTimeFreezeState = function()
            -- 尝试获取ServerSync状态
            local success, state = pcall(function()
                return exports['ServerSync']:getTimeFrozen()
            end)
            if success then
                return state
            else
                print("^3[HGadmin] ServerSync: 无法获取时间冻结状态^7")
                return false
            end
        end
    },
    ['Cx-RealSync-Reborn'] = {
        setWeather = function(weatherType)
            -- Cx-RealSync-Reborn 真实天气系统
            TriggerEvent('Cx-RealSync:setWeather', weatherType)
            print("^3[HGadmin] Cx-RealSync-Reborn: 尝试设置天气为 " .. tostring(weatherType) .. "^7")
        end,
        setTime = function(hour, minute)
            -- Cx-RealSync时间设置
            TriggerEvent('Cx-RealSync:setTime', hour, minute or 0)
            print("^3[HGadmin] Cx-RealSync-Reborn: 尝试设置时间为 " .. hour .. ":" .. (minute or 0) .. "^7")
        end,
        setTimeFreeze = function(freeze)
            -- Cx-RealSync时间冻结
            TriggerEvent('Cx-RealSync:freezeTime', freeze)
            print("^3[HGadmin] Cx-RealSync-Reborn: 尝试" .. (freeze and "冻结" or "解冻") .. "时间^7")
        end,
        getTimeFreezeState = function()
            -- 尝试获取Cx-RealSync状态
            local success, state = pcall(function()
                return exports['Cx-RealSync-Reborn']:isTimeFrozen()
            end)
            if success then
                return state
            else
                print("^3[HGadmin] Cx-RealSync-Reborn: 无法获取时间冻结状态^7")
                return false
            end
        end
    },
    ['av_weather'] = {
        setWeather = function(weatherType)
            exports['av_weather']:SetWeather(weatherType)
        end,
        setTime = function(hour, minute)
            exports['av_weather']:SetTime(hour, minute or 0)
        end,
        setTimeFreeze = function(freeze)
            exports['av_weather']:FreezeTime(freeze)
        end,
        getTimeFreezeState = function()
            local success, state = pcall(function()
                return exports['av_weather']:IsTimeFrozen()
            end)
            if success then
                return state
            else
                print("^1[HGadmin] av_weather: 无法获取时间冻结状态^7")
                return false
            end
        end
    },
    ['b2_weatherEssentials'] = {
        setWeather = function(weatherType)
            -- 使用 b2_weatherEssentials 的 SetWeather 导出函数
            exports['b2_weatherEssentials']:SetWeather(weatherType)
            print("^3[HGadmin] b2_weatherEssentials: 设置天气为 " .. tostring(weatherType) .. "^7")
        end,
        setTime = function(hour, minute)
            -- b2_weatherEssentials 没有直接的时间设置导出函数
            -- 尝试使用事件或命令
            TriggerEvent('b2_weatherEssentials:setTime', hour, minute or 0)
            print("^3[HGadmin] b2_weatherEssentials: 尝试设置时间为 " .. hour .. ":" .. (minute or 0) .. "^7")
        end,
        setTimeFreeze = function(freeze)
            -- 根据文档，b2_weatherEssentials 有时间同步控制功能
            if freeze then
                exports['b2_weatherEssentials']:DisableTimeSync()
                print("^3[HGadmin] b2_weatherEssentials: 禁用时间同步^7")
            else
                exports['b2_weatherEssentials']:EnableTimeSync()
                print("^3[HGadmin] b2_weatherEssentials: 启用时间同步^7")
            end
        end,
        setWeatherFreeze = function(freeze)
            -- 根据文档，b2_weatherEssentials 有天气同步控制功能
            if freeze then
                exports['b2_weatherEssentials']:DisableWeatherSync()
                print("^3[HGadmin] b2_weatherEssentials: 禁用天气同步^7")
            else
                exports['b2_weatherEssentials']:EnableWeatherSync()
                print("^3[HGadmin] b2_weatherEssentials: 启用天气同步^7")
            end
        end,
        toggleBlackout = function(state)
            -- 根据文档，b2_weatherEssentials 有停电功能
            if state then
                exports['b2_weatherEssentials']:TriggerBlackout()
                print("^3[HGadmin] b2_weatherEssentials: 启用停电^7")
            else
                exports['b2_weatherEssentials']:ClearBlackout()
                print("^3[HGadmin] b2_weatherEssentials: 禁用停电^7")
            end
        end,
        getTimeFreezeState = function()
            -- b2_weatherEssentials 没有直接的状态获取函数
            print("^3[HGadmin] b2_weatherEssentials: 无法直接获取时间冻结状态^7")
            return false
        end,
        getWeatherState = function()
            -- 使用 GetCurrentWeather 导出函数获取当前天气
            local success, weather = pcall(function()
                return exports['b2_weatherEssentials']:GetCurrentWeather()
            end)
            if success then
                return weather
            else
                print("^3[HGadmin] b2_weatherEssentials: 无法获取当前天气^7")
                return "UNKNOWN"
            end
        end,
        getExtremeWeather = function()
            -- 使用 GetCurrentExtremeWeather 导出函数获取极端天气状态
            local success, extremeWeather = pcall(function()
                return exports['b2_weatherEssentials']:GetCurrentExtremeWeather()
            end)
            if success then
                return extremeWeather
            else
                print("^3[HGadmin] b2_weatherEssentials: 无法获取极端天气状态^7")
                return false
            end
        end
    },
}
-- 获取当前使用的时间天气系统接口
Config.GetTimeWeatherSystem = function()
    local detectedSystem = DetectTimeWeatherSystem()
    return Config.TimeWeatherInterface[detectedSystem] or {
        setWeather = function(weatherType)
            print("^1[HGadmin] 错误: 未找到可用的时间天气系统接口^7")
        end,
        setTime = function(hour, minute)
            print("^1[HGadmin] 错误: 未找到可用的时间天气系统接口^7")
        end,
        setTimeFreeze = function(freeze)
            print("^1[HGadmin] 错误: 未找到可用的时间天气系统接口^7")
        end,
        getTimeFreezeState = function()
            print("^1[HGadmin] 错误: 未找到可用的时间天气系统接口^7")
            return false
        end
    }
end
Config.Garage = 'xiaoha garage' 
-- 给车默认车库名
-- Default garage name for vehicles.
-- 按键提示的语言配置
Config.ButtonInstructions = {
    ["zh-CN"] = { -- 简体中文
        faster = "加速",
        slower = "减速",
        forward_back = "前后移动",
        left_right = "左右移动",
        move_down = "向下移动",
        move_up = "向上移动",
        noclip_speed = "~r~无碰撞模式 ~s~[速度: ~y~%.1f~s~] - ~r~%s~s~ 停止",
        noclip_controls = "上升[Q] 下降[E] 前进[W] 后退[S] 左转[A] 右转[D] 加速[SHIFT]"
    },
    ["zh-TW"] = { -- 繁体中文
        faster = "加速",
        slower = "減速",
        forward_back = "前後移動",
        left_right = "左右移動",
        move_down = "向下移動",
        move_up = "向上移動",
        noclip_speed = "~r~無碰撞模式 ~s~[速度: ~y~%.1f~s~] - ~r~%s~s~ 停止",
        noclip_controls = "上升[Q] 下降[E] 前進[W] 後退[S] 左轉[A] 右轉[D] 加速[SHIFT]"
    },
    ["en"] = { -- 英语
        faster = "Faster",
        slower = "Slower",
        forward_back = "Forward/Back",
        left_right = "Left/Right",
        move_down = "Move Down",
        move_up = "Move Up",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["es"] = { -- 西班牙语
        faster = "Más rápido",
        slower = "Más lento",
        forward_back = "Adelante/Atrás",
        left_right = "Izquierda/Derecha",
        move_down = "Bajar",
        move_up = "Subir",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["fr"] = { -- 法语
        faster = "Plus vite",
        slower = "Plus lent",
        forward_back = "Avant/Arrière",
        left_right = "Gauche/Droite",
        move_down = "Descendre",
        move_up = "Monter",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["de"] = { -- 德语
        faster = "Schneller",
        slower = "Langsamer",
        forward_back = "Vorwärts/Rückwärts",
        left_right = "Links/Rechts",
        move_down = "Nach unten",
        move_up = "Nach oben",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["it"] = { -- 意大利语
        faster = "Più veloce",
        slower = "Più lento",
        forward_back = "Avanti/Indietro",
        left_right = "Sinistra/Destra",
        move_down = "Giù",
        move_up = "Su",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["ja"] = { -- 日语
        faster = "加速",
        slower = "減速",
        forward_back = "前後移動",
        left_right = "左右移動",
        move_down = "下降",
        move_up = "上昇",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["ko"] = { -- 韩语
        faster = "가속",
        slower = "감속",
        forward_back = "전후 이동",
        left_right = "좌우 이동",
        move_down = "하강",
        move_up = "상승",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["ru"] = { -- 俄语
        faster = "Быстрее",
        slower = "Медленнее",
        forward_back = "Вперед/Назад",
        left_right = "Влево/Вправо",
        move_down = "Вниз",
        move_up = "Вверх",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["pt"] = { -- 葡萄牙语
        faster = "Mais rápido",
        slower = "Mais lento",
        forward_back = "Frente/Trás",
        left_right = "Esquerda/Direita",
        move_down = "Descer",
        move_up = "Subir",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["pl"] = { -- 波兰语
        faster = "Szybciej",
        slower = "Wolniej",
        forward_back = "Przód/Tył",
        left_right = "Lewo/Prawo",
        move_down = "W dół",
        move_up = "W górę",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["tr"] = { -- 土耳其语
        faster = "Daha hızlı",
        slower = "Daha yavaş",
        forward_back = "İleri/Geri",
        left_right = "Sol/Sağ",
        move_down = "Aşağı",
        move_up = "Yukarı",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    },
    ["nl"] = { -- 荷兰语
        faster = "Sneller",
        slower = "Langzamer",
        forward_back = "Vooruit/Achteruit",
        left_right = "Links/Rechts",
        move_down = "Omlaag",
        move_up = "Omhoog",
        noclip_speed = "~r~NOCLIP ACTIVE ~s~[SPEED: ~y~%.1f~s~] - ~r~%s~s~ TO STOP",
        noclip_controls = "UP[Q] DOWN[E] FORWARD[W] BACK[S] LEFT[A] RIGHT[D] BOOST[SHIFT]"
    }
}
-- 设置当前语言
Config.Language = "zh-CN" -- 可选值: "zh-CN", "zh-TW", "en", "es", "fr", "de", "it", "ja", "ko", "ru", "pt", "pl", "tr", "nl" 等
-- 获取按键提示文本的函数
Config.GetButtonText = function(key)
    local lang = Config.ButtonInstructions[Config.Language] or Config.ButtonInstructions["en"]
    return lang[key] or Config.ButtonInstructions["en"][key]
end
-- ============================================================================
-- 权限配置说明 (Permission Configuration Notice)
-- ============================================================================
-- 所有权限配置已移至游戏内员工管理系统，以下配置已废弃
-- All permission configurations have been moved to the in-game staff management system
-- 
-- 请使用以下方式配置权限:
-- Please use the following methods to configure permissions:
-- 1. 在 Config.SuperAdmins 中配置超级管理员（拥有所有权限）
--    Configure super admins in Config.SuperAdmins (have all permissions)
-- 2. 在游戏内使用员工管理页面创建权限组并分配权限
--    Use the in-game staff management page to create permission groups and assign permissions
-- 3. 在游戏内将玩家添加到对应的权限组
--    Add players to corresponding permission groups in-game
-- ============================================================================

-- 旧的权限配置（已废弃，仅保留用于兼容性，不再生效）
-- Old permission configuration (deprecated, kept for compatibility, no longer effective)
Config.Permissions = {
    -- 此配置已不再使用，所有权限请在游戏内员工管理系统中配置
    -- This configuration is no longer used, please configure all permissions in the in-game staff management system
}
-------------------------------------------------------------------------------  
-- 以下资源如果您不知道您在做什么可以不用去修改他，
-- 如果您进行随意的修改可能会引发出一系列很多的问题
-- 因此而引发的问题，请到keymaster重新更新脚本即可解决谢谢
-- Do not modify the resources below unless you know what you're doing.
-- Random changes might cause various issues. If problems occur, update the script from Keymaster to fix it.

function DebugTrace(message)
    if Config.EnableDebug then
        print("^3[HGadmin-v3] ("..GetCurrentResourceName()..")]^7 "..message)
    end
end
function print_table(node)
    local cache, stack, output = {}, {}, {}
    local depth = 1
    local output_str = "{\n"
    while true do
        local size = 0
        for k,v in pairs(node) do
            size = size + 1
        end
        local cur_index = 1
        for k,v in pairs(node) do
            if (cache[node] == nil) or (cur_index >= cache[node]) then
                if (string.find(output_str,"}",output_str:len())) then
                    output_str = output_str .. ",\n"
                elseif not (string.find(output_str,"\n",output_str:len())) then
                    output_str = output_str .. "\n"
                end
                table.insert(output,output_str)
                output_str = ""
                local key
                if (type(k) == "number" or type(k) == "boolean") then
                    key = "["..tostring(k).."]"
                else
                    key = "['"..tostring(k).."']"
                end
                if (type(v) == "number" or type(v) == "boolean") then
                    output_str = output_str .. string.rep('\t',depth) .. key .. " = "..tostring(v)
                elseif (type(v) == "table") then
                    output_str = output_str .. string.rep('\t',depth) .. key .. " = {\n"
                    table.insert(stack,node)
                    table.insert(stack,v)
                    cache[node] = cur_index+1
                    break
                else
                    output_str = output_str .. string.rep('\t',depth) .. key .. " = '"..tostring(v).."'"
                end
                if (cur_index == size) then
                    output_str = output_str .. "\n" .. string.rep('\t',depth-1) .. "}"
                else
                    output_str = output_str .. ","
                end
            else
                if (cur_index == size) then
                    output_str = output_str .. "\n" .. string.rep('\t',depth-1) .. "}"
                end
            end

            cur_index = cur_index + 1
        end
        if (size == 0) then
            output_str = output_str .. "\n" .. string.rep('\t',depth-1) .. "}"
        end
        if (#stack > 0) then
            node = stack[#stack]
            stack[#stack] = nil
            depth = cache[node] == nil and depth + 1 or depth - 1
        else
            break
        end
    end
    table.insert(output,output_str)
    output_str = table.concat(output)
    print(output_str)
end
-- 从玩家源中提取标识符的函数
function ExtractIdentifiers(src)
    local identifiers = {
        steam = "",  -- 存储Steam标识符
        ip = "",     -- 存储IP地址标识符
        discord = "", -- 存储Discord标识符
        license = "", -- 存储许可证标识符
        xbl = "",    -- 存储Xbox Live标识符
        live = ""    -- 存储Live标识符
    }
    -- 循环遍历所有标识符
    for i = 0, GetNumPlayerIdentifiers(src) - 1 do
        local id = GetPlayerIdentifier(src, i)
        -- 将标识符转换为易于管理的表
        if string.find(id, "steam") then
            identifiers.steam = id
        elseif string.find(id, "ip") then
            identifiers.ip = id
        elseif string.find(id, "discord") then
            identifiers.discord = id
        elseif string.find(id, "license") then
            identifiers.license = id
        elseif string.find(id, "xbl") then
            identifiers.xbl = id
        elseif string.find(id, "live") then
            identifiers.live = id
        end
    end
    return identifiers
end
-- 实体枚举器，用于垃圾回收
local entityEnumerator = {
    __gc = function(enum)
      if enum.destructor and enum.handle then
        enum.destructor(enum.handle)
      end
      enum.destructor = nil
      enum.handle = nil
    end
  }
-- 枚举实体的通用函数
local function EnumerateEntities(initFunc, moveFunc, disposeFunc)
    return coroutine.wrap(function()
      local iter, id = initFunc()
      if not id or id == 0 then
            disposeFunc(iter)
            return
        end
        local enum = {handle = iter, destructor = disposeFunc}
        setmetatable(enum, entityEnumerator)
        local next = true
        repeat
            coroutine.yield(id)
            next, id = moveFunc(iter)
        until not next
        enum.destructor, enum.handle = nil, nil
        disposeFunc(iter)
    end)
end
-- 枚举对象
function EnumerateObjects()
    return EnumerateEntities(FindFirstObject, FindNextObject, EndFindObject)
end
-- 枚举行人
function EnumeratePeds()
    return EnumerateEntities(FindFirstPed, FindNextPed, EndFindPed)
end
-- 枚举车辆
function EnumerateVehicles()
    return EnumerateEntities(FindFirstVehicle, FindNextVehicle, EndFindVehicle)
end
-- 枚举拾取物
function EnumeratePickups()
    return EnumerateEntities(FindFirstPickup, FindNextPickup, EndFindPickup)
end
-- ============================================
-- 旧 Webhook 配置（已弃用，保留向后兼容）
-- 请使用新的 Config.KookWebhook 配置
-- ============================================
Config.ScreenshotWebhook = ""
Config.LogsWebhook = ""
Config.EnableWebhook = Config.KookWebhook and Config.KookWebhook.Enable or false

-- Webhook 类型枚举（保留向后兼容）
Config.WebhookTypes = {
    SCREENSHOT = "screenshot",
    LOG = "log",
    BAN = "ban",
    ADMIN = "admin"
}

-- 旧的辅助函数（已弃用，返回空值）
Config.GetWebhookURL = function(type) return nil end
Config.IsWebhookEnabled = function(type) return false end
Config.GetWebhookConfig = function()
    return { throttle = 1000, batchSize = 5, quality = 0.8, retentionDays = 7 }
end
-- 传送位置配置
-- Teleport Locations Configuration
-- 
-- 使用说明 / Usage Instructions:
-- 1. 您可以修改现有位置的坐标、名称和描述
--    You can modify coordinates, names, and descriptions of existing locations
-- 2. 添加新位置：复制现有格式，使用新的键名
--    To add new locations: Copy existing format with a new key name
-- 3. 删除位置：直接删除对应的条目
--    To remove locations: Simply delete the corresponding entry
-- 4. 坐标格式：vector3(x, y, z) 其中 x, y, z 为游戏内坐标
--    Coordinate format: vector3(x, y, z) where x, y, z are in-game coordinates
--
-- 示例添加自定义位置 / Example of adding custom location:
-- ["casino"] = {
--     coords = vector3(925.0, 46.0, 81.0),
--     name = "Diamond Casino",
--     description = "钻石赌场 (Diamond Casino & Resort)"
-- },
--
Config.TeleportLocations = {
    -- 每个位置包含坐标 (x, y, z) 和显示名称
    -- Each location contains coordinates (x, y, z) and display name
    ["legion"] = {
        coords = vector3(215.75, -804.26, 30.81),
        name = "Legion Square",
        description = "市中心军团广场 (Downtown Legion Square)"
    },
    ["pillbox"] = {
        coords = vector3(299.01, -577.48, 43.26),
        name = "Pillbox Hospital",
        description = "枕盒医院 (Pillbox Medical Center)"
    },
    ["lsc"] = {
        coords = vector3(-366.58, -126.01, 38.69),
        name = "Los Santos Customs",
        description = "洛圣都改装店 (Los Santos Customs)"
    },
    ["mrpd"] = {
        coords = vector3(415.41, -993.4, 29.38),
        name = "Mission Row PD",
        description = "任务街警察局 (Mission Row Police Department)"
    },
    ["sandy"] = {
        coords = vector3(1963.56, 3735.19, 32.2),
        name = "Sandy Shores",
        description = "沙滩海岸 (Sandy Shores)"
    },
    ["grapeseed"] = {
        coords = vector3(1692.89, 4942.49, 42.32),
        name = "Grapeseed",
        description = "葡萄籽镇 (Grapeseed Town)"
    },
    ["paleto"] = {
        coords = vector3(125.64, 6611.6, 31.86),
        name = "Paleto Bay",
        description = "帕莱托湾 (Paleto Bay)"
    },
    ["lsia"] = {
        coords = vector3(-1021.81, -2701.25, 13.76),
        name = "Los Santos Airport",
        description = "洛圣都国际机场 (Los Santos International Airport)"
    },
    -- ["ceshi"] = {
    --     coords = vector3(1000.0, 1000.0, 1000.0),
    --     name = "ceshi",
    --     description = "测试位置描述"
    -- }
    
    -- 在这里添加您的自定义传送位置
    -- Add your custom teleport locations here
    -- 格式示例 / Format example:
    -- ["your_location_key"] = {
    --     coords = vector3(x, y, z),
    --     name = "Your Location Name",
    --     description = "Your location description"
    -- },
}
-- 获取传送位置坐标的辅助函数
-- Helper function to get teleport coordinates
Config.GetTeleportCoords = function(locationKey)
    local location = Config.TeleportLocations[locationKey]
    if location then
        return location.coords
    end
    return nil
end
-- 获取传送位置信息的辅助函数
-- Helper function to get teleport location info
Config.GetTeleportInfo = function(locationKey)
    return Config.TeleportLocations[locationKey]
end
-- 检查传送位置是否存在的辅助函数
-- Helper function to check if teleport location exists
Config.TeleportLocationExists = function(locationKey)
    return Config.TeleportLocations[locationKey] ~= nil
end
-- 传送操作配置
-- Teleport Actions Configuration
-- 这里配置了所有可用的传送操作，包括action名称、对应的位置键、显示名称和成功消息
-- This configures all available teleport actions including action name, location key, display name and success message
Config.TeleportActions = {
    ["sendtolegion"] = {
        locationKey = "legion",
        alertKey = "sentToLegion",
        enabled = true
    },
    ["sendtopillbox"] = {
        locationKey = "pillbox", 
        alertKey = "sentToPillbox",
        enabled = true
    },
    ["sendtolsc"] = {
        locationKey = "lsc",
        alertKey = "sentToCustoms", 
        enabled = true
    },
    ["sendtomrpd"] = {
        locationKey = "mrpd",
        alertKey = "sentToMRPD",
        enabled = true
    },
    ["sendtosandy"] = {
        locationKey = "sandy",
        alertKey = "sentToSandy",
        enabled = true
    },
    ["sendtograpeseed"] = {
        locationKey = "grapeseed",
        alertKey = "sentToGrapeseed", 
        enabled = true
    },
    ["sendtopaleto"] = {
        locationKey = "paleto",
        alertKey = "sentToPaleto",
        enabled = true
    },
    ["sendtolsia"] = {
        locationKey = "lsia",
        alertKey = "sentToLSA",
        enabled = true
    },
    ["sendtoceshi"] = {
        locationKey = "ceshi",
        alertKey = "sentToCeshi",
        enabled = true
    }
}
-- 处理传送操作的辅助函数
-- Helper function to handle teleport actions
Config.HandleTeleportAction = function(action, currentPlayer)
    local teleportConfig = Config.TeleportActions[action]
    if not teleportConfig then
        return false, "传送配置不存在"
    end
    if not teleportConfig.enabled then
        return false, "此传送位置已被禁用"
    end
    local coords = Config.GetTeleportCoords(teleportConfig.locationKey)
    if not coords then
        return false, "传送位置坐标无效"
    end
    -- 触发服务器事件进行传送
    TriggerServerEvent("HGadmin-v3:server:SetPosition", currentPlayer, coords.x, coords.y, coords.z)
    -- 显示成功提示
    if teleportConfig.alertKey then
        TriggerEvent("HGadmin-v3:client:ShowPanelAlert", "success", 
            "<strong>"..Lang:t("alerts.success").."</strong> "..Lang:t("alerts."..teleportConfig.alertKey))
    end
    return true, "传送成功"
end
-- 获取所有启用的传送操作
-- Get all enabled teleport actions
Config.GetEnabledTeleportActions = function()
    local enabledActions = {}
    for action, config in pairs(Config.TeleportActions) do
        if config.enabled then
            enabledActions[action] = config
        end
    end
    return enabledActions
end
-- 动态添加传送位置和操作的函数
-- Function to dynamically add teleport locations and actions
Config.AddTeleportLocation = function(locationKey, coords, name, description, actionKey, alertKey, enabled)
    -- 添加传送位置
    Config.TeleportLocations[locationKey] = {
        coords = coords,
        name = name,
        description = description
    }
    -- 添加传送操作（如果提供了action信息）
    if actionKey then
        Config.TeleportActions[actionKey] = {
            locationKey = locationKey,
            alertKey = alertKey or "sentToCeshi", -- 默认使用测试位置的提示
            enabled = enabled ~= false -- 默认启用
        }
    end
end
```
::: 