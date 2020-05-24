<template>
    <div>

        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="(item,i) in lunbotu" :key='i'>
                <img :src="item.img" alt="">
            </mt-swipe-item> -->
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <h3>HomeContainer</h3>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // lunbotu:[] // 轮播图的数组
        };
    },
    // created(){
    //     this.getlunbotu();
    // },
    methods:{
        // async getlunbotu(){
        //     // 获取轮播图的方法
        //     const { data } = await this.$http.get("/api/getlunbo");
        //     console.log(data);
        //     if(data.status === 0) this.lunbotu = data.message;
        // }
    }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
        height: 100%;
    }
    .mint-swipe{
        height: 180px;

        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color: burlywood;
            }
            &:nth-child(3){
                background-color: fuchsia;
            }
        }
    }
</style>