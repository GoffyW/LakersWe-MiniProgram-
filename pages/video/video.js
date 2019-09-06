//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    danmu_list: [
      {
        text: "后仰美如画",
        time: 3,
        color: "#f00"
      },
      {
        text: "湖人总冠军",
        time: 3,
        color: "#f00"
      }
    ]
  },
  inputValue: '',
  onReady: function () {
    this.videoContext = wx.createVideoContext("videoplay")
  },
  bindDatas: function (e) {
    this.inputValue = e.detail.value;
  },
  senddanmu: function () {
    //  var col = ["red", "black", "yellow", "blue"];
    //  var cols =col[Math.floor(Math.random()*col.length)];
    this.videoContext.sendDanmu({
      text: this.inputValue,
      time: 5,
      color: this.getRandomcol()
    })
  },
  getRandomcol: function () {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  },
})
