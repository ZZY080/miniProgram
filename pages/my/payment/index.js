// pages/my/payment/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        money:'',
        username:'',
        text:''
    },
    getName(e){
        this.username = e.detail.value;
    },
    getMoney(e){
        this.money = e.detail.value;
    },
    getText(e){
        this.text = e.detail.value;
    },
    startMoney() {
        let that = this;
        // 不为空判断
        if (!this.username || !this.money||!this.text) {
            wx.showToast({
                title: '收款人或金额或备注不能为空',
                icon: 'none',
                duration: 2000
            })
        } else {
            // 先存储用户名
            wx.request({
                url: 'https://api.cp.akagiyui.com/account/transfer',
                method: "post",
                header: {
                    "Content-Type": "application/json;charset=UTF-8",
                    'Authorization': wx.getStorageSync('token') ? `Bearer ${wx.getStorageSync('token')}` : '',
                },
                data: {
                    "target_username": this.username,
                    "amount": parseInt(this.money),
                    "remark":this.text
                },
                success: function (res) {
                    console.log(res);
                    if (res.data.code == 200) {
                        wx.showToast({
                            title: '转账成功',
                            icon: 'none',
                            duration: 2000
                        })
                        wx.switchTab({
                            url: "../../index/index"
                        })
                    } else {
                        wx.showToast({
                            title: '收款人错误',
                            icon: 'none',
                            duration: 2000
                        })
                    }
                },
            })
        }
    }
})