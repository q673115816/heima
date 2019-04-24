import React from 'react'

class product extends React.Component {
  componentDidMount() {
    console.log(this);
    
    this.props.init()
  }
  render() {
    const {all} = this.props
    return (
         <div>
           <h1>{this.props.title}</h1>
           <p>{this.props.test}</p>
        <ul>
          {
            all.map(item => (
                <li>item</li>
              )
            )
          }
        </ul>
      </div>
    )

  }
}

export default product
