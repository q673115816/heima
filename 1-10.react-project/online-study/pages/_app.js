import App, {Container} from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import initStore from '../store'
import { Provider } from 'react-redux'
import Layout from '../components/layout'

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
     /*判断子组件是否有getInitialProps，如果有则调用子组件的getInitialProps，可以在子组件中getInitialProps返回同一个key
     的不同值，类实现是否加载局部组件*/    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps, store} = this.props
    return <Container>
      	 {/* 调用Layout布局组件并完成子组件Component内容的显示 */}  
         <Provider store = {store}>
            <Layout Component={Component}  {...pageProps}></Layout>
         </Provider>
    </Container>
  }
}

export default withRedux(initStore)(MyApp)