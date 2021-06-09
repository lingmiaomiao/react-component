// 路由获取
import Home from '../components/home-vas/home'   //import引入变量方式一
let asRoute =[
    {
        path:'/',
        name:'首页',
        exact:true,   //精准匹配
        component:Home,      
        hidden:false, 
    },
    {
        path:'/about',
        name:'关于',
        exact:true,
        component:require('../components/about').default,   //import引入变量方式二
        hidden:false, 
    },
    {
        path:'/pages',
        name:'页面',
        exact:true,
        component:require('../components/pages/index').default,
        hidden:false, 
        children:[{
            path:'/pages/page',
            name:'页面1',
            exact:true,
            component:require('../components/pages/page').default,
            hidden:false, 
                
        },{
            path:'/pages/page2',
            name:'页面2',
            exact:true,
            component:require('../components/pages/page2').default,
            hidden:false, 
                
        }]
    },
]


  export default asRoute;