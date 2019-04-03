import React from 'react'

// class product extends Component {
//   render() {
//     return (
//          <div>
//         <h1>{this.props.title}</h1>
//       </div>
     
//     )
//   }
// }

function product(props) {
    return (
         <div>
        <h1>{props.title}</h1>
      </div>
    )
}

export default product
