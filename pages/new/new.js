//logs.js
const util = require('../../utils/util.js')

Page({
  data: {

  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b4d4f7f4221704eaec31dc7/nbaLakers/nbaLakersNews',
      data: {},
      header: {
        "Content-Type": "json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
        that.setData({
          teamlist: res.data.data
        })
      }
    })
  },
  click_item: function (e) {
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id=' + e.currentTarget.id,
    })
  }
})
