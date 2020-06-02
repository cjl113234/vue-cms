// 在这个文件中必须显式声明 要处理的文件路径 和 输出的文件路径

const path = require('path')
// 导入 把HTML页面生成到内存中的插件
const htmlWebpackPlugin = require('html-webpack-plugin')// 导入的是一个构造函数
// 导入指定浏览器的插件
// const openBrowser = require('open-browser-webpack-plugin')

const webpack = require('webpack')
// 注意:这里使用Node中的语法，向外暴露了一个配置对象
// 因为webpack这个构建工具，底层就是使用Node.js开发出来的

// 导入VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        app:path.join(__dirname,'./src/main.js'),// 指定要处理的JS文件路径
        vendors:['vue','vuex','vue-router','axios','mint-ui'] // 这是第三方包的名称
    },//项目的入口文件
    output: { // 指定输出文件的配置
        path: path.join(__dirname,'./dist/'),// 指定输出文件的存放路径
        filename:'bundle.js'// 指定输出文件的名称
    },
    plugins:[ // 插件的数组
        new htmlWebpackPlugin({// 创建一个吧HTML首页托管到内存中的插件
            template:path.join(__dirname,'./src/index.html'),// 要把哪个HTML页面，作为模板，复制一份托管到内存
            filename:'index.html'// 指定，将来在内存中复制出来的页面，名称叫做index.html
        }),
        // new openBrowser({ // 打开指定浏览器
        //     browser:'edge',
        //     url:'http://127.0.0.1:3000'
        // })
        new webpack.HotModuleReplacementPlugin(),

        new VueLoaderPlugin() // 在vue-loader@15.x 版本，必须要配置VueLoaderPlugin()
    ],
    devServer:{ // webpack-dev-server运行时候的指令,这种配置方式和 --指令，只能二选一
        // --open --port 3000 --host 127.0.0.1 --hot
        open:true,// 自动打开浏览器
        port:3000,// 指定端口号
        host:'127.0.0.1',// 指定IP地址
        hot:true// 启用热更新，这里的hot指令，需要配合 一个 热更新的 webpack插件才能正常使用
    },
    module:{ // 用来配置非JS文件对应的loader的
        rules:[ // 就是这些非JS文件和loader之间的对应关系
            { test:/\.css$/,use:['style-loader','css-loader'] }, // 创建处理css文件的loader匹配规则
            { test:/\.less$/,use:['style-loader','css-loader','less-loader'] }, // 创建处理less文件的loader匹配规则
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] }, // 创建处理scss文件的loader匹配规则


            // { test:/\.jpg|png|gif|bmp$/,use:'url-loader' },
            // { test:/\.jpg|png|gif|bmp$/,use:['url-loader'] },
            // { test:/\.jpg|png|gif|bmp$/,use:['url-loader?limit=113591&name=[hash:8]-[name].[ext]'] }
            { test:/\.jpg|png|gif|bmp$/,use:['url-loader?limit=113591'] },// 创建处理jpg文件的loader匹配规则
            // 为了显示图片,需要在项目中配置合适的loader【url-loader和 file-loader】
            // 可以使用?给url-loader传递参数，其中，有一个固定的参数，叫做limit，表示图片的大小，需要给定一个数值
            // limit给定的这个数值，是图片的大小，单位是Byte(字节)
            // 如果指定了limit参数，则只有图片的大小小于给定的值的时候，才会转为base64格式的图片，否则就不转换

            { test:/\.js$/,use:['babel-loader'],exclude:/node_modules/ }, // 添加转换JS文件的loader，其中，必须把node_modules目录设置为排除项，这样，在打包的时候，会忽略node_modules目录下的所有文件，否则项目运行不起来

            { test:/\.vue$/,use:['vue-loader'] }, // 解析Vue组件的第三方loader

            { test:/\.ttf|woff|woff2|eot|svg$/,use:['url-loader'] }, // 处理 样式中字体文件路径的问题

        ]
    },
    // resolve:{
    //     alias:{ // 别名
    //         'vue$':'vue/dist/vue.js'
    //     }
    // }
}