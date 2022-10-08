// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: '',
        password: '',
        token:''
    },
    getUsernameInput(e) {
        this.username = e.detail.value;
    },
    getPasswordInput(e) {
        this.password = e.detail.value;
    },
    goadmin() {
        let that = this;
        // 不为空判断
        if (!this.username || !this.password) {
            wx.showToast({
                title: '请输入账号或密码',
                icon: 'none',
                duration: 2000
            })
        } else {
            // 先存储用户名
            wx.setStorage({
                key: 'username',
                data: this.username
            })
            wx.request({
                url: 'https://api.cp.akagiyui.com/user/login',
                method: "post",
                header: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                data: {
                    "username": this.username,
                    "password": this.password
                },
                success: function (res) {
                    if (res.data.code == 200) {
                        that.setData({
                            token:res.data.data
                        })
                        // 设置token
                        wx.setStorage({
                            key:'token',
                            data:that.data.token
                        })
                        wx.getUserProfile({
                            desc: "用于获取头像",
                            success: (res) => {
                                wx.setStorage({
                                    key: 'avatar',
                                    data: res.userInfo.avatarUrl
                                })
                            }
                        });
                        wx.switchTab({
                            url: "../index/index"
                        })
                    } else {
                        wx.showToast({
                            title: '输入的账号或密码错误',
                            icon: 'none',
                            duration: 2000
                        })
                    }
                },
            })
        }

    },
    // 前往注册
    goRegister() {
        wx.navigateTo({
            url: '../register/index',
        })
    }
})