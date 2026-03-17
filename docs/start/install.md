# 安装插件

::: tip 注意
支持 [**ESX_core**](https://github.com/esx-framework/esx_core) 、[**qbcore**](https://qbcore.net/) <br>
:::


### 安装说明 第一步 你从 你keymaster上下载下来之后  有 5个文件 

1. `esx_weathersync`
2. `qb-weathersync`
3. `screenshot-basic`

4. `HGadmin-v3`     这个是单管理员 
5. `HGadmin-v3_extra`   这个是云管理 web 扩展 

这以上都是 依赖项目 `weathersync` 是天气依赖  `screenshot-basic` 是用于截图的依赖  如果你本来 服务器上拥有了， 即可不用在安装  
然后 我们将我们的依赖脚本  
丢进 一个 `[admin]`  这么一个文件夹  丢进`server.cfg` 里面 写一个启动项目即可 
像 如下 `ensure [admin]`   然后将我们的这些脚本 放进这么一个文件夹 里面直接启动即可  

天气依赖， 根据您使用的是 `qb` 框架 还是 `ESX` 框架留下哪个天气插件即可 
下载出来有以下两个文件，删除一个启动`[admin]`即可
1. `esx_weathersync`
2. `qb-weathersync`

或者是

#### 以下按不同框架改动天气插件（留一个下载出来是两个文件的）
::: code-group

``` [QB]
start qb-weathersync
```

``` [ESX]
start esx_weathersync
```
:::

以及 您需要在`server.cfg`添加一条指令  否则您的实时控制台 会无法输入命令 

```
add_ace resource.HGadmin-v3 command allow
```
在 config.lua 中配置超级管理员，超级管理员拥有所有权限且无法被限制：
```lua
Config.SuperAdmins = {
    -- "license:6b593f69c7ed2803f462248c1f02c285f947322c",
    -- "discord:123456789012345678",
    -- "steam:110000xxxxxxxxx",
}
```
来到这里 配置您的最高标识符 权限 如 无配置最高权限 则 无法使用全部功能   由最高 权限者 `superadmin`  在游戏内使用 员工权限系统 给您的其他管理员 分配权限事件  代替  原本 `config.lua` 权限组 的事件逻辑 不用在`config` 一个一个配置 每一个权限组的可使用权限了 
一切可以在游戏里配置 ，更加方便  而且可以在游戏里创建多个权限组事件， 更加安全可靠 


这里温馨提示， 切勿将 代码编辑器 的权限 交给您不可相信的管理员   否则后果自负  不要轻易给人上`superadmin` 权限， 这将是最高权限 可直接实时修改您的服务端代码 并保存， 如果保存后，您的代码将会被修改， 无法恢复 ！！！ 不要交给不信任的人 这个权限！！！

然后 如 使用`qb`框架的  或者 `qs`库存的，这些将您的物品代码如果是写在`qbcore` 核心里面的 需 手动在  `HGadmin-v3/config.lua`    将 默认的 `auto` 选择 为`qb` 即可 
```lua
Config.Inventory = "auto" -- 可选值: "auto", "ox", "qs", "qb", "ps", "tgiann", "ms_inventory", "codem-inventory", "origen_inventory" -- 目前仅支持这些库存 qb库存的方式是获取qbcore的items.lua 的物品，

-- Use "ox" or "qs" "ms_inventory" "tgiann" "codem-inventory" "ps" "qb". Leave empty to use the framework's default database method.
```
为什么 我使用不了截图玩家？ 截图没有反应？  您也许是没有安装 `screenshot-basic` 本脚本自带了 这个项目 如没有安装需要安装， 如已有 则不需要在安装， 能否明白？

您进入游戏后 默认打开管理员菜单的命令 是  `/xiaoha`  或者使用按键绑定 
```
Config.anjian = 'PAGEUP'      -- 可修改为HOME，或者您想要的按键，此功能可在游戏里的设置找到按键绑定，里面修改到别的键位，  作者自用PGUP，因为作者键盘没有HOME键，所以默认PGUP，可自行修改为其他按键
```



