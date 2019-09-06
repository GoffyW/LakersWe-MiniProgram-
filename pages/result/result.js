//logs.js
const util = require('../../utils/util.js')

let content=[ 
  { content: "客队MVP：凯文-杜兰特：24分6板2助"+  "\r\n" + "主队MVP：科比-布莱恩特：21分2板3助"},
  { content: "客队MVP：凯文-杜兰特：32分8板1助" + "\r\n" + "主队MVP：科比-布莱恩特：39分5板1助" },
  { content: "客队MVP：科比-布莱恩特：24分4板8助" + "\r\n" + "主队MVP：凯文-杜兰特：29分19板4助" },
  { content: "客队MVP：保罗-加索尔：13分4板3助" + "\r\n" + "主队MVP：凯文-杜兰特：22分4板1助" },
  { content: "客队MVP：保罗-加索尔：25分11板5助" + "\r\n" + "主队MVP：凯文-杜兰特：17分3板3助" },
  { content: "客队MVP：科比-布莱恩特：32分7板3助" + "\r\n" + "主队MVP：凯文-杜兰特：26分6板3助" },
  { content: "客队MVP：德隆-威廉姆斯：24分0板8助" + "\r\n" + "主队MVP：科比-布莱恩特：31分3板4助" },
  { content: "客队MVP：C.J.Miles：20分4板6助" + "\r\n" + "主队MVP：科比-布莱恩特：30分5板8助" },
  { content: "客队MVP：科比-布莱恩特：35分4板7助" + "\r\n" + "主队MVP：德隆-威廉姆斯：28分4板9助" },
  { content: "客队MVP：保罗-加索尔：33分14板2助" + "\r\n" + "主队MVP：德隆-威廉姆斯：21分4板9助" },
  { content: "客队MVP：阿玛雷-斯塔尔迈尔：23分3板2助" + "\r\n" + "主队MVP：科比布莱恩特：40分5板5助" },
  { content: "客队MVP：杰森-理查德森：27分3板1助" + "\r\n" + "主队MVP：保罗-加索尔：29分9板5助" },
  { content: "客队MVP：科比-布莱恩特：36分9板11助" + "\r\n" + "主队MVP：阿玛雷-斯塔尔迈尔：42分11板0助" },
  { content: "客队MVP：科比-布莱恩特：38分7板10助" + "\r\n" + "主队MVP：阿玛雷-斯塔尔迈尔：21分8板0助" },
  { content: "客队MVP：史蒂夫-纳什：29分3板11助" + "\r\n" + "主队MVP：科比-布莱恩特：30分11板9助" },
  { content: "客队MVP：科比-布莱恩特：37分6板2助" + "\r\n" + "主队MVP：阿玛雷-斯塔尔迈尔：27分4板0助" },
  { content: "客队MVP：保罗-皮尔斯：24分9板4助" + "\r\n" + "主队MVP：科比布莱恩特：30分7板6助" },
  { content: "客队MVP：雷-阿伦：32分3板2助" + "\r\n" + "主队MVP：保罗-加索尔：25分8板3助" },
  { content: "客队MVP：科比-布莱恩特：29分7板4助" + "\r\n" + "主队MVP：凯文-加内特：25分6板3助" }, 

  { content: "客队MVP：科比-布莱恩特：33分6板2助" + "\r\n" + "主队MVP：保罗-皮尔斯：19分6板5助" },
  { content: "客队MVP：科比-布莱恩特：38分5板4助" + "\r\n" + "主队MVP：保罗-皮尔斯：27分2板2助" },
  { content: "客队MVP：雷-阿伦：19分2板3助" + "\r\n" + "主队MVP：科比-布莱恩特：26分11板3助" },
  { content: "客队MVP：保罗-皮尔斯：18分10板2助" + "\r\n" + "主队MVP：科比-布莱恩特：23分15板2助" },
              ]
let mvp = [ { "mvp": "科比" }, 
            { "mvp": "科比" },
            { "mvp": "杜兰特" },
            { "mvp": "杜兰特" },
            { "mvp": "加索尔" },
            { "mvp": "科比" },
            { "mvp": "科比" },
            { "mvp": "科比" },
            { "mvp": "科比" },
            { "mvp": "加索尔" },
            { "mvp": "科比" },
            { "mvp": "加索尔" },
            { "mvp": "小斯" },
            { "mvp": "小斯" },
            { "mvp": "科比" },
            { "mvp": "科比" },
            { "mvp": "科比" },
            { "mvp": "雷阿伦" },
            { "mvp": "科比" },
            { "mvp": "皮尔斯" },
            { "mvp": "皮尔斯" },
            { "mvp": "科比" },
            { "mvp": "科比" }]


Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531816963879&di=66336044b0b8bee0c5d71371b33b1317&imgtype=0&src=http%3A%2F%2Fimg.weixinyidu.com%2F160416%2F0db52f13.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531816963879&di=a2a7816e32858c99c8692f46e0c27785&imgtype=0&src=http%3A%2F%2Ftu.qiumibao.com%2Fuploads%2Fday_180626%2F201806262110248363.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531817494162&di=c7071080dbff6db190fd04dbd9ed94eb&imgtype=0&src=http%3A%2F%2Feasyread.ph.126.net%2F2rI-m5eMSc2FfbpfKfpA0Q%3D%3D%2F7917056565549267882.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531817539124&di=7e1f14cf83e2d03bb8ed8ad18bf6a858&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F16%2F46%2F11t58PICHe3_1024.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531817663540&di=4729ddf651c9686ba88c932e339460bb&imgtype=0&src=http%3A%2F%2F04.imgmini.eastday.com%2Fmobile%2F20170923%2F20170923072621_ff9dad17dbb04817cd339e1ea9ea923b_1.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531817811525&di=93e954c77df559b3f787409d6c7569d9&imgtype=0&src=http%3A%2F%2Fi10.hoopchina.com.cn%2Fhupuapp%2Fbbs%2F23183925757291%2Fthread_23183925757291_20180706193857_s_63847_w_640_h_360_67252.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cw_800%2Fformat%2Cjpg'
    ]
  },
  idClick:function(e){
    var id = e.currentTarget.id-1
    wx.showModal({
      title: '数据对比',
      content: content[id].content,
      confirmText:'本场MVP',
      success:function(res){
        if(res.confirm){
            wx.showToast({
              image:"../../imageIcon/MVP.png",
              title:mvp[id].mvp,
              duration:2000
            })
        }
      }
      
    })
  },







  onLoad: function () {
    console.log(content.length)
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5b4d4f7f4221704eaec31dc7/nbaLakers/nbaLakersSchedule',
      data: {},
      header: {
        "Content-Type": "json"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
          teamlist: res.data.data
        })
      }
    })
  }
})