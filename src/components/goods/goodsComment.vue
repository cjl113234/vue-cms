<template>
    <div>
        <!-- <h3>这是商品评论页面</h3> -->
        <!-- <cmtbox :newsid="id"></cmtbox> -->
        <cmtbox></cmtbox>
    </div>
</template>

<script>
import cmtbox from '../../components/sub-components/comment.vue'


export default {
    data(){
        return {}
    },
    methods:{},
    props:['id'],
    components:{
        cmtbox
    }
}
</script>

<style lang="scss" scoped>
    
</style>