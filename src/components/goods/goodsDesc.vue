<template>
    <div class="goodsdesc-container">
        <!-- <h3>商品描述页面</h3> -->
        <!-- <h3>商品描述页面-----{ id }</h3> -->
        <!-- <h3 class="title">{{ info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div> -->
        <h3 class="title">test,test，商品描述页面</h3>
        <hr>
        <div class="content">
            <p>this is a simple Vue project</p><br>
            <p>this is a simple Vue project</p><br>
            <p>this is a simple Vue project</p><br>
            <p>this is a simple Vue project</p><br>
            <p>this is a simple Vue project</p><br>
            <img src="https://img.alicdn.com/imgextra/i3/725677994/O1CN01C1YQi628vIkYCZRyn_!!725677994.jpg_430x430q90.jpg" alt="">
            <p>this is a simple Vue project</p><br>
            <p>this is a simple Vue project</p><br>
            <p>this is a simple Vue project</p><br>
            <p>this is a simple Vue project</p><br>
            <p>this is a simple Vue project</p><br>
            <img src="https://img.alicdn.com/imgextra/i3/725677994/O1CN018diLyQ28vIkWIjfqE_!!725677994.jpg_430x430q90.jpg" alt="">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            info:[]
        }
    },
    // created(){
    //     this.getGoodsDesc()
    // },
    methods:{
        // async getGoodsDesc(){
        //     const { data } = await this.$http.get('/api/goods/getdesc' + this.id);
        //     if(data.status === 0) return (this.info = data.message[0]);
        // }
    },
    // props:["id"],
}
</script>

<style lang="scss">
    .goodsdesc-container{
        .title{
        font-size: 14px;
        margin: 10px 0;
        color: blue;
        text-align: center;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
    
</style>