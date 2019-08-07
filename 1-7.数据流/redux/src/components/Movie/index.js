import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class index extends Component {
  render() {
      const { match } = this.props
      console.log(this.props);
      
    return (
      <ul>
          {
              [1,2].map((item,index)=>(
                  <li key={index}>
                    <Link to={{pathname: `${match.url}/${item}`}}>{item}</Link>
                </li>
              ))
          }
      </ul>
    )
  }
}
