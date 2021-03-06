var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.appData.userInfo == null) {
      // wx.navigateTo({url:"../login/login"})

      wx.redirectTo({ url: "../login/login" })
    } else {

      this.setData({ username: app.appData.userInfo.username })


    }
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
/**
 *从用户中心 进入到隐私条款
 */
  navigatePrivacy : function () {
    wx.navigateTo({
      url: '../user/privacy',
    })
  },
/**跳转到用户登录页面 */
  user_login:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  }
})