// pages/register/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username:'',
        password:'',
        nickname:''
    },
    getSearchInput(e) {
        this.nickname = e.detail.value;
    },
    getUsernameInput(e){
        this.username = e.detail.value;
    },
    getPasswordInput(e){
        this.password = e.detail.value;
    },
    register(){
        // 注册账号密码验证
        if(!this.username||!this.password||!this.nickname){
            wx.showToast({
                title: '注册的账号或密码或昵称不能为空',
                icon: 'none',
                duration: 2000
            })
        }else if(this.username.length<5){
            wx.showToast({
                title: '账号长度至少为5位',
                icon: 'none',
                duration: 2000
            })
        }else if(this.password.length<6){
            wx.showToast({
                title: '密码长度至少为6位',
                icon: 'none',
                duration: 2000
            })
        }else{
            // 账号密码验证成功后
            wx.request({
                url: 'https://api.cp.akagiyui.com/user/register',
                method: "post",
                data:{
                    "username": this.username,
                    "password": this.password,
                    "nickname": this.nickname
                },
                header: {"Content-Type":"application/json;charset=UTF-8"},
                success: function (res) {
                    // 注册成功后跳转登录页面
                    wx.navigateTo({
                        url: '../login/login',
                    })
                }
             })   
        }          
    }
})