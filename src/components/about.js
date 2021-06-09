import React from 'react';
import {withRouter} from 'react-router-dom';

class About extends React.Component {
    state = {
        strlist:['1','23','3','22','3','222','56','5','9','10','3','5','4'],
        newList:[],
        list:[1,23,3,22,3,222,56,5,9,10,3,5,4],
        upList:[],
        downList:[],
    };
    // render之后挂载
    componentDidMount(){
        this.getList();
    };
    getList = ()=>{
        // 字符串数组排序;
        let newList = this.state.strlist.sort(this.sortNumber);
        // number数组排序
        let upList = this.state.list.sort(this.sortFun(false));
        let downList = this.state.list.sort(this.sortFun());
        this.setState({
            newList:[...newList],
            upList:[...upList],
            downList:[...downList],
        })
    };
    sortFun = (rev)=>{
        //参数没有传递 默认升序排列,传false为降序排序
        if(rev ==  undefined){
            rev = 1;
        }else{
            rev = (rev) ? 1 : -1;
        }
        return function(a,b){
            a = a;
            b = b;
            if(a < b){
                return rev * -1;
            }
            if(a > b){
                return rev * 1;
            }
            return 0;
        }
    };
    sortNumber(a,b){
        return a-b;
    };
    render() {
        return (
            <div >
                <a>当前页面是about</a>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'flex-start'}}>
                    <div>
                        <h3>string数组</h3>
                        {this.state.list.map((it,i)=>{
                            return <b key={i}>{it},</b>
                        })}
                        <h3>新数组：</h3>
                        {this.state.newList.map((it,i)=>{
                            return <b key={i}>{it},</b>
                        })}
                    </div>
                    <div>
                        <h3>number数组</h3>
                        {this.state.list.map((it,i)=>{
                            return <b key={i}>{it},</b>
                        })}
                        <h3>升序数组：</h3>
                        {this.state.upList.map((it,i)=>{
                            return <b key={i}>{it},</b>
                        })}
                        <h3>降序数组：</h3>
                        {this.state.downList.map((it,i)=>{
                            return <b key={i}>{it},</b>
                        })}
                    </div>
                </div>
               
            </div>
        )
    };
}

export default withRouter(About)