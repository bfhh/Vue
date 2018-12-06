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


### ajax请求

页面由多个组件构成，每个组件都需要从后端获取数据，但是不可能每个组件都像后端发送ajax请求，一个页面太多的ajax请求明显性能很低，
所以在主组件中Home.vue中发送ajax请求，主组件获取数据后可以将组件的内容传递给其他的组件
               
利用axios发送ajax请求，ajax是跨平台的，且在浏览器中可以发送xhr请求，在node服务器中可以发送http请求
- 安装axios插件
  ```html
   npm install axios --save   
  ```
    
利用前端模拟后端服务器的返回的数据，在static下面新建目录mock,将模拟的数据放在index.json里面,
为什么需要把模拟的数据放在放在static下，因为访问项目其他文件下的目录都会跳转到主页面，只有static下面的静态资源可以被访问到
        
    
当数据准备好了以后，模拟测试的数据通过后，到上线的时候又需要改变ajax请求的地址，当项目完成后修改请求的地址是有风险的，为了避免
这种风险，webpack-dev-server 为我们提供了路由转发的功能，可以将到服务器上的请求映射到本地的localhost，，所哟我们直接写成到服务器的请求
- 让webpack帮我们改变路由

  利用vue的生命周期函数mounted()，页面挂载以后请求数据,修改组件中的代码 
  ```
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

  ```                
  webpack-dev-server路由修改

  修改`config`下面的`index.js`下的dev配置下的的`proxyTable`，添加如下的key value，意思就是当请求到有 `/api` 的路径时，将请求映射到本地的
  `localhost:8080`端口,并将 `'/api'` 改成 `'/static/mock'`        
  ```
   proxyTable: {
     '/api': {
        'target': 'http://localhost:8080',
           pathRewrite: {
             '^/api': '/static/mock'
           }
        }
   },
  ```
### 将home组件获取的内容传递给其他组件

- 在home组件中判断数据是否获取成功，修改getHomeInfoSucc函数

  ```js    
  getHomeInfoSucc (res) {
    res = res.data
    console.log(res)
    if (res.ret && res.data) {
      const data = res.data
      this.city = data.city
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendList = data.recommendList
      this.weekendList = data.weekendList
    }
  }
  ```
- 通过属性给其他组件传值，比如滚动图

  在home组件中定义一个数据
  ```
  data () {
    return {
      swiperList: [],
    }
  },  
  ``` 
  在homez组建中通过属性给其他组件传值
  
  ```html
  <home-swiper :list="swiperList"></home-swiper>
  ```     
  在swiper组件中接受获取到的值 这里是list,接受传过来的list数据，并指定list必须是一个数组
  ```
  props: {
    list: Array
  },
  ```
  >  这样list数据就直接可以在swiper这个组件中使用了  
