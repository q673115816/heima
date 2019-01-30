import Vue from 'vue'
import Router from 'vue-router'
import newsRouterConfig from './news'
import porductRouterConfig from './product'

Vue.use(Router)

let routes = []

const routerContext = require.context('./', true, /index\.js$/)
routerContext.key().forEach(route => {
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)

  routes = [...routes, ...(routerModule.default || routerModule)]
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
