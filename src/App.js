import './App.css';
import React from 'react';
import {
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import asRoute from './router/route';   //路由
import { Layout, Menu, Breadcrumb,Image, } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends React.Component {
  //构造函数，创建组件的时候代用一次
  constructor(props,context){   
    super(props);
    this.state = {
      navNumber: '0',   //top面包屑定位
      subLetfNumber: '0',   //侧边栏折叠框定位
      breadcrumbArr:[],   //面包屑数组
    }
  };
  // 在render之前调用
  // Tip1: 不建议在此请求数据，由于请求数据接口一般都是异步，这时候render已经被执行，建议在componentDidMount 数据
  // Tip2: 如果在服务端渲染，该钩子函数将被调用两次，一次服务端，一次浏览器端，而componentDidMount函数只会在浏览器端请求一次
  // Tip3: 在taro构建的小程序里对应的生命周期是 onLoad。
  componentWillMount(){    
    this.writeBreadcrumb(this.props)   //调用写的面包屑方法;  侧边栏只合适render前全部加载   
  };
  // 所有的组件(包括子组件),子啊render执行完以后立即调用，并且只会被调用一次
  // 建议在此请求数据
  componentDidMount() {
  };
  // 在props被改变时被触发，初始化render时不调用,但是在之后的每次render中被调用=当父组件再次传送props
  // 旧的属性还是可以通过this.props来获取，在这里通过调用this.setSate()来更新你的组件状态；
  // Tip1：某些情况下，props没变也会触发该钩子函数，需要在方法里手动判断一下this.props和nextProps是否相同，不同了才只想我的更新方法
  // Tip2：该函数一般用来更新依赖props的状态
  componentWillReceiveProps(nextProps) {
    // nextProps[属性] !== this.props[属性]
    this.writeBreadcrumb(this.props);

  }
  // 发生冲重渲染时，在render()函数调用前被调用的函数，当函数返回false时候，阻止解析哪里render()函数的调用，阻止组件重渲染，而返回true时，组件照常重渲染
  // 该方法并不会再初始化渲染或当使用forceUpdate()时被调用
  // shouldComponentUpdate(nextProps,nextState){
  // };


  //shouldComponentUpdate返回true或者forceUpdate之后，conponentWillUpdate会被调用 
  componentWillUpdate(){
  };

  //该函数在最新渲染输出提交给DOM前讲会立即调用，它会让你的组件能在当前的值可能要改变钱获取他们，这一生命周期返回的任何值将会作为参数被传递给componentDidUpdate();
  // getSnapshotBeforeUpdate(prevProps,prevState){
  // };
  
  //除了首次render之后调用componentDidMout,其他render结束之后都是调用componentDidUpdate; 
  componentDidUpdate() {
  };
  //在组件被卸载和销毁之前立刻嗲用，可以在该方法里处理任何必要的清理工作，例如解绑定时器，取消网络请求，清理任何在componentDIdMount环节创建的DOM元素
  componentWillUnmount(){
  };
  // 该函数称为错误边界，捕捉发生在子组件树中任意地方的JavaScript错误，打印错误日志，并且显示回退的用户界面。
  // Tip：错误边界只捕捉树中发生在它们之下组件里的错误，一个错误边界并不能捕捉它自己内部的错误。
  componentDidCatch(error,info){
  };
  // 面包屑导航
  writeBreadcrumb(props) {
    // this.props.history.location用来获取当前路由地址
    // this.props.location用来获取跳转前的路由地址
    let pathname = props.history.location.pathname;
    console.log(props, pathname, "pathname");
    let arr = [];
    for (let index = 0; index < asRoute.length; index++) {
      if(pathname === asRoute[index].path){
        this.setState({
            navNumber:`${index}`
        })
        arr.push(asRoute[index]);
      }else{
        if(asRoute[index].children){
          let ars = asRoute[index].children;
          for (let j = 0; j < ars.length; j++) {
           if(pathname === ars[j].path){
             this.setState({
              navNumber:`${index}-${j}`,
              subLetfNumber:`${index}`,
             })
             arr.push(asRoute[index],ars[j]);
           }
           
          }
        }
      }
    }
    this.setState({
      breadcrumbArr: [...arr],
    })
  };
  handleClick = e => {
    this.setState({
      navNumber: e.key,
    })
  };
  handleClick3 = e => {
    let str = e.key.split('-');
    this.setState({
      navNumber: e.key,
      subLetfNumber:str[0],
    })
  };
  render() {
    return (
      <div className='App'>
        <Layout className='bodySty'>
          <Header className="header" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
            <Image width={30} height={30} src={require('./utils/image/logo192.png').default}/>
            <b style={{color:'#ddd',fontSize:'20px',marginLeft:'20px'}}>create-react-app框架</b>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={[this.state.navNumber]}
                defaultOpenKeys={[`sub${this.state.subLetfNumber}`]}
                style={{ height: '100%', borderRight: 0 }}
                onClick={this.handleClick}
              >
                {asRoute.map((item, i) => {
                  if (item.children) {
                    return  <SubMenu key={`sub${i}`} icon={<UserOutlined />} title={item.name} onClick={this.handleClick3}>
                              {item.children.map((val, j) => {
                              return  <Menu.Item key={`${i}-${j}`}><NavLink to={val.path}>{val.name}</NavLink></Menu.Item>
                              })}
                            </SubMenu>
                  } else {
                    return <Menu.Item key={i}><NavLink to={item.path}>{item.name}</NavLink></Menu.Item>
                  }
                })}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px',textAlign:'left'}}>
              <Breadcrumb style={{ margin: '16px 0',}}>
                {this.state.breadcrumbArr.map((item,index)=>{
                  return  <Breadcrumb.Item key={index}><NavLink to={item.path}>{item.name}</NavLink></Breadcrumb.Item>
                })}
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {/* 遍历路由 */}
                <Switch>
                  {asRoute.map((item, i) => {
                    if(item.children){
                      return <Route path={item.path} component={item.component} key={item.path}>
                                {item.children.map(val=>{
                                  return <Route exact={val.exact} path={val.path} component={val.component} key={val.path} />
                                })}
                             </Route>
                    }else{
                      return <Route exact={item.exact} path={item.path} component={item.component} key={item.path} />
                    }
                  })}
                  <Redirect to='/' />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default withRouter(App);
