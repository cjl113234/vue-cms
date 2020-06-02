<template>
    <div class="goodsinfo-container">
        <!-- <h3>商品详情---{{ id }}</h3>   -->
        <!-- <h3>商品详情</h3>   -->


        <!-- 要实现动画的小球 -->
        <!-- 注意：钩子函数动画，这些钩子函数，都是通过事件绑定机制，绑定到transition元素上的 -->
        <transition 
            @before-enter="beforeEnter" 
            @enter="enter" 
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="flag"></div>
        </transition>



        <!-- 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper></swiper>
                    <!-- <swiper :lunbotu="lunbotu" :imgname="src"></swiper> -->
                </div>
            </div>
        </div>


        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">xxxxxxxxx</div>
            <!-- <div class="mui-card-header">{{ goodsinfo.title }}</div> -->
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：
                        <span style="margin-right:10px"><del>￥5499</del></span>
                        <!-- <span style="margin-right:10px"><del>￥{{ goodsinfo.market_price }}</del></span> -->
                        销售价：
                        <span style="font-size:16px;color:red;font-weight:bold">￥4999</span>
                        <!-- <span style="font-size:16px;color:red;font-weight:bold">￥{{ goodinfo.sell_price }}</span> -->
                    </p>
                    <p>
                        <span style="float:left">购买数量：</span>
                        
                        <!-- 注意：这里的max是库存量 -->
                        <!-- 由于goodsinfo是通过Ajax动态获取回来的，但是Ajax是异步请求，需要消耗时间 -->
                        <!-- 因此，可能会导致这样的情况：numbox组件先于Ajax渲染出来，此时，组件被渲染的时候，goodsinfo为空对象，因此，传递到子组件的stock_quantity是undefined -->
                        <!-- <numbox :max="goodinfo.stock_quantity"  @func="getSelectedCount"></numbox> -->
                        <numbox @func="getSelectedCount"></numbox>
                    </p>
                    <div>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToCart()">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>


        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：testtesttest</p>
                    <p>库存情况：34</p>
                    <p>上架时间：2020-05-28 22:28:54</p>

                    <!-- <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodinfo.stock_quantity }}</p>
                    <p>上架时间：{{ goodsinfo.add_time|dateFormat }}</p> -->
                </div>
            </div>
            <div class="mui-card-footer btnarea">
                <!-- <router-link to="'/home/goodsdesc' + goodsinfo.id">
                    <mt-button type="primary" size="small">立即购买</mt-button>
                </router-link> -->


                <!-- <router-link to='/home/goodsdesc'>
                    <mt-button type="primary" size="large" plain>图文介绍</mt-button>
                </router-link> -->

                <!-- 使用编程式导航，来实现路由页面的跳转 -->
                <!-- 编程式导航：就是使用JS的代码的方式，来实现路由的跳转 -->
                <!-- 元素导航：使用router-link元素实现的导航 -->
                <mt-button type="primary" size="large" plain @click="goDesc()">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment()">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
// 导入自己封装的轮播图组件
import swiper from '../sub-components/Swiper.vue'
// 导入数字框组件
import numbox from '../sub-components/goodsInfo_numbox.vue'

import {mapMutations} from 'vuex'


export default {
    data(){
        return {
            // lunbotu:[], //商品的轮播图
            // goodsinfo:{}, // 商品的详情
            flag: false, // 小球的显示与隐藏状态
            selectedCount: 1 // 用户选择的商品购买数量，默认选中1个
        }
    },
    // created(){
    //     this.getlunbotu(),
    //     this.getGoodsInfoById()
    // },
    methods:{
        ...mapMutations(['addToCar']),
        // async getlunbotu(){
        //     // 获取轮播图的方法
        //     const { data } = await this.$http.get('/api/getthumbimages/' + this.id);
        //     if(data.status === 0) return (this.lunbotu = data.message);
        // },
        // async getGoodsInfoById(){
        //     // 根据ID获取商品的参数
        //     const { data } = await this.$http.get('/api/goods/getinfo/' + this.id);
        //     if(data.status === 0) return (this.goodsinfo = data.message[0]);
        // },
        goDesc(){
            // 点击按钮，跳转到商品描述页面
            // 注意：在this这个组件上，有this.$route和this.$router
            // this.$route是专门用来获取路由中参数的
            // this.$router是专门来实现编程式导航的
            // this.$router.push("/home/goodsdesc/" + this.goodsinfo.id)
            this.$router.push("/home/goodsdesc")
            // console.log(this)
        },
        goComment(){
            // 点击按钮，跳转到商品评论页面
            // this.$router.push("/home/goodscomment" + this.goodsinfo.id)

            // this.$router.push("/home/goodscomment")
            // console.log(this)



            // this.$router.push({
            //     name:'goodscmt',
            //     params:{ id:this.goodsinfo.id }
            // })

            this.$router.push({
                name:'goodscmt',
            })
        },
        addToCart(){
            // 点击加入购物车
            this.flag = !this.flag;
            // 调用mutations中的addToCar
            // this.$store.commit("addToCar",{
            //     id:this.id,
            //     count:this.selectedCount
            // });

            // 直接调用mapMutations映射出来的方法
            // this.addToCar({ id:this.id,count:this.selectedCount,selected:true,price:this.goodsinfo.sell_price })
            this.addToCar({ id:this.id,count:this.selectedCount,selected:true })
        },
        beforeEnter(el){
            // 动画开始之前，设置小球的起始状态
            el.style.transform = "translate(0,0)";
        },
        enter(el,done){
            // 入场动画结束后，小球的终止状态
            el.offsetWidth;


            // 动态获取小球的横纵坐标
            const ballpos = el.getBoundingClientRect()
            // 动态获取徽标的横纵坐标【注意：这里获取徽标的位置，和双向数据绑定没有任何关系，所以，可以直接使用普通的DOM操作】
            // DOM操作的优势：不论要操作的元素属于哪个组件，只要这个组件属于document，那么就能直接获取到
            const badgepos = document.getElementById("badge").getBoundingClientRect()
            const left = badgepos.left - ballpos.left
            const top = badgepos.top - ballpos.top




            // 设置小球的入场动画终止状态
            // 动态设置left和top的值
            el.style.transform = "translate(" + left + "px," + top + "px)";
            // 设置小球的过渡效果
            // 贝塞尔曲线在线生成地址：https://cubic-bezier.com
            el.style.transition = 'all .5s cubic-bezier(.46,-0.4,1,.49)'
            // 当入场动画完成之后，需要手动调用一下done回调函数，直接跳过小球的出场动画
            done()
        },
        afterEnter(el){
            // 入场动画完成后的回调函数
            this.flag = !this.flag
        },
        getSelectedCount(c){
            // 获取选择的商品的数量
            // console.log('父组件拿到了子组件传递过来的count值为：' + c)
            // 把用户选择的最新的值，保存到data中，方便用户点击加入购物车按钮的时候，把数量值同步到徽标中
            this.selectedCount = c;
        },

    },
    // props:['id'],
    components:{
        // 注册子组件
        swiper,
        numbox
    }
}
</script>

<style lang="scss" scoped>
    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;
    }
    .btnarea{
        flex-direction: column;
        button + button{
            margin-top: 15px;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        // 让小球脱离标准流
        position: absolute;
        z-index: 99;
        left: 149px;
        top: 370px;
        // 将来小球要通过动画位移的位置
        // transform: translate(89px,250px);
    }
</style>