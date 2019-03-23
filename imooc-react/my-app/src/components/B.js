import React, {
  Component
} from 'react'
import a from './A'

@a
class B extends Component {
  render() {
    return ( 
    < div >
    <input type="text" {...this.props}/>
    我的名字： {this.props.name}
    <br/>
    我的年龄： {this.props.age}
    <br/>
    我的性别： {this.props.sex}
    <br/>
    这是B 
    </div>
    )
  }
}
export default B