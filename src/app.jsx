import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
        'pages/index/index',
        'pages/order/index',
        'pages/orderList/index',
        'pages/personal/index',
        'pages/cakes/index'
    ],

    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },

    tabBar:{
      "backgroundColor": "#fafafa",
      "borderStyle": "white",
      "selectedColor": "#AB956D",
      "color": "#666",
      "list": [{
        "pagePath": "pages/index/index",
        "iconPath": 'resource/img/home.png',
        "selectedIconPath": 'resource/img/home@selected.png',
        "text": "首页"
      }, {
        "pagePath": "pages/order/index",
        "iconPath": 'resource/img/category.png',
        "selectedIconPath": 'resource/img/category@selected.png',
        "text": "点单"
      },
        {
          "pagePath": "pages/cakes/index",
          "iconPath": 'resource/img/cart.png',
          "selectedIconPath": 'resource/img/cart@selected.png',
          "text": "生日蛋糕"
        },{
        "pagePath": "pages/orderList/index",
        "iconPath": 'resource/img/cart.png',
        "selectedIconPath": 'resource/img/cart@selected.png',
        "text": "订单"
      }, {
        "pagePath": 'pages/personal/index',
        "iconPath": 'resource/img/my.png',
        "selectedIconPath": 'resource/img/my@selected.png',
        "text": "我的"
      }]
    },
    "networkTimeout": {
      "request": 10000,
      "downloadFile": 10000
    },
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
      }
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
          <Index style='border: 1px solid black;'/>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
