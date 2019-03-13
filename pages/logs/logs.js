"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        logs: []
    },
    onDetail: function () {
        console.log('detail');
    },
    onLoad: function () {
        this.setData({
            logs: app.globalData.content
        });
        console.log('logs', this.logs);
    },
    onRequest: function (event) {
        var data = event.target.dataset.no;
        var list = {};
        list.id = data.id;
        list.name = data.title;
        var str = JSON.stringify(list);
        wx.navigateTo({
            url: '/pages/components/detail/detail?ID=' + str
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQztBQUU3QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBYztLQUNyQjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTztTQUM3QixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUNELFNBQVMsWUFBQyxLQUFLO1FBRWIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBRW5DLElBQUksSUFBSSxHQUFDLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHFDQUFxQyxHQUFHLEdBQUc7U0FDakQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vbG9ncy5qc1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5pbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbG9nczogW10gYXMgc3RyaW5nW11cbiAgfSxcbiAgb25EZXRhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnZGV0YWlsJylcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbG9nczogYXBwLmdsb2JhbERhdGEuY29udGVudFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdsb2dzJyx0aGlzLmxvZ3MpXG4gIH0sXG4gIG9uUmVxdWVzdChldmVudCkge1xuICAgIC8vIGxldCBkYXRhID17aWQ6MSxuYW1lOidib29ub29rJ307XG4gICAgbGV0IGRhdGEgPSBldmVudC50YXJnZXQuZGF0YXNldC5ubztcbiAgICAvL1xuICAgIGxldCBsaXN0PXt9O1xuICAgIGxpc3QuaWQ9ZGF0YS5pZDtcbiAgICBsaXN0Lm5hbWUgPSBkYXRhLnRpdGxlO1xuICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShsaXN0KTtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy9wYWdlcy9jb21wb25lbnRzL2RldGFpbC9kZXRhaWw/SUQ9JyArIHN0clxuICAgIH0pXG4gIH1cbn0pXG4iXX0=