/**
 * 登录
 */
function login() {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject })
  })
}

/**
 * 获取用户信息
 */
function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}

/**
 * 缓存数据
 */
function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({ key: key, data: value, success: resolve, fail: reject })
  })
}

/**
 * 获取缓存数据
 */
function getStorage(key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({ key: key, success: resolve, fail: reject })
  })
}

/**
 * 获取位置
 */
function getLocation(type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}

module.exports = {
  login,
  getUserInfo,
  setStorage,
  getStorage,
  getLocation,
  original: wx
}
