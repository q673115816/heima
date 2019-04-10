import axios from './config'

const fetchCfg = {}

const requireContext = require.context('./apiModules', false, /\.js$/)
requireContext.keys().forEach(path => {
  let module = path.replace('.js', '').replace('./', '')
  fetchCfg[module] = requireContext(path).default
})

const fetchParam = param => {
  var valid = /[a-z]+(\.[a-z]+)/.test(param)
  if (!valid) {
    throw new Error(
      '[Error in fetch]: fetch 参数格式为 moduleName.apiName'
    )
  } else {
    return {
      moduleName: param.split('.')[0],
      apiName: param.split('.')[1]
    }
  }
}

class Fetch {
  install (vue) {
    Object.assign(vue.prototype, {
      $fetch: this.fetch
    })
  }

  fetch (moduleInfo, payload) {
    let moduleName = fetchParam(moduleInfo)['moduleName']
    let apiName = fetchParam(moduleInfo)['apiName']
    if (!fetchCfg.hasOwnProperty(moduleName)) {
      throw new Error(
        `[Error in fetch]: 在api配置文件中未找到模块 -> ${moduleName}`
      )
    }

    if (!fetchCfg[moduleName].hasOwnProperty(apiName)) {
      throw new Error(
        `[Error in fetch]: 在模块${moduleName}中未找到接口 -> ${apiName}`
      )
    }

    let fetchInfo = fetchCfg[moduleName][apiName]
    let method = fetchInfo['method']
    let url = fetchInfo['url']

    if (method === 'get') {
      return axios['get'](url, {
        params: payload
      })
    } else {
      return axios[method](url, payload)
    }
  };
}

export default new Fetch()
