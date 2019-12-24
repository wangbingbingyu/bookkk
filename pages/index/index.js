const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ['分类排行', '作者排行', '新发布'],
    colors: ['#f54d82', '#59b080', '#f54d82', '#9060e8','#ded658']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //调用
    app.GetfenleiData().then((res) => {
      that.setData({
        fenlei: app.globalData.fenlei
      });
    });
    app.GetwritersData().then((res) => {
      that.setData({
        writers: app.globalData.writers
      });
    });
    app.GetbooksData().then((res) => {
      that.setData({
        books: app.globalData.books
      });
    });
    app.GethostserData().then((res) => {
      that.setData({
        hostser: app.globalData.hostser
      });
    });
    app.GetusersData().then((res) => {
      that.setData({
        users: app.globalData.users
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

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