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
        <button onClick={this.props.addtest}>++</button>
        <ul>
          {
            all.map(item => (
                <li key={item.id}>
                {item.title} - {item.price} * {item.inventory}
                <br/>
                <button onClick={this.props.buy.bind(this, item.id)}>buy</button>
                </li>
              )
            )
          }
        </ul>
      </div>
    )

  }
}

export default product
