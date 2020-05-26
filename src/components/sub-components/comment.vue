<template>
    <div>
        <h4>发表评论</h4>
        <!-- <h4>发表评论 --- {{ newsid }}</h4> -->
        <hr>

        <textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postMsg()">发表评论</mt-button>


        <!-- 评论列表区域 -->
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第1楼&nbsp;用户：小明&nbsp;发表时间：2020-05-16</div>
                <div class="cmt-item-body">good,good</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第2楼&nbsp;用户：小王&nbsp;发表时间：2020-05-17</div>
                <div class="cmt-item-body">nice</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第3楼&nbsp;用户：小李&nbsp;发表时间：2020-05-18</div>
                <div class="cmt-item-body">好</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第4楼&nbsp;用户：小明&nbsp;发表时间：2020-05-19</div>
                <div class="cmt-item-body">good,good</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第5楼&nbsp;用户：小张&nbsp;发表时间：2020-05-20</div>
                <div class="cmt-item-body">哈哈哈</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第6楼&nbsp;用户：小谢&nbsp;发表时间：2020-05-21</div>
                <div class="cmt-item-body">嘿嘿</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第7楼&nbsp;用户：小柳&nbsp;发表时间：2020-05-22</div>
                <div class="cmt-item-body">啊</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第8楼&nbsp;用户：小冈&nbsp;发表时间：2020-05-23</div>
                <div class="cmt-item-body">呵呵</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第9楼&nbsp;用户：小许&nbsp;发表时间：2020-05-24</div>
                <div class="cmt-item-body">aaa</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第10楼&nbsp;用户：小丁&nbsp;发表时间：2020-05-25</div>
                <div class="cmt-item-body">非常好</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-item-title">第11楼&nbsp;用户：小吕&nbsp;发表时间：2020-05-26</div>
                <div class="cmt-item-body">hhh</div>
            </div>
        </div>



        <!-- <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in cmtlist" :key="i">
                <div class="cmt-item-title">第{{ i + 1}}楼&nbsp;用户：{{ item.user_name}}&nbsp;发表时间：{{item.add_time|dateFormat}}</div>
                <div class="cmt-item-body">{{ item.content }}</div>
            </div>
        </div> -->


        <!-- <mt-button type="danger" size="large" plain @click="loadMore()">加载更多</mt-button> -->
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
// 按需从Mint-UI中，导出需要的弹框组件
import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            page:1, // 默认展示第一页的评论
            cmtlist:[], // 评论数组
            msg:'', // 即将发表的评论内容
        }
    },
    // created(){
    //     this.getCommentByPage()
    // },
    methods:{
        // async getCommentByPage(){
        //     // 根据页数来获取评论的数据
        //     const { data } = await this.$http.get("/api/..getComments/" + this.newsid + "?pageindex=" + this.page);

        //     // console.log(data);
        //     if(data.status === 0) return (this.cmtlist = this.cmtlist.comcat(data.message));
        // },
        // loadMore(){
        //     // 点击按钮，加载更多评论
        //     // 当触发这个加载更多方法的时候，应该让page页码 +1 之后，再调用getCommentByKey 方法
        //     this.page++;
        //     this.getCommentByKey();
        // },
        async postMsg(){
            // 点击发表评论
            // 如果用户没有填写评论内容，则阻止其发表评论
            if(this.msg.trim().length <= 0) return Toast("请输入评论内容!");
            // 发表评论的逻辑：
            const { data } = await this.$http.post("/api/postcomment/" + this.newsid,{ content:this.msg.trim() });

            // console.log(data)
            if(data.status === 0){
                // 刷新评论列表
                // 1.再次调用getCommentByPage
                // console.log('ok');
                // // 获取评论之前，先把之前所有的评论清空
                // this.cmtlist = [];
                // this.getCommentByPage();



                // 为了防止重新调用getCommentByPage方法的时候，会把之前所有评论清空的问题
                // 在客户端手动拼接处一个评论的对象，并把这个评论对象，unshift到cmtlist中
                this.cmtlist.unshift({ 
                    user_name:'匿名用户',
                    add_time:new Date(),
                    content:this.msg.trim() 
                });
                this.msg = '';
            }

        }
    },
    props:["newsid"] // 接受父组件传递过来的新闻id
}
</script>

<style lang="scss" scoped>
    textarea{
        font-size: 14px;
        margin: 0;
    }
    .cmt-list{
        margin-top: 4px;
        .cmt-item{
            line-height: 30px;
            .cmt-item-title{
                font-size: 14px;
                background-color: #ddd;
            }
            .cmt-item-body{
                font-size: 13px;
                text-indent: 2em;
            }
        }
    }
</style>