import React from 'react';
import {withRouter} from 'react-router-dom';


let list = [1,3,34,12,123,122,55,34];
// 循环方式一
let arr = [];
for (let index = 0; index < list.length; index++) {
  arr.push(<li key={index} className='red'>{list[index]}</li>)
}
class Page extends React.Component {
    render() {
        return (
            <div>
                <a>当前是Page页</a>
                <ul>{arr}</ul>
               
                {/* 循环方式二 */}
                <ul>
                    {list.map((val,index)=>{
                        return <li key={index}>{val}</li> 
                    })}
                </ul>               
            </div>
        )
    }
}
export default withRouter(Page);