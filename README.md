## 0- 项目名称
基于Nodejs+vue实现极客信息发布系统
## 1-项目导学页
### 1.1 - 项目介绍
极客学院的信息发布系统，通过后台配置的内容在前台中进行展示，支撑企业的信息发布和信息管理，运营人员会定期发布极客学院的新的动态及技术内容帮助大家及时的掌握前沿技术动态，更好的学习规划。为此需要一套信息管理发布系统来方便对他的内容进行发布、修改、删帖和分类等。
### 1.2 - 教学目标
本项目为 Node.js 构建 Web API，并使用 Vue 配合 Element-ui 构建管理后台。主要考察对 Vue 在后台项目中的应用能力，分成以下五个部分：
一、Node.js API
二、Vue
三、Vue-router 
四、Element-ui
### 1.3 - 前置技能
* 
### 1.4 - 学习周期
| 总时长   | 任务 1   | 任务 2   | 任务 3   | 任务 4   | 任务 5   | 任务 6   | 任务 7   | 任务 8   | 任务 9   | 
|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
| 19h   | 2h   | 2h   | 3h   | 2h   | 2h   | 2h   | 2h   | 2h   | 2h   | 

### 1.5 - 配套资料
* 设计稿
* 产品流程图

![图片](https://uploader.shimo.im/f/valhfAWED9AW9oje.png!thumbnail)
![图片](https://uploader.shimo.im/f/XEL20xyE0oADzelo.png!thumbnail)

### 1.6 - 效果示例图

![图片](https://uploader.shimo.im/f/RQk3mIAd810Qvh6T.png!thumbnail)
![图片](https://uploader.shimo.im/f/4b4PRJ3rKe8B0Z5a.png!thumbnail)
![图片](https://uploader.shimo.im/f/VGUGQMu42TUtSWt9.png!thumbnail)

![图片](https://uploader.shimo.im/f/LpyH9SeeZyw7ou5K.png!thumbnail)


![图片](https://uploader.shimo.im/f/nd2DqJwG9volGRHW.png!thumbnail)

![图片](https://uploader.shimo.im/f/TPQ5r6ZtXgoKzZNp.png!thumbnail)

## 2-项目剖析页
### 2.1 - 项目解读
使用 Node.js 的 Express 及 Vue 完成用户、文章内容信息的管理。管理人员登录后台，可对文章分类及其中的内容进行管理。项目主要包含以下几个模块：
 
1. 前台
  1. 首页
  2. 展示详情页
2. 后台
  1. 后台登录
  2. 用户管理
    1. 用户增删改查
  3. 文章分类管理
    1. 文章分类增删改查
  4. 文章内容管理
    1. 文章列表
    2. 文章编辑
    3. 文章添加
### 2.3 - 技能要求 
* 掌握 HTML
* 掌握 CSS
* 掌握 Less
* 掌握 JavaScript
* 掌握 Axios
* 掌握 Nodejs
* 掌握 MySQL
* 了解 Vue
* 了解 Vue-router
* 了解 Element-ui


### 2.4 - 项目拆解
本项目主要分为  9 个任务：

任务一： 环境搭建
主要通过 express-generator 快速搭建 Web 服务框架，在项目目录下创建admin文件夹并使用 Vue-Cli 快速搭建前端框架。

任务二：Vue 路由模版配置
主要通过 vue-router 配置生成后台各个页面及访问路径。

任务三：页面样式
主要通过 Element-ui 完成后台页面的结构与样式。

任务四：Node.js API 
主要通过 knex.js 连接 MySQL，梳理需求完成所有的 API 接口。

任务五：用户和分类
主要通过API 获取、发送的用户数据实现用户、分类的增删改查。

任务六：登录与退出
主要通过 JWT 实现用户登录状态的管理。

任务七：文章管理
主要通过API 获取、发送的文章数据实现文章的增删改查。

任务八：前台页面配置
主要通过 nunjucks 生成首页和详情页的模版并进行数据填充。

任务九：后台页面配置
通过 Vue-CLI 的打包配置，定义打包文件打包位置，并在路由中定义渲染此模版。

任务十：项目优化
主要通过自己的想法，对项目进行调整和修改。

## 3-任务详情页
### 3.1 -环境搭建
本次任务中我们需要用到 express-generator 和 Vue-Cli 快速搭建前后端两套框架。
首先我们需要利用nodejs的express-generator脚手架生成一套web服务器端的框架，
再在利用Vue-Cli 在web服务器的项目框架里面(admin目录下)生成 vue 前端框架，把前后端的生成的两套代码融合到一个项目中。(其实就是把Vue生成在express的admin目录下)
同时我们还需要跟进项目流程图，及设计稿，理解需求，构思数据库结构，并生成 sql 文件。
在根目录下 创建 db 文件夹，并将生产的sql文件放在文件夹中。

任务要求：
1. 使用 Node.js 中 Express 框架快速搭建Web 框架，可以在浏览器中展示欢迎页面。
2. 使用 Vue-CLI 3 在 Express 生成的项目中生成 admin 子项目，可以在浏览器展示页面。
3. 构建项目数据库结构，并使用第三方工具导出到 db 目录中。（可提供msql数据库文件）
4. Vue-CLI 3 的配置文件中，需要添加代理到 Node.js 服务的地址来防止跨域。

任务提示：
1. 先使用 express-generator 生成服务项目，再在其中使用 Vue-CLI 生成前端后台项目。
2. 思考项目中的主要组成部分及其关联的字段属性，例如：用户、分类、文章。
3. 在 Vue-CLI 构建的 admin 目录下新建 vue.config.js 文件并配置
    1.  devServer 配置。
    2. outputDir 配置
    3. indexPath 配置
    4. publicPath 配置

参考文献：Vue-CLI:[https://cli.vuejs.org/zh/](https://cli.vuejs.org/zh/)
### 3.2 - Vue 路由模版配置

在以往的网站开发过程中，路由是由服务器端负责定义的，网站的页面多少直接关系到用户端需要向服务器发送的请求次数，网站页面需要跳转刷新的频率。严重影响了用户体验。随着大家对用户体验的重视度越来越高，SPA 单页面应用就应运而生了。单页面应用技术让前端通过history API  定义URL地址以显示不同的组件（注意非页面），减少了全局的刷新频率。
Vue-router 是 Vue.js 官方的路由管理器和 Vue.js 的核心深度集成。
在本次任务中，我们深入了解并使用 Vue-router 集成到我们的项目之中，使用它来完成页面路由的配置以及页面组件的定义。

任务要求：
1. 安装 Vue-router 并配置。
2. 配置登录、用户管理、分类管理、文章管理、新建文章、编辑文章的页面和组件。

任务提示：
1. 在 admin 目录中 yarn add vue-router 或者   npm install vue-router(yarn比npm更快一些)
2. 在 admin 目录中 新建 pages 文件夹用于存放页面组件
3. 在 admin/pages 创建 Login.vue 、User.vue、Classify.vue、Aritcle.vue 、ArticleCreate.vue、ArticleEdit.vue 六个页面组件并赋予默认的模版节点信息便于区分。
1. 在 admin/src 目录中创建 router 文件夹用于存放路由相关文件。
2. 在 admin/src/router 中创建 routes.js 文件用于定义路由地址,并为路由文件地址统一添加 /admin 为前缀。
3. 在 admin/src/router中创建 index.js 文件用于初始化路由及配置路由钩子，使用 nprogress 效果更佳。
4. 在 admin/main.js 中引用路由
5. 在 admin/App.vue 中定义路由渲染地址
6. 浏览器打开测试一下地址是否成功渲染出对应组件的内容

### 3.3 - 页面样式
Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库，我们可以使用它来快速组合我们的网站。它有一整套的交互和样式形成的组件，我们基于这些组件堆砌成我们想要的页面即可。

在本次任务中，我们使用 Element 组件来快速构建后台各个页面结构和样式。

任务要求：
利用Element组件配置如下页面
1. 在项目中使用 Less
2. 配置登录页，包含用户手机、密码登录表单。
3. 配置用户管理页，包含用户列表，使用 Dialog 蒙版来进行用户的添加和修改。
4. 配置分类管理页，包含分类类别，使用 Dialog 蒙版来进行分类的添加和修改。
5. 配置文章管理页，包含文章的分类、时间，及其状态。
6. 配置新建文章页，包含文章内容的表单。
7. 配置修改文章页，包含文章内容的表单。

任务提示：
1. 下载安装 Less 、Less-loader   (npm install less less-loader --save-dev )
2. 查看 Element 官网 Vue-CLI 3 的插件使用，也可以独立配置，可全部引用。
3. 关注 Layout 、Menu、Button、Table、From、Input、Select、Dropdown、message、Breadcrumb、Loading、Tag、MessageBox、Dialog 等组件。
4. 在没有接口数据时候可以在 data 中传入默认数据。

参考文献：
  1. 快速上手使用 Vue-cli@3：[https://github.com/ElementUI/vue-cli-plugin-element](https://github.com/ElementUI/vue-cli-plugin-element)

### 3.4 - Node.js API 
我们已经把管理后台的页面以及结构都完成了，但是数据都是写在页面之中。传统的项目中，页面的数据是通过服务端渲染到模版引擎中显示，在前后端分离之后需要通过 API 来进行通讯，同时页通过 API 来修改、操作数据。和之前的AJAX的 API 类似，会多了一个获取信息的 API 。在本次任务中，我们需要梳理出页面所涉及到的 API ，然后在 Node.js 中使用 MVC 的模式来来完成其方法逻辑，并配置好其 API 路由。

任务要求：
1. 完成登陆页的所有 API
2. 完成用户管理模块的所有 API
3. 完成分类管理模块所有 API
4. 完成文章管理模块的所有 API
5. 使用 MVC 模式来构建 API 代码（ 重要）

任务提示：
在/touters文件夹下新建api.js实现如下接口：
1. 登录页 API
  1. POST /api/login 登录返回 token
2. 用户管理 API
  1. GET /api/user  获取所有用户
  2. POST /api/user 新建用户
  3. PUT /api/user/:id 修改用户
  4. DELETE /api/user/:id 删除用户
3. 分类管理 API
  1. GET /api/classify 获取所有分类
  2. POST /api/classify 新建分类
  3. PUT /api/classify/:id 修改分类
  4. DELETE /api/classify/:id 删除分类
4. 文章管理 API
  1. GET /api/article 获取所有文章
  2. GET /api/article?classify_id=1 获取 ID 为 1 的分类下的文章
  3. GET /api/article/:id 获取改 ID文章
  4. POST /api/aritcle 添加文章
  5. PUT /api/aritcle/:id 修改文章
  6. DELETE /api/aritcle/:id 删除文章
5. 使用 POSTMAN 测试接口确保可用

（记得在app.js中调用）
### 3.5 - 用户与分类
MVVM 是Model-View-ViewModel 的缩写，它是一种基于前端开发的架构模式，其核心是提供对View 和 ViewModel 的双向数据绑定，这使得ViewModel 的状态改变可以自动传递给 View，即所谓的数据双向绑定。

Vue.js 是一个提供了 MVVM 风格的双向数据绑定的 Javascript 库，专注于View 层。它的核心是 MVVM 中的 VM，也就是 ViewModel。 ViewModel负责连接 View 和 Model，保证视图和数据的一致性，这种轻量级的架构让前端开发更加高效、便捷。  

我们知道 Vue.js 帮我们完成了 VM 的模块，Element-Ui 为 View 层的实现，那么 M 层呢？在本次任务中我们就要实现它。在本次任务中我们需要在 Vue 项目的根目录中创建一个 models 文件夹，里面创建一个 request.js ，用于做 axios 请求的转换器，如果当我们因为项目的关系需要使用其他请求库的时候，可以直接在 request.js 中替换，这样就不会影响到各处的逻辑。然后在 models 中创建 user.js ，user.js 引用 request.js 的请求方法通过接口API操作数据，然后返回一个 Promise，这样在不同的页面中，都可以引用这个 userModel 来获取到同样的数据，不需要在多个页面重复编写。

本任务为创建 M 模块，并完成用户管理、分类的交互逻辑。

用户管理页面在页面组件创建时 （ created 生命周期 ）通过 API 调取所有用户的数据展示在表格之中。点击添加按钮，弹出创建用户的表单模版组件，输入用户名和密码点击确定，通过创建用户的 API 创建一个新用户，并在用户列表中添加多一个用户项。点击编辑，同样弹出一个表单模版，导入对应用户的数据，点击确认调取编辑用户的接口编辑用户信息。同样的逻辑，完成分类的管理的数据交互逻辑。

任务要求：
1. 使用公共的 models 封装 M 层。
2. 完成用户管理增删改查。
3. 完成分类管理增删改查。

任务提示：
1. 下载安装 axios 请求库。
2. 新建 models/request.js 封装 axios 的方法。
3. 新建 models/api.js 封装各类 API。
4. 新建 models/user.js 、models/classify.js  封装用户请求逻辑。
5. 在用户组件中调用 models/users.js 的方法，完成用户管理的页面逻辑。
6. 在分类组件中调用 models/classify.js 的方法，完成分类管理的页面逻辑。

### 3.6 - 登录与退出
本次任务，我们需要完成用户登录与退出功能。在登录页面中发送手机和密码到 Nodejs API USERCONTROLLER 对用户的手机密码进行判定，如果匹配成功返回 token 。客户端获取到 token 保存在本地 localStorage 中，如果用户已经登录，带有这个 token ，在每次请求的请求头中带上这个信息，服务端即可通过这个 token 来分辨出是哪一个用户。

在 Vue-router 中，提供的导航守卫主要用来通过跳转或取消的方式守卫导航。当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。

任务要求：
1. 完成用户登录与退出功能，在登陆页输入手机、密码完成登录后跳转到文章管理页面。
2. 未登录用户访问管理类页面需要被重定向到登录页面。
3. 已经登录的用户在登录页面需要被重定向到文章管理页面。

任务提示：
1. 在登录页面中调用 models/users.js 的登录方法登录，登录成功把 token 保存到本地，然后使用 vue-router 跳转到文章管理页面。
2. 在退出时候调用 models/users.js 的退出登录方法清除本地 token。
3. 在路由守卫中对 token 进行判断，如果是非登录页面且没有 token ，重定向到登录页面。如果在登录页面，拥有 token ，重定向到文章管理页面。

### 3.7 - 文章管理
本次任务需要完成文章管理相关模块，文章管理主要有新建文章、文章列表页和文章编辑页。在文章列表也中，通过新建按钮可以跳转到新建文章页，在新建文章页的通过分类 model 获取分类数据，展示在分类选择控件上。新建 articleModel 文件，当点击新建时，调取其方法进行文章添加。在展示页面中，同样通过 articleModel 来获取文章数据展示在表格信息列表上。当点击编辑，在编辑页通过文章 id 获取文章信息，默认展示在数据控件之中。

任务要求：
1. 完成文章添加
2. 完成文章列表
3. 完成文章修改

任务提示：
1. 新建 models/article.js 来处理文章请求数据相关逻辑。
2. 在文章修改中，通过路由获取文章 id 然后请求当前数据。
3. 如果要做富文本编辑，可以使用 vue-quill-editor 组件来完成。

### 3.8 - 前台页面配置
目前我们已经完成了后台的所有数据和业务逻辑的交互，可以添加用户及对分类和文章作管理。接下来在本次任务中，我们需要把数据库的信息在前台展示出来，回想在上一个 CRM 项目中的页面模版渲染形式，同样我们需要配置 nunjucks 模版引擎，然后从数据库中获取相关的信息进行页面的渲染。

前台的页面配置主要包含首页、文章分类和文章详情页，三个部分。首页的导航包含所有分类的信息分类，默认显示全部文章信息，点击导航切换到文章分类显示当前导航中的文章信息。在首页或者分类详情页点击文章跳转到文章详情页，文章详情页更具路径中当前文章的 ID 显示当前文章的相关内容。

任务要求：
1. 完成首页样式与内容
2. 文章详情页样式与内容

任务提示：
1. 配置首页、文章分类、文章详情页模版
2. 在首页的 controller 中获取 所有分类以及所有文章的信息在模版中展示。
3. 在文章分类页的 controller 中获取当前分类，然后获取当前分类学的文章在模版中显示。
4. 在文章详情页的 controller 中获取当前文章 ID，然后根据 ID 获取当前文章详情信息在模版中展示。

### 3.9 - 后台页面配置
当前我们 Vue-CLI 构建的前端项目在一个独立的 Serve 里面，我们需要 Build 打包到某个地方然后通过服务渲染出来。第一种是打包到一个独立的静态文件夹中，通过 Nginx 配置域名走改目录资源。第二种是通过修改配置，打包为 Node.js 中的某个模版文件中，指定静态资源的引用位置，通过 Node.js 的路由来展示。

任务要求：
1. Vue-CLI 3 的配置文件中，指定静态资源的打包地址到 Node.js 的 Public 目录中
2. Vue-CLI 3 的配置文件中，指定 HTML 的编译地址在 Node.js 的 views 目录中的 admin.tpl
3. Vue-CLI 3 的配置文件中，指定部署应用包的基本 URL
4. Express 配置路由 /admin/* 渲染该模版的 History 模式。
5. 设置 package.json 在执行 build 编译之前把之前的静态资源清空。

任务提示：
1. 参考文档 [https://cli.vuejs.org/zh/config/](https://cli.vuejs.org/zh/config/)
2. outputDir 静态资源打包到 public目录下的 admin 目录中
3. indexPath HTML 打包到 views 目录下的 admin.tpl 模版中
4. package.json 在build 的时候先删除 public/admin 中上一次编译的文件再进行 build
5. express 路由配置可以使用 admin/* 的来源地址都匹配到 admin.tpl 模版。
6. build 之后测试一下后台在 Express 模版内是否正常允许。（注意检查跳转地址）

vue.config.js
```
 module.exports = {
    // 开发环境下的代理地址
    devServer: {
        proxy: 'http://localhost:3000'
    },
    // 静态资源打包地址
    outputDir: '../public/admin',
    // HTML 打包地址
    indexPath: process.env.NODE_ENV === 'production'
        ? '../../views/admin.tpl'
        : 'admin.tpl',


    // 部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production'
        ? '/admin/'
        : '/',
}
```

admin/package.json
```
{
  "name": "admin",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "rm -rf ../public/admin/{js,css,img} && vue-cli-service build --no-clean",
    ...,
  },
  ...,
 }
```

### 3.10 - 项目优化
此时此刻，我们已经按需求完成了内容。但很多情况下的需求不明确，或者考虑不够周期相关的问题，我们还需要对项目进行一次修改。在本次任务中，你可以更具你的想法，对这个项目不满意的功能进行修改，可以是样式、可以是逻辑，随意发挥。

任务要求：
1. 添加文章展示倒叙
2. 文章管理页面添加分类筛选

任务提示：
1. 添加服务端分页，每页默认展示 20 天数据加满分。

## 4-总结页
通过本项目，你对 Node.js API 有更深入的了解，接下来可以完成 80% 的内容 API 设计。同时对 Vue 、Vue-router 及 Element-Ui 有实战行的应用。在技术点上还涉及到 Vue-CLI 和其他后端框架的融合，与 PHP 后端配合如 Laravel 框架也是同样的思想进行融合。在之后的研发中，能够无障碍的完成同类型的信息内容管理需求，以及自我的博客建设。


