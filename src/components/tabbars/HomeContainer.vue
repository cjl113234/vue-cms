<template>
    <div>
        <!-- 轮播图区域 -->
        <!-- <mt-swipe :auto="4000"> -->
            <!-- <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
        </mt-swipe> -->
        <swiper></swiper>
        <!-- <swiper :lunbotu="lunbotu" :imgname="img" :isfull="true"></swiper> -->



        <!-- 轮播图区域 -->
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,i) in lunbotu" :key='i'>
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe> -->

        <!-- 九宫格布局 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img :src="news" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <img :src="imageShare" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <img :src="shopcar" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="leave_a_message" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="video" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img :src="contact" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
// 导入自己封装的轮播图组件
import swiper from '../sub-components/Swiper.vue'




// 导入图片url相对路径地址

import news from '../../images/news.png'
import imageShare from '../../images/imageShare.png'
import shopcar from '../../images/shopcar.png'
import leave_a_message from '../../images/leave_a_message.png'
import video from '../../images/video.png'
import contact from '../../images/contact.png'
export default {
    
    data(){
        return {
            // lunbotu:[] // 轮播图的数组


            // 动态绑定图片
            news,imageShare,shopcar,leave_a_message,video,contact,
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
    },
    components:{
        // 注册子组件
        swiper
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
    .mui-grid-view{
        li{
            img{
                width: 60px;
                height: 60px;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }
    // .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    //     border: none;
    // }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px;
    }
</style>