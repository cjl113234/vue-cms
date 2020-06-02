import VueRouter from 'vue-router'

// 导入路由组件
import HomeContainer from './components/tabbars/HomeContainer.vue'
import MemberContainer from './components/tabbars/MemberContainer.vue'
import ShopcarContainer from './components/tabbars/ShopcarContainer.vue'
import SearchContainer from './components/tabbars/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
import GoodsList from './components/goods/goodsList.vue'
import GoodsInfo from './components/goods/goodsInfo.vue'
import GoodsDesc from './components/goods/goodsDesc.vue'
import GoodsComment from './components/goods/goodsComment.vue'


const router = new VueRouter({
    routes:[
        { path:'/',redirect:'/home' },
        { path:'/home',component:HomeContainer },
        { path:'/member',component:MemberContainer },
        { path:'/shopcar',component:ShopcarContainer },
        { path:'/search',component:SearchContainer },
        { path:'/home/newslist',component:NewsList },
        { path: '/home/newsinfo/:id',component:NewsInfo,props:true }, // 启用props来接收路由的参数
        { path:'/home/photolist',component:PhotoList },
        { path:'/home/photoinfo',component:PhotoInfo,props:true },
        { path:'/home/goodslist',component:GoodsList },
        // { path:'/home/goodinfo/:id',component:GoodsInfo,props:true },
        { path:'/home/goodsinfo',component:GoodsInfo,props:true },
        // { path:'/home/goodsdesc/:id',component:GoodsDesc,props:true },
        { path:'/home/goodsdesc',component:GoodsDesc,props:true },


        // 命名路由的使用
        // router.push({name:'user',params:{userid:123}})

        // { path:'/home/goodscomment/:id',component:GoodsComment,props:true },
        // { path:'/home/goodscomment/:id',component:GoodsComment,props:true,name:'goodscmt' },
        { path:'/home/goodscomment',component:GoodsComment,props:true,name:'goodscmt' },
    ],
    linkActiveClass:'mui-active' // 手动设置 被激活的 路由链接的高亮类名
})

export default router