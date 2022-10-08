// pages/my/balance/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        balance:0
    },
    onLoad:function(){
        let that = this;
        wx.request({
          url: 'https://api.cp.akagiyui.com/account/balance',
          method: "get",
          header: {
            "content-type": "application/x-www-form-urlencoded",
            'Authorization': wx.getStorageSync('token') ? `Bearer ${wx.getStorageSync('token')}` : '',
          },
          success:function(res){
              that.setData({
                  balance:res.data.data
              }),
              wx.setStorage({
                  key:'money',
                  data:that.data.balance
              })
          }
        })
    },
    goback(){
        wx.navigateBack({})
    },
    goAddMoney(){
        wx.navigateTo({
          url: './addmoney/index',
        })
    }
})