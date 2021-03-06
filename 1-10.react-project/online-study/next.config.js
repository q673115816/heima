// const withCSS = require('@zeit/next-css')
// const withLess = require('@zeit/next-less')

// // 解决ant/lib/style/index.css 不认识@font-face 异常
// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = (file) => {
//   }
// }

// module.exports = Object.assign({},
//   withCSS(withLess({
//     // 开启Less模块化，但是同时也会开启css的模块化，这样会使得antd的样式加载不成功
//     cssModules: true,
//     lessLoaderOptions: {
//       javascriptEnabled: true
//     },
//     webpack(config, {isServer}) {
//       if (!isServer) {

//         // 关闭css模块化,使antd样式生效
//         // config.module.rules[2].use[2].options.modules = false;
//       }

//       // 添加actions和reducers快速引用
//       // config.resolve.alias.actions = path.resolve(__dirname, 'actions');
//       // config.resolve.alias.reducers = path.resolve(__dirname, 'reducers');
//       return config;
//     }
//   }))
// )



const withLessExcludeAntd = require("./next-less.config.js")
 
// choose your own modifyVars
 
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}
 
module.exports = withLessExcludeAntd({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    }
})