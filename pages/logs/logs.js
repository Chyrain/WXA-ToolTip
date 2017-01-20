//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    userInfo: {}
  },
  onLoad: function () {
    this.setData({
      userInfo: getApp().globalData.userInfo,
      logs: (wx.getStorageSync('logs') || []).map(function (log, index) {
        return { index:index, msg:'this is log content', time: util.formatTime(new Date(log))}
      })
    })
    console.log('app.globalData => ');
    console.log(getApp().globalData);
  }
})
