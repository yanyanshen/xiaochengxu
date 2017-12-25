//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
    
  },



  itemClick : function(){
    // wx.navigateTo({
    //   url: '../navigate/navigate',
    // })
    wx.redirectTo({
      url: '../navigate/navigate?id=1',
    })
  }
})



// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     nn: 'init data',
//     array: [{ msg: '1' }, { msg: '2' }],
//     // 2017-12-18

//     // text:'text',
//     // num:'1',
//     // array:[{text:'数组0'},{text:'数组1'}],
//     // object:{msg:'object'}
//     // message:'Hello MIAI',
//     // id:0,
//     // length:10,
//     // condition:true,
//     // a:1,b:2,c:3,
//     // name:'Tom',
//     // object:{key:'Hello'},
//     // array:['Tom'],
//     // zero:0,
//     // array:[{message:'foo'},{message:'bar'}],
//     // objectArray:[
//     //   { id: 5, unique:' unique_5'},
//     //   { id: 4, unique: 'unique_4' },
//     //   { id: 3, unique: 'unique_3' },
//     //   { id: 2, unique: 'unique_2' },
//     //   { id: 1, unique: 'unique_1' },
//     //   { id: 0, unique: 'unique_0' },
//     //   ],
//     // numberArray:[1,2,3,4],
//     // item: {
//     //   index:0,
//     //   msg:'this is a template',
//     //   time:'2017-12-18'
//     },



//     //   poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
//     // name: '此时此刻',
//     // author: '许巍',
//     // src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',


 

  
  
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },


//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })


