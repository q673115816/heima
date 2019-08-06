
import Router from 'next/router'

export default ()=>{
   return <div style={{height:'300px',width:'1024px',margin:'100px auto',fontSize:'100px'}}
   onClick={()=>{
       Router.push({pathname:'/index'})
   }}
   >
   Home
   </div>
}