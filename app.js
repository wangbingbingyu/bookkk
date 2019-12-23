//app.js
App({
  onLaunch: function() {
    var that = this;
  },
  GetfenleiData: function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      wx.request({
        url: 'https://wujunhui.xyz/getfenleilist',
        method: 'get',
        data: {},
        success: function(res) {
          that.globalData.fenlei = res.data;
          resolve();
        }
      });
    });
  },
  GetwritersData: function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      wx.request({
      url: 'https://wujunhui.xyz/getwriters',
        method: 'get',
        data: {},
        success: function(res) {
          that.globalData.writers = res.data;
          resolve();
        }
      });
    });
  },
  GetbooksData: function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      wx.request({
      url: 'https://wujunhui.xyz/getbooks',
        method: 'get',
        data: {},
        success: function(res) {
          that.globalData.books = res.data;
          resolve();
        }
      });
    });
  },
  GethostserData: function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      wx.request({
      url: 'https://wujunhui.xyz/gethostser',
        method: 'get',
        data: {},
        success: function(res) {
          that.globalData.hostser = res.data;
          resolve();
        }
      });
    });
  },
  globalData: {
    fenlei: '',
    writers: '',
    books: '',
    hostser: ''
  }
})