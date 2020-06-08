import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
  }
  constructor(){
    super(...arguments);
    this.state={
      current: 0
    }
    this.navigateTo=this.navigateTo.bind(this)
  }

  componentDidShow(){
    this.navigateTo(1)
  }
  
  navigateTo(value){
    this.setState({
      current: value
    })
    switch (value) {
      case 0:
        break;
      case 1:
        Taro.switchTab({
          url: `/pages/order/index`
        })
        break;
      case 2:
        Taro.switchTab({
          url: `/pages/cakes/index`
        })
        break;
      case 3:
        Taro.switchTab({
          url: `/pages/orderList/index`
        })
      case 4:
        Taro.switchTab({
          url: `/pages/personal/index`
        })
        break;
      default:
        break;
    }
  }
  handleOrderClicked= () =>{
    this.navigateTo(1)
  }
  handleCakeClicked= () =>{
    this.navigateTo(2)
  }
  render() {
    return(
            <View className={"index_view"} >
                <Swiper
                    indicatorColor='#999'
                    indicatorActiveColor='#333'
                    vertical = {false}
                    circular = {true}
                    indicatorDots = {true}
                    autoplay = {true}
                    className={"swiper_view"}
                >
                  <SwiperItem>
                    <View className='demo-text-1'>11</View>
                  </SwiperItem>
                  <SwiperItem>
                    <View className='demo-text-2'>2</View>
                  </SwiperItem>
                  <SwiperItem>
                    <View className='demo-text-3'>3</View>
                  </SwiperItem>
                </Swiper>
              <View className={'operation_view'}>
                <View className={'btn_View'} onClick={this.handleOrderClicked}>
                  <Image src={'../../resource/img/category.png'} mode='widthFix' className={'btn_image'}/>
                  <text>堂食甜品</text>
                </View>
                <View className={'btn_View'}  onClick={this.handleCakeClicked}>
                  <Image src={'../../resource/img/category.png'} mode='widthFix' className={'btn_image'}/>
                  <text>生日蛋糕</text>
                </View>
              </View>
              <View className={'points_view'}>
                <text>我的积分</text>
                <text>100</text>
              </View>
             </View>
    )
  }
}
