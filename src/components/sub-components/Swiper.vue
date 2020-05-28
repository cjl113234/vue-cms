<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="(item,i) in lunbotu" :key='i'>
                <img :src="item[img]" alt="" :class="[ isfull ? 'img-full' : 'img-mormal' ]">
            </mt-swipe-item> -->
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    
    data(){
        return {};
    },
    methods:{},
    // props:["lunbotu","imgname","isfull"] // 将来，谁来使用这个轮播图组件，就必须为其传递一个lunbotu数组，同时，只能接收img属性的图片作为轮播图展示出来
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 180px;

        .mint-swipe-item{
            // 在父元素中，直接让子元素居中显示【图片：行内替换元素、span、a行内元素、div,p块级元素】
            text-align: center;
            // .img-full{
            //     // 如果给图片应用了这个类，则图片的宽和高都是撑满父元素的
            //     width: 100%;
            //     height: 100%;
            //     overflow:hidden;
            // }
            // .img-normal{
            //     // 如果给图片应用了这个类，则图片的高度为100%，宽度是自适应，横向的位置是居中显示
            //     height: 100%;
            // }
            img{
                width: 100%;
                height: 100%;
            }
            &:nth-child(1){
                background-image: url('../../images/111.png');
                background-size: 100%;
            }
            &:nth-child(2){
                background-image: url('../../images/222.png');
                background-size: 100%;
            }
            &:nth-child(3){
                background-image: url('../../images/333.png');
                background-size: 100%;
            }
        }
    }
</style>