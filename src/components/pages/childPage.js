import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button, Row,} from 'antd';

class ChildPage extends React.Component{
    state={
        childText:'this is child text'
    };
    clickFun =()=>{
        this.props.pfn(this.state.childText) //这个地方把值传递给props事件当中
    };
    render(){
        let flexCenter = {
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        };
        let flexColumn = {
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }
        return(
            <div>
               { this.props.type==1 ?
                    <div style={flexCenter}>
                        <h3>子组件接收父组件传值</h3>
                        <ul>
                            { this.props.list.map((item,i)=>{
                                return <li key={i}>{item.name}</li>
                            }) }
                        </ul>
                    </div>
                  : <div style={flexColumn}>
                      <h3>子组件传值到父组件</h3>
                      <span>这边强调this</span>
                      <Button type='primary' onClick={this.clickFun.bind(this)}>click me</Button>
                    </div>
                           
                }
                



            </div>
        )
    }

}
export default withRouter(ChildPage);