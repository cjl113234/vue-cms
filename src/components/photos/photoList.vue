<template>
    <div>
		<!-- 图片分类区域 -->
         <!-- <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<span class="['mui-control-item',
						item.id === 0 ? 'mui-active':'']" 
						v-for="item in items" 
						:key="item.id" 
						@tap='getPhotoByCategory(item.id)'>
							{{ item.title }}
						</span>
					</div>
				</div>
			</div> -->

		<!-- 图片分类区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<span class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</span>
						<span class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</span>
						<span class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</span>
						<span class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</span>
						<span class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</span>
                        <span class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							aaa
						</span>
						<span class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							bbb
						</span>
					</div>
				</div>
			</div>


        <!-- <h3>图片分享组件</h3> -->


		<!-- 图片列表区域 -->
		<!-- <ul class="lazyul">
			<li v-for="item in photoList" :key="item.id" :to="/home/photoinfo/" + item.id> -->
				<!-- 注意：v-lazy要指定图片的地址 -->
				<!-- <img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">{{ item.title }}</h1>
					<div class="info-content">{{ item.zhaiyao}}</div>
				</div>
			</li>
		</ul> -->



		<!-- 图片列表区域 -->
		<ul class="lazyul">
			<router-link tag="li" v-for="item in photoList2" :key="item" to="/home/photoinfo">
				<!-- 注意：v-lazy要指定图片的地址 -->
				<img v-lazy="item">
				<div class="info">
					<h1 class="info-title">test,test,test</h1>
					<div class="info-content">testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttes<br>testtesttesttesttesttesttesttesttesttesttesttesttest</div>
				</div>
			</router-link>
		</ul>
    </div>
</template>

<script>
// 导入mui的JS文件,这样，就可以使用mui来初始 滑动控件了
import mui from '../../../lib/mui/js/mui.js'
import img1 from '../../images/111.png'
import img2 from '../../images/222.png'
import img3 from '../../images/333.png'
import img4 from '../../images/news.png'
import img5 from '../../images/imageShare.png'
import img6 from '../../images/shopcar.png'
import img7 from '../../images/leave_a_message.png'
import img8 from '../../images/video.png'
import img9 from '../../images/contact.png'


export default {
    data(){
        return {
			// catagory:[], // 所有的图片分类数据
			// photoList:[], // 图片列表
			photoList2:[
				img1,img2,img3,img4,img5,img6,img7,img8,img9
			]
		}
	},
	// created(){
	// 	this.getPhotoCategory();
	// 	this.getPhotoByCategory(0);
	// },
    methods:{
		// async getPhotoCategory(){
		// 	// 获取图片分类数据
		// 	const { data } = await this.$http.get('/api/getimgcategory');
		// 	if(data.status === 0){
		// 		// 手动补全分类信息
		// 		data.message.unshift({title:"全部",id:0});
		// 		this.catagory = data.message;
		// 	}
		// },
		// async getPhotoByCategory(id){
		// 	// 根据图片分类的id获取图片的数据
		// 	const { data } = await this.$http.get('/api/getimages/' + id);
		// 	if(data.status === 0) return this.photoList = data.message;
		// }
	},
	mounted() {
            // 当此钩子函数执行的时候，才可以进行控件或插件的初始化工作
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
}
</script>

<style lang="scss" scoped>
    .mui-slider{
        touch-action: pan-x;
    }
	.lazyul{
		margin: 0;
		padding: 10px;
		li{
			background-color: #ccc;
			text-align: center;
			box-shadow: 0 0 7px gray;
			position: relative;
			& + li{
				// 这种样式的写法适合的场景：排除第一个，应用给其他所有的li
				margin-top: 10px;
			}
			img[lazy=loading]{
				width: 40px;
				height: 300px;
				margin: auto;
			}
			img{
				width: 100%;
				height: 200px;
				vertical-align: middle;
			}
		}
	}
	.info{
		position: absolute;
		bottom: 0;
		color: #fff;
		background-color: rgba(0,0,0,0.5);
		max-height: 86px;
		overflow: hidden;
		.info-title{
			font-size: 14px;
		}
		.info-content{
			font-size: 13px;
			text-align: left;
			text-indent: 2em;
		}
	}
	
</style>