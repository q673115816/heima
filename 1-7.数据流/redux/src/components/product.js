import React from 'react'

class product extends React.Component {
  render() {
    const {all} = this.props
    return (
         <div>
           <h1>{this.props.title}</h1>
        <ul>
          {
            all.map(item => (
                <li key={item.id}>
                {item.title} - {item.price} * {item.inventory}
                <br/>
                <button 
                onClick={this.props.buy.bind(this, item.id)} 
                disabled={item.inventory <= 0}>
                { item.inventory > 0 ? 'buy':'sold out'}
                </button>
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
