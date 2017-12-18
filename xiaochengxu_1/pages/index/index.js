//index.js
//获取应用实例
const app = getApp()
var common = require('common.js')

// openVendor();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nn: 'init data',
    array: [{ msg: '1' }, { msg: '2' }],
    // 2017-12-18
    message:'Hello MIAI',
    id:0,
    length:10,
    condition:true,
    a:1,b:2,c:3,
    name:'Tom',
    object:{key:'Hello'},
    array:['Tom'],
    zero:0,
    array:[{message:'foo'},{message:'bar'}],
    objectArray:[
      { id: 5, unique:' unique_5'},
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
      ],
      numberArray:[1,2,3,4],
    item: {
      index:0,
      msg:'this is a template',
      time:'2017-12-18'
    }


    // text:'text',
    // num:'1',
    // array:[{text:'数组0'},{text:'数组1'}],
    // object:{msg:'object'}
    },


  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
 

  // changeText:function(){
  //   this.setData({
  //     text:'更改text后的值'
  //   })
  // },
  // changeNum:function(){
  //   this.setData({
  //     num:'点击之后 num =10'
  //   })
  // },
  // changeItemInArray:function(){
  //   this.setData({
  //     'array[0].text':'数组',
  //     'array[1].text': '数组2',
  //   })
  // },
  // changeItemInObject:function(){
  //   this.setData({
  //     'object.msg':'已经更改'
  //   })
  // },
  // addNewField:function(){
  //   this.setData({
  //     'newField.text':'new data'
  //   })
  // },
  // hello_name:function() {
  //   common.sayHello('MINA')
  // },
  // goodbyeMINA: function () {
  //   common.sayGoodbye('MINA')
  // },
  // onShareAppMessage:function(){
  //   return{
  //     title:'自定义',
  //     path:'/page/user?id=123'
  //   }
  // },

  // changeName: function(){
  //   console.log('hah')
  // },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})


