
Page({
  data: {
    data:'boonook测试'
  },
  onLoad: function (options) {
    ///接受列表页面传递过来的参数
    let item = JSON.parse(options.ID);
    this.setData({
      data: item.name
    });
    debugger
    wx.setNavigationBarTitle({
      title: item.name
    });
  },
  onRequest() {
  
  }
})