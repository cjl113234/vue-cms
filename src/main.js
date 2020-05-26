// 项目的JS打包入口文件

// 1.导入Vue
import Vue from 'vue'

// 导入全局配置模块，这个模块中的代码，和main.js中的vm实例没有关系，只是全局的Vue配置；
// 因此，抽离出去之后，可以让项目结构更加清晰
import './globalConfig.js'


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