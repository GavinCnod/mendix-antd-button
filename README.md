## 介绍
基于 Ant Design Button 组件封装的 Mendix Pluggable Widget，标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
A button means an operation (or a series of operations). This widget provide a Ant Design Button in Mendix. Clicking a Button will trigger some logic in Mendix.

## 功能特性
1. 在 Ant Design 中我们提供了五种按钮。
    * 主按钮（Primary）：用于主行动点，一个操作区域只能有一个主按钮。
    * 默认按钮（Default）：用于没有主次之分的一组行动点。
    * 虚线按钮（Dashed）：常用于添加操作。
    * 文本按钮（Text）：用于最次级的行动点。
    * 链接按钮（Link）：一般用于链接，即导航至某位置。

2. 以及三种状态属性与上面配合使用。
    * 危险（Danger）：删除/移动/修改权限等危险操作，一般需要二次确认。
    * 幽灵（Ghost）：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
    * 禁用（Disabled)：行动点不可用的时候，一般需要文案解释。

3. 提供大中小三种尺寸级别。
4. 提供默认（Default）、圆形（Circle）和圆角（Round）三种形状选项。
5. 提供 Block 设置用于实现父容器全宽按钮。

## 快速安装和使用

### 将该组件添加到 Mendix Project 中
1. 从右边 Releases 处下载 mpk 文件。
2. 把 mpk 文件复制到您的 Project 目录下 `{YourMendixProjectFolder}/widgets/`
3. 用 Mendix Studio Pro 打开你的 Mendix Project，然后点击菜单 `Menu > App > Synchronize App Directory`.

### 快速配置组件

1. 选择任意页面，向页面添加一个 `Antd Button`。
2. 为该组件设置必要的属性。包括： `Caption`, `Type`, `Shape`, `Size`, `Block` , `OnClick Event` 等。
   <img width="432" alt="button-helper-01" src="https://user-images.githubusercontent.com/24690236/205483634-94b15cf8-0f51-4f36-b17a-f24e7111bc41.png">
   
   <img width="436" alt="button-helper-02" src="https://user-images.githubusercontent.com/24690236/205483661-6bfe514c-2462-45e4-a5be-79ca46f1053c.png">
3. 运行。
   
## Demo 项目

1. 你可以在[这里](todo)访问在线 demo。  
2. 也可以下载 demo project，在自己的 Mendix Studio Pro 上启动运行。具体方法如下：
    1. clone demo project。
    2. 运行。

## 详细配置说明
### Main Section
* Caption：按钮文本。
* Button Type：设置按钮类型。
* Button Shape：设置按钮形状。
* Button Size：设置按钮大小
* Button Block：设置是否为全宽按钮。
### Status Section
* Disabled：是否禁用按钮事件，默认为`No`.
* Danger：是否为危险按钮，默认为`No`.
* Ghost：是否为幽灵按钮，默认为`No`.
### Event Section
* OnClick Event：点击按钮事件。

## 与 `antd` Button 的功能对比

这里列举了 `antd` 中 `Button` 的所有参数，并说明了该组件是否支持该属性，以及不支持的原因。如果想查看`antd`中原属性的含义，请[移步这里](https://ant.design/components/button)。

| antd 组件参数             | 参数说明                                       | 是否支持 | 备注                   |
| --------------------- | ------------------------------------------ | ---- | -------------------- |
| block            | 将按钮宽度调整为其父宽度的选项                    | Y    |                      |
| danger              | 设置危险按钮                                  | Y    |                     |
| disabled            | 按钮失效状态                    | Y    |                      |
| ghost              | 幽灵属性，使按钮背景透明                                  | Y    |                     |
| href            | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致                    | N    | Mendix 中无需使用该参数           |
| ghost              | 幽灵属性，使按钮背景透明                                  | Y    |                     |
| icon                  | 设置按钮的图标组件                    | N    | 存在 CSS 覆盖问题待补全     |
| loading                | 设置按钮载入状态                                | N    | 需求较小，后续实现                     |
| shape                | 设置按钮形状                                | Y    |                      |
| size            | 设置按钮大小                            | Y    |                      |
| target                 | 相当于 a 链接的 target 属性，href 存在时生效            | N    | Mendix 中无需使用该参数                     |
| type              | 设置按钮类型                              | Y    |                      |
| onClick             | 点击按钮的回调                              | Y    |                      |

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
