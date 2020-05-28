<template>
    <div>
        <!-- 商品列表区域 -->

        <!-- <div class="goods-list">
            <router-link tag="div" to="'/home/goodsinfo/' + item.id" class="goods-item" v-for="item in goodslist" :key="item.id"> -->
                <!-- 链接地址 -->
                <!-- <img src="item.img_url" alt="">
                <h1 class="title">{{ item.title }}</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥{{ item.sell_price }}</span>
                        <span class="old">￥{{ item.market_price }}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余：{{ item.stock_quantify }}件</span>
                    </p>
                </div>
            </router-link>
        </div> -->
        




        <div class="goods-list">

            <router-link tag="div" to="/home/goodsinfo" class="goods-item">
                <!-- 链接地址 -->
                <img src="https://img.alicdn.com/imgextra/i1/2616970884/O1CN01miBzx21IOugcM0yaN_!!2616970884.jpg_430x430q90.jpg" alt="">
                <h1 class="title">Apple/苹果 iPhone 11全网通4G</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥4999</span>
                        <span class="old">￥5499</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余：60件</span>
                    </p>
                </div>
            </router-link>

            <router-link tag="div" to="/home/goodsinfo" class="goods-item">
                <!-- 链接地址 -->
                <img src="https://img.alicdn.com/imgextra/i4/370627083/O1CN01pR4oGO22C3vSrMdRg_!!370627083.png_430x430q90.jpg" alt="">
                <h1 class="title">Samsung/三星 Galaxy S20 Ultra SM-G9880 120Hz</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥9999</span>
                        <span class="old">￥10999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余：60件</span>
                    </p>
                </div>
            </router-link>

            <router-link tag="div" to="/home/goodsinfo" class="goods-item">
                <!-- 链接地址 -->
                <img src="https://img.alicdn.com/imgextra/i2/1714128138/O1CN01i5PRVL29zFlcjmFiU_!!1714128138.jpg_430x430q90.jpg" alt="">
                <h1 class="title">小米10 5g手机骁龙8651亿像素8K相机</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥3999</span>
                        <span class="old">￥4699</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余：60件</span>
                    </p>
                </div>
            </router-link>

            <router-link tag="div" to="/home/goodsinfo" class="goods-item">
                <!-- 链接地址 -->
                <img src="https://gd4.alicdn.com/imgextra/i4/488477461/O1CN018cQo5Z24zBbpbmVXo_!!488477461.jpg_400x400.jpg" alt="">
                <h1 class="title">vivo NEX 3 5G高通骁龙855Plus曲面屏VIVO手机</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥4578</span>
                        <span class="old">￥5978</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余：60件</span>
                    </p>
                </div>
            </router-link>

            <router-link tag="div" to="/home/goodsinfo" class="goods-item">
                <!-- 链接地址 -->
                <img src="https://img.alicdn.com/imgextra/i2/2207987229535/O1CN01CSK9Oz2KJ55RAGjkz_!!2207987229535.jpg_430x430q90.jpg" alt="">
                <h1 class="title">OPPO Find X2 Pro 兰博基尼版 骁龙865旗舰手机5G新品reno ace2</h1>
                <div class="info">
                    <p class="price">
                        <span class="new">￥12999</span>
                        <span class="old">￥13999</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余：60件</span>
                    </p>
                </div>
            </router-link>
        </div>
        <mt-button type='danger' size='large' style="margin-top:10px;margin-bottom:10px">加载更多</mt-button>

        <!-- <mt-button type='danger' size='large' style="margin-top:10px;margin-bottom:10px" @click="getMore()">加载更多</mt-button> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            // page:1, // 默认展示第一页的数据
            // goodslist:[], // 商品列表
            isloaded:false, // 节流阀，默认为false，表示没有加载完毕
        }
    },
    // created(){
    //     this.getGoodsListByPage()
    // },
    methods:{
        // async getGoodsListByPage(){
        //     // 根据页码获取 商品列表
        //     const { data } = await this.$http.get('/api/getgoods?pageindex=' + this.page)
        //     if(data.status === 0){
        //         // 当获取到的数组长度为，表示数据已经加载完毕了
        //         if(data.message.length <= 0){
        //         // 设置isloaded true表示没有新数据了
        //             this.loaded = true;
        //         }
        //         this.goodslist = this.goodslist.concat(data.message);
        //     } 
        // },
        // getMore(){
        //     // 如果为true，表示数据已经加载完毕了，此时直接return
        //     if(this.isloaded) return;
        //     // 点击加载更多的商品
        //     this.page ++;
        //     this.getGoodsListByPage();
        // }
    },
}
</script>

<style lang="scss" scoped>
    .goods-list{
        // 设置父盒子为弹性盒模型
        display: flex;
        // 默认flex布局的盒子，内部的子元素不会换行，可以使用下面的属性使其换行
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px;
        padding-top: 0;
        .goods-item{
            margin-top: 7px;
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 7px gray;
            padding:2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                width: 100%;
                min-height: 170px;
            }
            h1{
                font-size: 14px;
            }
            .info{
                background-color: #eee;
                overflow: hidden;
                p{
                    margin: 3px;
                }

                .price{
                    .new{
                        color: red;
                        font-size: 16px;
                        font-weight: bold;
                        margin-right: 15px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>