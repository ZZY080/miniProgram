// pages/my/person/index.js
Page({

    /**
     * 页面的初始数据
     */
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
})