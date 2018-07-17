// 获取全局应用程序实例对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    loading: true
  },

  getCache(){
    return new Promise((resolve,reject)=>{
      app.wechat.getStorage('last_splash_data').then(res=>{
        // console.log('getCache',res.data)
        if (res.data.movies && res.data.expires > Date.now()){
          // console.log('res.data', res.data)
          return resolve(res.data)
        }
        // 已经过期
        console.log('uncached')
        return resolve(null)
      }).catch(e => resolve(null))
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('splash.js => onLoad', app);
    console.log('splash.js => onLoad this', this);
    this.getCache().then(res=>{
      if(res){
        console.log('onLoad getCache =>',res)
        this.setData({
          movies: res.movies,
          loading: false
        })
        return
      }
      app.douban.find('coming_soon', 1, 3).then(data => {
        console.log('coming_soon接口成功数据', data)
        this.setData({
          movies: data.subjects,
          loading: false
        })
        // 缓存数据
        return app.wechat.setStorage('last_splash_data', {
          movies: data.subjects,
          // 过期时间为一天
          expires: Date.now() + 1 * 24 * 60 * 60 * 1000
        })
      }).then(()=>{
        console.log('cache data success')
      }).catch(err => {
        console.log('coming_soon', err)
      })
    })
  },

  handleStart(){
    console.log('handleStart=>')
    wx.switchTab({
      url: '../index/index'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})