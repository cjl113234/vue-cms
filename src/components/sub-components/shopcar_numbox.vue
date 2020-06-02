<template>
    <div>
        <!-- <div class="mui-numbox" data-numbox-min='1' data-numbox-max='max'> -->
        <div class="mui-numbox" data-numbox-min='1' style="height:25px">
            <!-- <button class="mui-btn mui-btn-numbox-minus" type="button" @click="changed()">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="changed()">+</button> -->
            <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
            <!-- 监听文本框的change事件，来动态获取选择到的数量 -->
            <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChanged()" />
            <!-- <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="numbox" @change="countChanged()" /> -->
            <button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
        </div>
    </div>
</template>

<script>
// 导入MUI从而支持初始化数字框
import mui from '../../../lib/mui/js/mui.js'
import {mapMutations} from 'vuex'

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
            const val = parseInt(this.$refs.numbox.value);
            // 调用mutations方法，更新数量
            this.updateGoodsCount({id:this.id,count:val})
        },
        ...mapMutations(['updateGoodsCount'])
        
    },
    // props:["initcount","id"],
    mounted(){
        // 当组件挂载到页面后，去初始化 数字框
        mui(".mui-numbox").numbox()
    },
}
</script>

<style lang="scss" scoped>
    
</style>