// pages/cart/cart.js
var arr = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCart: false,
    lacart: [],
    qxChecked: false
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
    arr = wx.getStorageSync('cart')
    this.checkedall();
    if (arr.length > 0) {
      this.setData({
        isCart: true
      })
    } else {
      this.setData({
        isCart: false
      })
    }
  },
  checkedall: function () {
    var fa = true;
    var sum = 0;
    var pay = 0;
    for (var k = 0; k < arr.length; k++) {
      if (arr[k].check == true) {
        sum = sum + Number(arr[k].minCount) * Number(arr[k].price);
        pay = pay + Number(arr[k].minCount);
      } else {
        fa = false;
      }

    }
    if (sum == 0 && arr.length == 0) {
      this.setData({
        isCart: false
      })
    } else {
      this.setData({
        isCart: true,
        qxChecked: fa,
        goodsCount: pay,
        total: sum.toFixed(2),
        lacart: arr
      })
    }
    try {
      wx.setStorageSync('cart', arr);
    } catch (e) {
      console.log(e)
    }
  },
  Delete: function (e) {
    var i = e.target.dataset.id;
    arr.splice(i, 1);
    this.checkedall();
  },
  addgoods: function (e) {
    var i = e.target.dataset.id;
    arr[i].check = true;
    arr[i].minCount++;
    this.checkedall();
  },
  delgoods: function (e) {
    var i = e.target.dataset.id;
    if (arr[i].minCount > 1) {
      arr[i].check = true;
      arr[i].minCount--;
      this.checkedall();
    }
  },
  dxCheck: function (e) {
    var id = e.target.dataset.id;
    arr[id].check = !arr[id].check;
    this.checkedall();
  },
  allchecked: function (e) {
    var qx = !this.data.qxChecked;
    for (var p = 0; p < arr.length; p++) {
      arr[p].check = qx;
    }
    this.checkedall();
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