<template>
    <div>
        <!-- <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to:"'/home/newsinfo/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dateFormat(YYYY-MM-DD) }}</span>
                            <span>点击：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul> -->
        
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img2">
                    <div class="mui-media-body">
                        <h1>test2</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-24</span>
                            <span>点击：2次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img3">
                    <div class="mui-media-body">
                        <h1>test3</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-23</span>
                            <span>点击：3次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/1">
                    <img class="mui-media-object mui-pull-left" :src="img1">
                    <div class="mui-media-body">
                        <h1>test1</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2020-05-25</span>
                            <span>点击：1次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        
    </div>
</template>

<script>
import img1 from '../../images/111.png'
import img2 from '../../images/222.png'
import img3 from '../../images/333.png'

export default {
    data(){ 
        // MVVM
        return {
            img1:img1,
            img2:img2,
            img3:img3,
            // newslist:[] // 默认在页面挂载一个空数组，表示新闻列表
        }
    },
    // created(){
    //     // 每当页面加载的时候，就获取数据
    //     this.getNewsList()
    // },
    methods:{
        // async getNewsList(){
        //     // 获取新闻列表
        //     const { data } = await this.$http.get('/api/getnewslist');
        //     // 如果获取数据成功，则将数据挂载上
        //     // if(data.status === 0) return console.log(data.message)
        //     if(data.status === 0) return (this.newslist = data.message)
        // }
    }
}
</script>

<style lang="scss" scope>
    .mui-media-body{
        h1{
            font-size: 14px;
        }
    }
    .mui-ellipsis{
        color: #26a2ff;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
</style>