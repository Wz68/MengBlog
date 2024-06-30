---
title: web-view的用法
order: 1
# 设置作者
author: Ms.LM
# 设置写作时间
date: 2024-05-18 

# 你可以自定义页脚
footer: 加油！
# 你可以自定义版权信息
copyright: Copyright © 2024-present Mr.LM
---

## 一、首先在index.js中获取应用实例

```js
Page({
    data: {
        url: 'https://xxxxx.cn', //这里可以修改为自己所需要的外部链接
    },
    onLoad(options) {
        if (options.webViewUrl) {
          	this.setData({
                url: decodeURIComponent(options.webViewUrl)
            });
        } else {
            this.generateUrl();
        }
    },
    onShow() {
    },
    generateUrl() {
        const url = `${this.data.url}`;
        console.log('url', url);
        this.setData({
            url
        });
    }
})
```

## 二、在index.wxml中使用<web-view></web-view>标签

```html
<view class="container">
    <web-view src="{{url}}"></web-view>
</view>
```

## 三、效果图

​	![1715998232656](https://mengblog-1305308047.cos.ap-guangzhou.myqcloud.com/202405181010649.jpg)