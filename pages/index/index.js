"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
    onRequest: function () {
        var params = {
            page: 1,
            rows: 40
        };
        wx.request({
            url: 'http://27.17.59.250:8888/api/indexHome/fileManager/list',
            data: params,
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                if (res.data.code == 200) {
                    var data = res.data || {};
                    var info = data.data || {};
                    var list = info.list || [];
                    app.globalData.content = list;
                }
                else {
                    console.log("index.js wx.request CheckCallUser statusCode" + res.statusCode);
                }
            },
            fail: function () {
                console.log("index.js wx.request CheckCallUser fail");
            },
            complete: function () {
            }
        });
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7S0FDcEQ7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQU4saUJBMkJDO1FBMUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFHM0IsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUMsR0FBRztnQkFDOUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsU0FBUztRQUNQLElBQUksTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFDLENBQUM7WUFDTixJQUFJLEVBQUMsRUFBRTtTQUNSLENBQUE7UUFFRCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLHlEQUF5RDtZQUM5RCxJQUFJLEVBQUUsTUFBTTtZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRCxPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNwQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtvQkFDeEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBRSxFQUFFLENBQUM7b0JBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFFLEVBQUUsQ0FBQztvQkFDekIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO2lCQUU3QjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDOUU7WUFDSCxDQUFDO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQ0QsUUFBUSxFQUFFO1lBRVYsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanNcbi8v6I635Y+W5bqU55So5a6e5L6LXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnXG4gICAgfSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2Upe1xuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIG9uUmVxdWVzdCgpe1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBwYWdlOjEsXG4gICAgICByb3dzOjQwXG4gICAgfVxuXG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMjcuMTcuNTkuMjUwOjg4ODgvYXBpL2luZGV4SG9tZS9maWxlTWFuYWdlci9saXN0JyxcbiAgICAgIGRhdGE6IHBhcmFtcyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsIC8vIE9QVElPTlMsIEdFVCwgSEVBRCwgUE9TVCwgUFVULCBERUxFVEUsIFRSQUNFLCBDT05ORUNUXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSwvLyDorr7nva7or7fmsYLnmoQgaGVhZGVyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDIwMCkge1xuICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGF8fHt9O1xuICAgICAgICAgIGxldCBpbmZvID0gZGF0YS5kYXRhIHx8IHt9O1xuICAgICAgICAgIGxldCBsaXN0ID0gaW5mby5saXN0fHxbXTtcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS5jb250ZW50PWxpc3Q7XG4gICAgICAgICAgLy8vY29uc29sZS5sb2coYXBwLmdsb2JhbERhdGEuY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleC5qcyB3eC5yZXF1ZXN0IENoZWNrQ2FsbFVzZXIgc3RhdHVzQ29kZVwiICsgcmVzLnN0YXR1c0NvZGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4LmpzIHd4LnJlcXVlc3QgQ2hlY2tDYWxsVXNlciBmYWlsXCIpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==