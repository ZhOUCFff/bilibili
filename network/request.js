const baseURL = 'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi'
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}