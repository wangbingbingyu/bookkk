//app.js
App({
  onLaunch: function() {
    wx.getUserInfo({
      success: function (res) {
        // console.log(res.userInfo);
        wx.request({
          url: 'https://wujunhui.xyz/landreg',
          // header: { "Content-Type": "application/x-www-form-urlencoded" },
          method: "get",
          data: {
            'name': res.userInfo.nickName,
            'theurl': res.userInfo.avatarUrl,
            'city': res.userInfo.city,
            'country': res.userInfo.country,
            'gender': res.userInfo.gender,
            //yourtelphone,将作为您自己的唯一身份，每个人都不一样
            //微信小程序可以获取到微信小程序微信用户的唯一opendid，但是比较麻烦，我们就用电话号码作为唯一索引，该号码不再进行验证格式，希望大家填写正确的电话号码，以便区分身份
            "yourtelphone": '15036899132'
          },
          success: function (res) {
            console.log(res.data);
          }
        })
      }
    })
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
  GetusersData: function() {
    var that = this;
    return new Promise(function(resolve, reject) {
      wx.request({
        url: 'https://wujunhui.xyz/personimages',
        method: 'get',
        data: {
          "yourtelphone": '15036899132'
        },
        success: function(res) {
          that.globalData.users = res.data;
          resolve();
        }
      });
    });
  },
  globalData: {
    fenlei: '',
    writers: '',
    books: '',
    hostser: '',
    users:'',
    shows:false
  }
})