import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const tarbarArr = [
    {
        img: 'icon-home',
        text: '首页',
        link: '/home'
    },
    {
        img: 'icon-user',
        text: '用户',
        link: 'user'
    },
    {
        img: 'icon-crown',
        text: '会员',
        link: 'vip'
    },
    {
        img: 'icon-gift',
        text: '礼物',
        link: 'gift'
    },

]

const Tabbar = (WrappedCompent) => {
  return class tabbar extends Component {
    constructor(porps) {
      super(porps)
      this.state = {
        index: 0
      }
    }
    itemChange = (i) => {
      this.setState({
        index: i
      })
    }
    render() {
      const url = window.location.href
      return  (
        <div className="contain">
          <div className="contain-text">
            <WrappedCompent></WrappedCompent>
          </div>
          <div className="tabbar">
          <div className="tabbar-content">
            {
                tarbarArr.map((ele,i) => {
                    return (
                    <Link to={ele.link} className={"tabbar-item" + (url.indexOf(ele.link) > -1 ? ' active':'')} key={i}>
                        <div className={`iconfont ${ ele.img }`}></div>
                        <div className="">{ ele.text }</div>
                    </Link>
                            )
                })
            }
          </div>
              
          </div>
        </div>)
      
    }
  }

}

export default Tabbar