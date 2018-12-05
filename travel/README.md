# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### ajax q请求
    页面由多个组件构成，每个组件都需要从后端获取数据，但是不可能每个组件都像后端发送ajax请求，一个页面太多的ajax请求明显性能很低，
    所以在主组件中Home.vue中发送ajax请求，主组件获取数据后可以将组件的内容传递给其他的组件
    
    利用axios发送ajax请求，ajax是跨平台的，且在浏览器中可以发送xhr请求，在node服务器中可以发送http请求
       1.安装axios 
          npm install axios --save   
    
    
    利用前端模拟后端服务器的返回的数据，在static下面新建目录mock,将模拟的数据放在index.json里面
    为什么需要把模拟的数据放在放在static下，因为访问项目其他文件下的目录都会跳转到主页面，只有static下面的静态资源可以被访问到
        
    
    当数据准备好了以后，模拟测试的数据通过后，到上线的时候又需要改变ajax请求的地址，当项目完成后修改请求的地址是有风险的，为了避免
    这种风险，webpack-dev-server 为我们提供了路由转发的功能，可以将到服务器上的请求映射到本地的localhost，，所哟我们直接写成到服务器的请求
    让webpack帮我们改变路由
      1.利用vue的生命周期函数mounted()，页面挂载以后请求数据,修改组件中的代码            
        methods: {
            getHomeInfo () {
              axios.get('/static/mock/index.json')
                .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res) {
              console.log(res)
            }
        },
        mounted () {
          this.getHomeInfo()
        }
        
      2.webpack-dev-server路由修改
        修改config下面的index.js下的dev配置下的的proxyTable，添加如下的key value，意思就是当请求到有 /api 的路径时，将请求映射到本地的
        localhost:8080端口,并将 '/api' 改成 '/static/mock'
           proxyTable: {
             '/api': {
                'target': 'http://localhost:8080',
                   pathRewrite: {
                     '^/api': '/static/mock'
                   }
                }
           },
