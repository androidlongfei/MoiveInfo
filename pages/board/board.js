const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // boards: [{
    //   key: 'in_theaters'
    // }]
    boards: [{
      key: 'in_theaters'
    }, {
      key: 'coming_soon'
    }, {
      key: 'new_movies'
    }, {
      key: 'top250'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('board onload =>')
    wx.showLoading({
      title: '加载中...',
    })
    const tasks = this.data.boards.map(board => {
      // return app.douban.find(board.key, 1, 10)
      return app.douban.find(board.key, 1, 10).then(res => {
        board.title = res.title
        board.movies = res.subjects
        return board
      })
    })
    Promise.all(tasks).then(boards => {
      console.log('boards data =>', boards)
      this.setData({
        boards: boards,
        loading: false
      })
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('board onReady =>')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('board onShow =>')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('board onHide =>')
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