// pages/index/pay/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrl:'',
        imgId:''
    },
    onLoad:function(){
        let that = this;
        wx.getStorage({
            key:'token',
            success(res){
                let header = {'token':res.data};
                wx.request({
                  url: 'https://api.cp.akagiyui.com/user/collection_qrcode',
                  method: "get",
                  header: {

                    "content-type": "application/x-www-form-urlencoded",
            
                    'Authorization': wx.getStorageSync('token') ? `Bearer ${wx.getStorageSync('token')}` : '',
            
                  },
                  success:function(res){
                      console.log(res.data.data)
                      wx.request({
                        url:`https://api.cp.akagiyui.com/user/image?id=${res.data.data}`,
                        method:'get',
                        responseType: 'arraybuffer',  
                        header: {
            
                          "content-type": "application/x-www-form-urlencoded",
                            
                          'Authorization': wx.getStorageSync('token') ? `Bearer ${wx.getStorageSync('token')}` : '',
                  
                        },
                        success:function(ras){
                            that.setData({
                                imgUrl: wx.arrayBufferToBase64(ras.data)                    
                              })
                        }
                    })
                  }
                })
            }
        })
    }
})