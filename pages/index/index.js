import request from '../../network/request.js'

Page({

  // 事件
  navItemClick(e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    // 首页导航数据
    navList: [],
    // 轮播图数据
    swiperList: [],
    // 视频列表数据
    videoList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取首页导航栏数据
    request({
      url: '/navList'
    }).then(res => {
      this.setData({
        navList: res.data.data.navList
      })
    })
    // 获取轮播图数据
    request({
      url: '/swiperList'
    }).then(res => {
      // console.log(res.data)
      this.setData({
        swiperList: res.data.data.swiperList
      })
    })
    // 获取视频列表数据
    request({
      url: '/videosList'
    }).then(res => {
      // console.log(res.data)
      this.setData({
        videoList: res.data.data.videosList
      })
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