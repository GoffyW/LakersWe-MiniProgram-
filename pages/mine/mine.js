// pages/mine/mine.js
Page({

  bindView:function(){
    var that = this;
    wx.showModal({
      title: '登录',
      content: '是否立即登录',
      success:function(res){
        
        if (res.confirm) {
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              that.setData({
                userInfo: userInfo
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }  
      }
    })
  },

  //留言跳转页面
  ideaClick:function(){
    wx.navigateTo({
      url: '../idea/idea',
    })
  },
  //图集跳转页面
  picClick: function () {
    wx.navigateTo({
      url: '../pic/pic',
    })
  },
  cartClick: function () {
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  videoClick: function () {
    wx.navigateTo({
      url: '../video/video',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    avatarUrl: '',
    nickName: ''
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})