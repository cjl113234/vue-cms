<template>
    <div>
        <!-- <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'> -->
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
            <!-- <button class="mui-btn mui-btn-numbox-minus" type="button" @click="changed()">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="changed()">+</button> -->
            <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
            <!-- 监听文本框的change事件，来动态获取选择到的数量 -->
            <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChanged()" />
            <button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
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
    methods:{
        // changed(){
        // 获取选择的商品数量
        //     const val = this.$refs.numbox.value;
        //     console.log("数量改变了：" + val);
        // },
        countChanged(){
            // 获取选择的商品数量
            const val = this.$refs.numbox.value;
            // console.log("数量改变了：" + val);
            // 每当numbox子组件中的count发生变化后，要立即把最新的数量值传递给goodsinfo父组件，这样，每当我们点击【加入购物车】按钮的时候，就能立即把最新的count值，同步到购物车的徽标中
            // 这样就涉及到了父子组件传值，子组件向父组件传递数据
            this.$emit("func",parseInt(val));
        },
    },
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