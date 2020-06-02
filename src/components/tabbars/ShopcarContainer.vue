<template>
    <div class="shopcar-container">
        <!-- <h3>ShopcarContainer</h3> -->
        <div class="goods-list">

            
            <!-- <div class="mui-card" v-for="item in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner goods-item"> -->
                        <!-- 开关 -->
						<!-- <mt-switch v-model="selectedObj[item.id]" @change="changeSelect(item.id,selectedObj[item.id])"></mt-switch> -->
                        <!-- 图片 -->
                        <!-- <img :src="item.thumb_path" alt=""> -->
                        <!-- 信息区域 -->
                        <!-- <div class="info">
                            <h1>item.title</h1>
                            <div class="goods-info">
                                <span class="price">￥{{ item.price }}</span> -->
                                 <!-- countObj[item.id]表示这条商品的对应的数量 -->
                                <!-- <numbox  :initcount="countObj[item.id]" :id="item.id"></numbox>
                                <a href="#" @click.prevent='del(item.id)'>删除</a>
                            </div>
                        </div>
					</div>
				</div>
            </div> -->



            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner goods-item">
                        <!-- 开关 -->
						<mt-switch></mt-switch>
                        <!-- 图片 -->
                        <img src="https://img.alicdn.com/imgextra/i1/2616970884/O1CN01miBzx21IOugcM0yaN_!!2616970884.jpg_430x430q90.jpg" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>Apple/苹果 iPhone 11全网通4G</h1>
                            <div class="goods-info">
                                <span class="price">￥4999</span>
                                <numbox></numbox>
                                <a href="#">删除</a>
                            </div>
                        </div>
					</div>
				</div>
            </div>


            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner goods-item">
                        <!-- 开关 -->
						<mt-switch></mt-switch>
                        <!-- 图片 -->
                        <img src="https://img.alicdn.com/imgextra/i4/370627083/O1CN01pR4oGO22C3vSrMdRg_!!370627083.png_430x430q90.jpg" alt="">
                        <!-- 信息区域 -->
                        <div class="info">
                            <h1>Samsung/三星 Galaxy S20 Ultra SM-G9880 120Hz</h1>
                            <div class="goods-info">
                                <span class="price">￥8999</span>
                                <numbox></numbox>
                                <a href="#">删除</a>
                            </div>
                        </div>
					</div>
				</div>
            </div>


            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计(不含运费)</p>
                            <p>
                                已勾选商品<span class="danger">0</span>件，总价<span  class="danger">￥0</span>
                            </p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
            </div>

            <!-- <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计(不含运费)</p>
                            <p>
                                已勾选商品<span class="danger">{{ selectedCount }}</span>件，总价<span  class="danger">￥{{ amount }}</span>
                            </p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
            </div> -->
        </div>
    </div>
</template>

<script>
import numbox from '../sub-components/shopcar_numbox.vue'
import {mapGetters,mapMutations} from 'vuex'


export default {
    data(){
        return {
            // goodsList:[]
        };
    },
    // created(){
    //     getGoodsList()
    // },
    methods:{
        ...mapMutations(['delFromCart','changeSelectState']),
        // async getGoodsList(){
        //     if(this.idstr.length <= 0) return;
        //     const { data } = await this.$http.get('/api/goods/getshopcarlist/' + this.idstr);
        //     if(data.status === 0) return (this.goodsList = data.message);
        // },
        // del(id){
        //     // 删除商品
        //     // console.log(id)
        //     // 从界面上删除数据
        //     this.goodslist.some((item,i) =>{
        //         if(item.id == id){
        //             this.goodslist.splice(i,1)
        //             return true
        //         };
        //     });
        //     // 从vuex中删除数据
        //     this.delFromCart(id);
        // },
        // changeSelect(id,select){
        //     // 更改开关的状态
        //     // console.log(id + '---' + select)
        //     this.changeSelectState({id,selected:select})
        // }
    },
    computed:{
        // ...mapGetters(['idstr','countObj','selectedObj,'selectedCount','amount'])
    },
    components:{
        numbox
    }
}
</script>

<style lang="scss" scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
        .goods-item{
            display: flex;
            img{
                width: 60px;
                height: 60px;
            }
            h1{
                font-size: 13px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .goods-info{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;;
                    .price{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                }
            }
        }
    }
    .danger{
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>