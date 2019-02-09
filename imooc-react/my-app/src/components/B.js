import React, {
  Component
} from 'react'
import a from './A'
class B extends Component {
  render() {
    return ( 
    < div >
    这是B 
    </div>
    )
  }
}
export default a(B)