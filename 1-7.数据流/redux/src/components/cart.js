import React from 'react'
import CartList from './CartList'

function cart(props) {
  const { title, list = [], check_out, cart, check_type} = props
  return (
    <div>
      <h1>{title}</h1>
      {list.length > 0 ? 
      <CartList list={list}></CartList> : 
      <p style={{color: '#ccc',fontSize: '14px'}}>placse add some shopping</p>
      }
      
      total: {
        list.reduce((total, e, i) => { 
          return total = total + (e.price * e.inventory)
        }, 0)
        }
      <button onClick={()=>check_out(cart)} disabled={!list.length > 0}>check out</button>
      {
        !!check_type && (check_type === 'success'? 
        <p>支付成功</p>:
          <p>支付失败</p>)
      }
    </div>
  )
}
export default cart