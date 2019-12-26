// pages/bookdetail/bookdetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment: "与三体文明的战争使人类第一次看到了宇宙黑暗的真相，地球文明像一个恐惧的孩子， 熄灭了寻友的篝火在暗夜中发抖。 自以为历经沧桑， 其实刚刚蹒跚学步;自以为悟出了生存竞争的秘密， 其实还远没有竟争的资格。 ",
  hidden: true,
  hiddens: true
  },
  push(){
    app.globalData.arrs.push(this.data.items)
  },
  buttonTap(){
    this.setData({
      hidden:false
    })
  },
  close(){
    this.setData({
      hidden:true
    })
  },
  showsss() {
    this.setData({
      hiddens: false
    })
  },
  closeit() {
    this.setData({
      hiddens: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let index = options.type - 1
    let books = app.globalData.books
    let items = books[index]
    this.setData({
      items
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})