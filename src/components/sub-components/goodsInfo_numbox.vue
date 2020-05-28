<template>
    <div>
        <!-- <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'> -->
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
// 导入MUI从而支持初始化数字框
import mui from '../../../lib/mui/js/mui.js'


export default {
    data(){
        return {}
    },
    methods:{},
    mounted(){
        // 当组件挂载到页面后，去初始化 数字框
        mui(".mui-numbox").numbox()
    },
    // props:["max"], // 接受父组件传来的库存量max
    // watch:{
        // // 使用场景，监听单个的虚拟的数据
        // max:function(newval,oldval){
        //     // 不论外接传递给numbox的max值到底是什么
        //     // 最终，最后传递的那个max值，肯定是一个合法的数值
        //     console.log(newval + "----" + oldval);
        //     // 每当监听到max值的改变，不论这个值是否合法，都重新为数字框使用JS API来手动设置最大值
        //     mui(".mui-numbox").numbox().setOption('max',newval)
        // }
    // }
}
</script>

<style lang="scss" scoped>
    
</style>