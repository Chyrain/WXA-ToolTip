# WXA-ToolTip
微信小程序-ToolTip信息提示组件

<img src="https://raw.githubusercontent.com/Chyrain/MDPictures/master/res/tooltip.gif" width = "330" alt="toolTip" align=center />

## 导入
将ToolTip文件夹复制到pages文件夹内

## 使用
- 在需要使用ToolTip的页面对应的.wxml文件中添加：
```
<import src="../ToolTip/toolTip.wxml"/>

<!-- 引入toolTip模板 -->
<template is="toolTip" data="{{_toolTip_}}"/>
```
- 在需要使用ToolTip的页面对应的.wxss文件顶部添加：
```
@import "./ToolTip/toolTip.wxss";
```
- 在.js中调用：
```
// 在顶部引入toolTip.js
var toolTip = require('../ToolTip/toolTip.js');

// 在onLoad中初始化toolTip
toolTip.init(this);

// 调用showToolTip显示提示信息，参数:
// type:类型包含'success'|'info'|'warn'|'error', 
// text:内容
// delay:延迟消失时间,不填不自动消失,只有success|info类型会自动消失
toolTip.showToolTip('success', '显示success提示', 2000);
```