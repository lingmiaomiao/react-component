import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Row,} from 'antd';

import ChildPage from '../pages/childPage';


class Page extends React.Component {
    state={
        list:[],
        parentText:'this is parent text',
    };
    btnCilck = ()=>{
        let arr = [...this.state.list];
        if(this.state.list.length<5){
            let obj = {
                name:"电解质"+this.state.list.length,
                id:this.state.list.length
            };
            arr.push(obj);
        };
        this.setState({
            list:[...arr]
        })
    }; 
    // 接收子组件传值
    fn(data){  
        console.log(data,"子父传值") 
        this.setState({
            parentText:data,   //把父组件中的parentText替换为子组件传递的值
        })
    };
    render() {
        const flexRow = {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
        }
        const borders = {
            border:'1px solid #ddd',
            margin:'10px',
            padding:'10px'
        }
        return (
            <div>
                <div style={borders}>
                    <h3>父组件向子组件传值</h3>
                    <div style={flexRow}>
                        <div>这是父组件</div>
                        <Button type='primary' onClick={()=>{this.btnCilck()}}>点击增加子组件</Button>
                    </div>
                    <hr/>
                    <ChildPage list={this.state.list} type="1"></ChildPage>
                </div>
                <div style={borders}>
                    <h3>子组件向父组件传值</h3>
                    <div style={flexRow}>
                        <div>父组件接收值{this.state.parentText}</div>
                        <ChildPage pfn={this.fn.bind(this)} type="2"></ChildPage>

                    </div>
                </div>
                
                



            </div>
        )
    }
}
export default withRouter(Page);