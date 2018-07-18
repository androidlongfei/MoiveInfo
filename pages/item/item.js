const {
  findOne
} = require('../../utils/douban')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('item onLoad =>', options)
    wx.showLoading({
      title: '加载中...'
    })
    // console.log('douban', findOne)
    findOne(options.id)
      .then(res => {
        console.log('findOne', res)
        if (res && res.title) {
          this.setData({
            title: res.title,
            movie: res
          })
          wx.setNavigationBarTitle({
            title: res.title
          })
        }
        wx.hideLoading()
      })
      .catch(e => {
        this.setData({
          title: '获取数据异常',
          movie: {}
        })
        console.error(e)
        wx.hideLoading()
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})