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
  const {title, all} = props
    return (
         <div>
        <h1>{'title'}</h1>
        <ul>
          {
            // all.map(item => {
            //   return (
            //     <li>item</li>
            //   )
            // })
          }
        </ul>
      </div>
    )
}

export default product
