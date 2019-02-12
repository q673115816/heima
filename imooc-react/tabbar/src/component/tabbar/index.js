import React, { Component } from 'react'
import './index.css'

const tarbarArr = [
    {
        img: 'icon-home',
        text: '首页'
    },
    {
        img: 'icon-user',
        text: '用户'
    },
    {
        img: 'icon-crown',
        text: '会员'
    },
    {
        img: 'icon-gift',
        text: '礼物'
    },

]

export default class tabbar extends Component {
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
    return (
      <div className="tabbar">
      <div className="tabbar-content">
        {
            tarbarArr.map((ele,i) => {
                return <div className={"tabbar-item" + (this.state.index === i ? ' active':'')} key={i} onClick={() => this.itemChange(i)}>
                <div className={`iconfont ${ ele.img }`}></div>
                            <div className="">{ ele.text }</div>
                        </div>
            })
        }
      </div>
          
      </div>
    )
  }
}
