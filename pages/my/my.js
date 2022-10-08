// pages/my/my.js
Page({
    data: {
        avatar:''
    },
    //获取头像
    onShow:function(){
        let that = this;
        wx.getStorage({
            key:'avatar',
            success(res){
               that.setData({
                   avatar:res.data
               })
            }
        })
    },
        
    //跳转页面
    gobalance(){
        wx.navigateTo({
          url: "../my/balance/index",
        })
        
    },
    goSetting(){
        wx.navigateTo({
          url: '../my/setting/index',
        })
    },
    goBank(){
        wx.navigateTo({
          url: '../my/bank/index',
        })
    },
    goSafe(){
        wx.navigateTo({
          url: '../my/safe/index',
        })
    },
    goPerson(){
        wx.navigateTo({
          url: '../my/person/index',
        })
    },
    goPayment(){
        wx.navigateTo({
          url: '../my/payment/index',
        })
    }
})