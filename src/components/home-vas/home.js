import React from 'react';
import '../home-vas/home.css';
import { Layout, Button,Image  } from 'antd';
import {withRouter} from 'react-router-dom';
class Home extends React.Component {
    // 数据池的两种写法：方法一
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         numberCount:null,
    //     }
    // };

    // 数据池的两种写法：方法二
    state = {
        numberCount:null,
        list:[{name:'我的',id:1},{name:'他的',id:2},{name:'其他',id:3}]
    };
    btnEvent = index => {
        this.setState({numberCount:this.state.numberCount+=2})
        console.log("打印出李艾",this.state.numberCount,index)
    };
    render() {
        return (
            <div>
                <a >这是首页</a><hr/>

                <a href="/about" >去about</a><br/>
                <a href="/page" >去page</a><br/>
                <Button type="primary" onClick={()=>this.btnEvent(1)}>点击按钮{this.state.numberCount}</Button>
                <Image src={require('../../utils/image/logo192.png').default}></Image>
            </div>
            
        )
    };
}

export default withRouter(Home)
