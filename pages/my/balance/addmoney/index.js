// pages/my/balance/addmoney/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fisrtMoney:0
    },
    getmoney(e){
        this.fisrtMoney = e.detail.value;
    },
    addMoney(){
        console.log(typeof(this.fisrtMoney));
        let item = wx.getStorageSync('money');
        let result = parseInt(item)+parseInt(this.fisrtMoney);
        let name = wx.getStorageSync('username');
        wx.request({
          url: `https://api.cp.akagiyui.com/account/balance?username=${name}&amount=${result}`,
          method:'put',
          success:function(res){
              if(res.data.code==200){
                wx.switchTab({
                  url: '../../../index/index',
                })
              }
          }
        })
    }
})