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

### 开发城市选择页面

和前面的主页面home.vue一样，用一个组件去显示页面，这个组件向外暴露一个name为city的组件，是路由可以找到的组件
一个页面的各个部分可以拆分由很多的组件组成的页面，city这个组件中引用其他的组件，这样页面的每个功能或者都可以单独在一个组件中开发

* 开发城市页面顶部
  
  * 在src/pages/ 创建一个city文件夹 切换到city文件夹下，创建City.vue,这个文件只是一个主页面访问，具体的功能在其他的组件中开发
  
  * 在src/pages/ 创建components文件夹
  
  * 开发城市页面的顶部
  ![](https://github.com/golanggo/jpg/blob/master/travel-header.jpg)
  创建Header.vue,  route-link， to  是vue定义的点击其标签内的内容跳转
    ```html
    <div class="header">
        城市选择
        <router-link to="/">
          <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
    ```
    城市顶部的样式  
    ```css
    .header
        position: relative
        overflow: hidden
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: .32rem
    ```
    
    返回标签 < 的样式
    ```css
    .header-back
          position: absolute
          top: 0
          left: 0
          width: .64rem
          text-align: center
          font-size: .4rem
          color: #fff
    ```

    给输入框定义的样式
    ![]()
    ```html
    <template>
      <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名字或拼音">
      </div>
    </template>
     ```
    ```css
    <style lang="stylus" scoped>
      @import '~styles/varibles.styl'
      .search
        height: .72rem
        background: $bgColor
        padding: 0 .1rem
        .search-input
          box-sizing: border-box
          height: 0.62rem
          width: 100%
          line-height: 0.62rem
          text-align: center
          border-radius: .06rem
          padding: 0 .2rem
          color: #666
     </style>
    ```  
    
    给底部城市列表定义的样式
    
      * 页面划分为三个区域 当前城市 热门城市 城市列表，
      * 每个城市顶部都包含一个title border-topbottom是引入的1px border包含的class,目的是加入1px的标签
      * button-list是定义一个大的边框控制整体的宽度
      * button-wrapper是控制大边框内部每个按钮的位置，button是控制单个按钮样式
      * 热门城市和当前城市的样式一样
      * 城市列表的样式一样，  
     
    ![]() 
    ```html
    <template>
        <div class="list">
          <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
            </div>
          </div>
          <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
              <div class="button-wrapper">
                <div class="button">北京</div>
              </div>
            </div>
          </div>
          <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
            </div>
          </div>
          <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
            </div>
          </div>
          <div class="area">
            <div class="title border-topbottom">A</div>
            <div class="item-list">
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
              <div class="item border-bottom">阿拉尔</div>
            </div>
          </div>
        </div>
    </template>
    ```
    css 样式
    ```css
    .list
        overflow: hidden
        position: absolute
        left: 0
        top: 1.58rem
        bottom: 0
        right: 0
        .title
            line-height: .44rem
            padding-left: .2rem
            color: #666
            font-size: .26rem
            background: #eee
          .button-list
            padding: .1rem .4rem .1rem .1rem
            overflow: hidden
            .button-wrapper
              float: left
              width: 33%
              .button
                margin: .1rem
                padding: .1rem
                border: .02rem solid #ccc
                text-align: center
                border-radius: .06rem
          .item-list
            .item
              line-height: .76rem
              padding-left: .2rem
    ```
  
   
