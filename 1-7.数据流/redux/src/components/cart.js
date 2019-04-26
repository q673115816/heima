import React from 'react'


function cart(props) {
  const { title, list = {}} = props
  console.log(list);
  
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {
          Array.prototype.map.call(list, (item) =>(
          <li>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default cart