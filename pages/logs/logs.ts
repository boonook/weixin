//logs.js
import { formatTime } from '../../utils/util'
import { IMyApp } from '../../app'

const app = getApp<IMyApp>();

Page({
  data: {
    logs: [] as string[]
  },
  onDetail: function () {
    console.log('detail')
  },
  onLoad() {
    this.setData!({
      logs: app.globalData.content
    });
    console.log('logs',this.logs)
  },
  onRequest(event) {
    // let data ={id:1,name:'boonook'};
    let data = event.target.dataset.no;
    //
    let list={};
    list.id=data.id;
    list.name = data.title;
    let str = JSON.stringify(list);
    wx.navigateTo({
      url: '/pages/components/detail/detail?ID=' + str
    })
  }
})
