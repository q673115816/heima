import React, { Component } from 'react'

import { Link, Route, Switch } from 'react-router-dom'
import index from 'src/components/Page'
import Movie from 'src/components/Movie'
import MovieDetail from 'src/components/Movie/Detail'
export default class Page extends Component {
  render() {
    return (
      <div>
        <Link to="/page/movie">电影</Link>
        <Switch>
          <Route exact path='/page' component={index}></Route>
          <Route exact path='/page/movie' component={Movie}></Route>
          <Route path='/page/movie/:id' component={MovieDetail}></Route>
        </Switch>

      </div>
    )
  }
}
