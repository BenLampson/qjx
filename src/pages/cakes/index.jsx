import Taro from '@tarojs/taro'
import {View, ScrollView} from '@tarojs/components'

import './index.scss'
export default class Cake extends Taro.Component {
  config = {
    navigationBarTitleText: '生日蛋糕',
    enablePullDownRefresh: true,
  }
  constructor(){
    super(...arguments);
        let types = []
        for (let i=0;i<6;i++){
             types.push({
                 name:i,
                 icon:'../../resource/img/collect.png'
             })            
        }
        let goods = []
        for (let i=0;i<20;i++){
             goods.push({
                 name:i,
                 icon:'../../resource/img/collect.png'
             })            
        }
        this.state={
            isSelected: true,
            types:types,
            goods:goods,
            moveTo:""
        }
  }
  navigateTo(value){
    this.setState({
      current: value
    })
    switch (value) {
      case 0:
        Taro.switchTab({
          url: `/pages/home/index`
        })
        break;
      case 1:
        Taro.switchTab({
          url: `/pages/order/index`
        })
        break;
      case 2:
        Taro.switchTab({
          url: `/pages/orderList/index`
        })
        break;
      case 3:
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
  render() {
    const classAName=this.state.isSelected?"switech_operationSelected":"switech_operation"
    const classBName=this.state.isSelected?"switech_operation":"switech_operationSelected"
    let types = this.state.types
    let goods=this.state.goods
    return(
        <View className={'index_view'}>
            <View className={'shopinfo_view'}>
                <text>门店信息：西安</text>
                <View className={'switch_view'}>
                    <View className={classAName} onClick={this.switchClicked}>
                        <text>自取</text>
                    </View>
                    <View className={classBName} onClick={this.switchClicked}>
                        <text>外卖</text>
                    </View>
                </View>
            </View>
            <View className={"order_view"}>
                <View className={"type_view"}>
                    <ScrollView className={"type_swiper"} scrollX={false} scrollY={true}
                    scrollWithAnimation={true}
                    >
                    {
                        types.map((vitem ,index)=> {
                            return  <View className={"item_view"} id={"typeView"+index}><Image src={vitem.icon}/>{vitem.name}</View>
                        })
                    }
                    </ScrollView>
                </View>
                
                <View className={"goods_view"}>
                    <ScrollView className={"goods_swiper"} scrollX={false} scrollY={true}>
                    {
                        goods.map((vitem ,index)=> {
                            return  <View className={"item_view"} id={"goodsView"+index}><Image src={vitem.icon}/>{vitem.name}</View>
                        })
                    }
                    </ScrollView>
                </View>
                
            </View>
        </View>
    )
  } 
}
