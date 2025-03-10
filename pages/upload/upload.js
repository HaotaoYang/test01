Page({
  data: {},

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success: (res) => {
        const tempFilePath = res.tempFiles[0].tempFilePath;
        console.log('选择的图片路径:', tempFilePath);
        // 这里可以添加后续的图片处理逻辑
      },
      fail: (err) => {
        console.error('选择图片失败:', err);
        wx.showToast({
          title: '选择图片失败',
          icon: 'none'
        });
      }
    });
  }
}); 