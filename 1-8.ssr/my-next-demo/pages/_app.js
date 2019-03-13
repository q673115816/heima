import React, { Component } from 'react'
import App , {Container} from 'next/app'
import Movielayout from '../layouts/Movielayout'
class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <Movielayout>
                {children}
            </Movielayout>
        )
    }
}

export default class MyApp extends App {
  render() {
      const {Component, pageProps} = this.props
    return (
        <Container>
          <Layout>
              <Component {...pageProps}></Component>
          </Layout>
      </Container>
    )
  }
}
