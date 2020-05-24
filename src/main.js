// 项目的JS打包入口文件

// 1.导入Vue
import Vue from 'vue'

// 全局配置MintUI组件库
import MintUI from 'mint-ui'
// 导入MintUI的样式表
import 'mint-ui/lib/style.css'
// 使用Vue.use来批量注册MintUI组件
Vue.use(MintUI)


// 导入MUI的样式表
import '../lib/mui/css/mui.min.css'
// 导入MUI的扩展图标
import '../lib/mui/css/icons-extra.css'


// // 配置axios
// import axios from 'axios'
// // 把axios挂在到Vue的原型对象上
// Vue.prototype.$http = axios.create({
//     baseURL:'http://39.106.32.91:3000/' // 在全局设置axios的请求根路径，这样，在发起请求的时候，就可以不写 根地址了
// })

// // this.$http.get('http:/39.106.32.91:3000/api/getlunbo')

// 配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入路由对象
import router from './router.js'

// 导入根组件
import App from './components/App.vue'


const vm = new Vue({
    el:'#app',
    render: c => c(App),
    router // 挂载路由
})