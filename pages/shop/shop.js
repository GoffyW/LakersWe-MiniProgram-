//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b4d4f7f4221704eaec31dc7/nbaLakers/nbaLakersCart',
      data: {},
      header: {
        "Content-Type": "json"
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          goodslist: res.data.data
        })
      }
    })
  },
  next: function () {
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  addCartLK: function (e) {
    this.addCart(e, this.data.goodslist)
  },
  addCart: function (e, addCart) {
    for (var i in addCart) {
      if (addCart[i].id == e.currentTarget.id) {
        addCart[i].minCount = 1;
        addCart[i].checked = true;
        // 获取购物车的缓存数据（数组），如果没有数据，则给其赋一空数组
        var arr = wx.getStorageSync("cart") || [];
        // 提示框显示
        wx.showToast({
          title: "成功加入购物车",
          icon: "success",
          duration: 1000
        })
        // 如果购物车有数据
        if (arr.length > 0) {
          // 遍历购物车数组，判断添加数据购物车是否已经包含
          for (var j in arr) {
            if (arr[j].id == e.currentTarget.id) {
              arr[j].minCount = arr[j].minCount + 1;
              try {
                // 数组重新赋值
                wx.setStorageSync('cart', arr);
              } catch (e) {
                console.log(e);
              }
              return;
            }
          }
          arr.push(addCart[i]);
        } else {
          arr.push(addCart[i]);
        }
        try {
          wx.setStorageSync('cart', arr);
          console.log(arr);
        } catch (e) {

        }
      }
    }
  },
})
