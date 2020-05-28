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

// 直接导入并执行filter.js过滤器，从而为Vue挂载全局过滤器
import './filters.js'



// 安装图片预览的插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// // 配置axios
// import axios from 'axios'
// // 把axios挂在到Vue的原型对象上
// Vue.prototype.$http = axios.create({
//     baseURL:'http://39.106.32.91:3000/' // 在全局设置axios的请求根路径，这样，在发起请求的时候，就可以不写 根地址了
// })

// // this.$http.get('http:/39.106.32.91:3000/api/getlunbo')