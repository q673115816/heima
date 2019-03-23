import taro, {Component} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Child extends Component {
    render() {
        return (
            <view>{this.props.name}</view>
        )
    }
}

export default Child