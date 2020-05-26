// 1.导入Vue
import Vue from 'vue'

// 导入格式化时间的模块
import moment from 'moment'

// 定义全局的时间过滤器
// Vue.filter('dataFormat',function(dateStr){
//     // 在过滤器的处理函数中，最后必须return一个东西，这样才是一个合法的过滤器
//     return moment(dateStr).format('YYYY-MM-DD HH:mm:ss')
// })
Vue.filter('dataFormat',function(dateStr,formatStr="YYYY-MM-DD HH:mm:ss"){
    // 在过滤器的处理函数中，最后必须return一个东西，这样才是一个合法的过滤器
    return moment(dateStr).format(formatStr)
})