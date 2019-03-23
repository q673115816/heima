import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Demo from './child'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { 
    this.setState({
      name: '李四'
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  click() {
    this.setState({
      name: '张三'
    }, () => {
      console.log(this.state.name);
    })
    
  }
  render () {
    return (
      <View className='index'>
      <Demo name='555'></Demo>
      <Button onClick={this.click}>点击</Button>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}

