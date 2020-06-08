import Taro from '@tarojs/taro'
import {View, ScrollView} from '@tarojs/components'

import './index.scss'
export default class Index extends Taro.Component {
    config = {
        navigationBarTitleText: '点单',
        enablePullDownRefresh: true,
    }
    constructor(){
        super(...arguments);
        let types = []
        for (let i=0;i<5;i++){
             types.push({
                 name:i,
                 icon:'../../resource/img/category.png'
             })            
        }
        let goods = []
        for (let i=0;i<20;i++){
             goods.push({
                 name:i,
                 icon:'../../resource/img/category.png'
             })            
        }
        this.state={
            isSelected: true,
            types:types,
            goods:goods,
            moveTo:"",
            goodIndex:0,
            currentSelectedType:"typeView0"
        }
    }
    componentDidMount() {
        // Taro.getLocation({
        //     type: 'wgs84',
        //     success: function (res) {
        //         const latitude = res.latitude
        //         const longitude = res.longitude
        //         const speed = res.speed
        //         const accuracy = res.accuracy
        //         console.log(latitude)
        //         console.log(longitude)
        //         console.log(speed)
        //         console.log(accuracy)
        //
        //     }
        //
        // })
    }
    handleClick (value) {
        this.setState({
            current: value
        })
    }
    switchClicked= () => {
        const _state=this.state
        _state.isSelectedA=_state.isSelected=!_state.isSelected
        this.setState(_state)
    }
    navigateTo(value){
        this.setState({
            current: value
        })
        switch (value) {
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
    onScroll=(e)=>{
        console.log(e)
    }
    toView=(id)=>{

    }
    typeViewOnClicked = (e) =>{
        const typeID=e.currentTarget.id
        const index = typeID[typeID.length-1]
        const _state=this.state
        _state.currentSelectedType = typeID
        _state.goodIndex=index*4
        console.log(_state)
        this.setState(_state)
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
                        <ScrollView className={"type_swiper"} scrollX={false} scrollY={false}
                        scrollWithAnimation={true}>
                        {   
                            types.map((vitem ,index)=> {
                                const className = ("typeView"+index)==this.state.currentSelectedType?"item_viewSelected":"item_view"
                                console.log(className)
                                return  <View className={className} id={"typeView"+index} 
                                onClick={this.typeViewOnClicked}>
                                    <Image src={vitem.icon}/>
                                    {vitem.name}
                                    </View>
                            })
                        }
                        </ScrollView>
                    </View>
                    
                    <View className={"goods_view"}>
                        <ScrollView className={"goods_swiper"} scrollIntoView={"goodsView"+this.state.goodIndex} scrollX={false} scrollY={true}
                        onScroll={this.onScroll}
                        scrollWithAnimation={true}>
                        {
                            goods.map((vitem ,index)=> {
                                return  <View className={"item_view"} id={"goodsView"+index}>
                                    <Image src={vitem.icon}/>
                                    {vitem.name}
                                    {"sdasda"}
                                    {"sada"}
                                    </View>
                            })
                        }
                        </ScrollView>
                    </View>
                    
                </View>
            </View>
        )
    }
}
