<template>
    <div class="photoinfo-container">
        <!-- <h3>图片详情组件----{ id }</h3> -->
        <!-- <h3>{{ photoinfo.title }}</h3> -->
        <h3 class="title">图片详情组件</h3>


        <p class="info">
            <span>发表时间：2020-05-27</span>
            <span>点击：1次</span>
        </p>
        <!-- <p>发表时间：{{ photoinfo.add_time|dataFormat }}</p>
        <p>点击：{{ photoinfo.click }}次</p> -->

        <hr>

        <!-- 缩略图区域 -->
        <!-- <div class="thumb-img-list"> -->
            <!-- 使用v-for循环渲染缩略图 -->
            <!-- <img class="preview-img" :src="item.src" v-for="(item,i) in items" :key="i" @click="$preview.open(index,list)">
        </div> -->


        <div class="thumb-img-list">
            <vue-preview :slides="slide1"></vue-preview>
        </div>



        <!-- 内容区域 -->
        <!-- <div class="content" v-html="photoinfo.content"></div> -->
        <div class="content">this is a test,this is a test,this is a test,this is a test,this is a test,this is a test,this is a test</div>


        <!-- 评论子组件 -->
        <!-- 注意，在使用评论子组件的时候，必须要接收一个newsid的属性 -->
        <!-- <comment :newsid="id"></comment> -->
        <comment></comment>
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../sub-components/comment.vue'




export default {
    data(){
        return {
            slide1: [
                {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 1200,
                    h: 900
                }
            ],
            // photoinfo:{} // 图片信息
            photoList:[] //缩略图的数组
        }
    },
    // created(){
    //     this.getPhotoInfo()
    //     this.getThumbImg()
    // },
    methods:{
    //     async getPhotoInfo(){
    //         // 当调用一个异步的方法，同时，这个异步方法的返回值是Promise对象的时候，才可以使用await和async
    //         const { data } = await this.$http.get('/api/getimageinfo/' + this.id);
    //         if(data.status === 0) return this.photoinfo = data.message[0]
    //     },
    //     async getThumbImg(){
    //         获取图片的缩略图数据
    //         const { data } = await this.$http.get('/api/getthumbimages/' + this.id);
    //         if(data.status === 0){
    //         为每一张图片设置宽高
    //         data.message.forEach(item =>{
    //             item.w = 600;
    //             item.h = 400;
    //         })
    //         this.photoList = data.message;
    //     }
    // },
    },
    // props:['id'],
    components:{
        comment
    },
}
</script>

<style lang="scss" scoped>
    .photoinfo-container{
        padding: 3px;
    }
    .title{
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
        color: #26a2ff;
    }
    .info{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .thumb-img-list{
        img{
            margin: 10px;
            box-shadow: 0 0 7px gray;
        }
    }
</style>