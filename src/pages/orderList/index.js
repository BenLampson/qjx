import Taro from '@tarojs/taro'
import { View,Button } from '@tarojs/components'

export default class Index extends Taro.Component {
    config = {
        navigationBarTitleText: '订单',
        enablePullDownRefresh: true,
    }
    constructor(){
        super(...arguments);
        this.state={
            current: 0
        }
        this.navigateTo=this.navigateTo.bind(this)
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
    render() {
        return(
            <View className='example-item'>
                <Button>订单</Button>
            </View>
        )
    }
}
