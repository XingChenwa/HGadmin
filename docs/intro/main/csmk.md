# 模块化传送系统使用说明

##  文件结构

```
├── config.lua                    # 传送位置和操作配置
├── client/
│   ├── main.lua                  # 主客户端文件 (已优化)
│   └── chuansong.lua            # 传送模块文件 (新增)
└── fxmanifest.lua               # 资源清单 (已更新)
```


### 3. **配置文件** (`config.lua`)
-  **Config.TeleportLocations** - 传送位置配置
-  **Config.TeleportActions** - 传送操作配置
-  **辅助函数** - GetTeleportCoords, GetTeleportInfo 等



## 🚀 如何使用

### 1. **查看可用传送位置**
```sh
/listteleports
```
这个命令会列出所有配置的传送位置和操作。

### 2. **测试传送功能**
```sh
/testteleport sendtolegion
```
测试传送到军团广场功能。

### 3. **添加新传送位置**

#### 步骤 1: 在 `config.lua` 中添加位置
```lua
Config.TeleportLocations["myplace"] = {
    coords = vector3(100.0, 200.0, 30.0),
    name = "My Custom Place",
    description = "我的自定义位置"
}
```

#### 步骤 2: 添加传送操作
```lua
Config.TeleportActions["sendtomyplace"] = {
    locationKey = "myplace",
    successMessage = "已传送到我的地点",
    displayName = "我的地点"
}
```

#### 步骤 3: 更新前端按钮
在 `HGadmin-v3UI/dist/setting.js` 中添加：
```javascript
{
    name: 'management.player_info.config.myplace',
    id: 'sendtomyplace',
}
```

## 🔧 调试功能

### 可用的调试命令:
- `/listteleports` - 列出所有传送位置和操作
- `/testteleport <actionId>` - 测试指定的传送操作

### 调试信息:
传送模块会在控制台输出详细的调试信息，包括：
-  成功传送的信息
-  配置错误的警告
-  传送失败的错误信息



##  故障排除

### 常见问题:

1. **传送按钮不显示**
   - 检查 `HGadmin-v3UI/dist/setting.js` 是否添加了按钮配置
   - 确认 `Config.TeleportActions` 中有对应的操作配置

2. **传送失败**
   - 使用 `/listteleports` 检查配置是否正确
   - 查看控制台的错误信息
   - 确认坐标格式正确 (vector3)

3. **模块未加载**
   - 检查 `fxmanifest.lua` 是否包含 `client/chuansong.lua`
   - 重启资源后查看控制台是否显示 "传送模块已加载"

##  未来扩展

这个模块化系统为未来的功能扩展提供了基础：
- 传送权限系统
- 传送历史记录
- 传送冷却时间
- 区域限制传送
- 传送特效和音效

模块化的设计使得这些功能可以轻松添加，而不影响现有代码！ 