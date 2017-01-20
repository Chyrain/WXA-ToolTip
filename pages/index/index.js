//index.js
// 在顶部引入toolTip.js
var toolTip = require('../ToolTip/toolTip.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // 在onLoad中初始化toolTip
    toolTip.init(this);

    console.log('onLoad', toolTip);
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo) {
      console.log('userInfo => ', userInfo);

      // 调用showToolTip显示提示信息，参数:
      // type:'success'|'info'|'warn'|'error', 
      // text:内容
      // delay:延迟消失时间,不填不自动消失,只有success\info类型会自动消失
      toolTip.showToolTip('success', '成功获取用户信息', 2000);

      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  successTap: function(e) {
    toolTip.showToolTip('success', '显示success信息', 2000);
  },
  infoTap: function(e) {
    toolTip.showToolTip('info', '显示info信息', 2000);
  },
  warnTap: function(e) {
    toolTip.showToolTip('warn', '显示warn信息', 3000);
  },
  errorTap: function(e) {
    toolTip.showToolTip('error', '显示error信息', 3000);
  }
})
