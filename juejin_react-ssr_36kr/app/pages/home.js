import { Link } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'

const Home = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Link to="/list">跳转到列表页</Link>
        </div>
    )
    // componentDidMount() {
    //     // const {news, fetch} = this.props
    //     // news.length || fetchHome();
    // }
}

function mapStateToProps(state) {
    return { ...state.home }
}

export default connect(mapStateToProps)(Home)