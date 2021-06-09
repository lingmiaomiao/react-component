import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//HashRouter,支持#识别
//单页BrowserRouter
import {BrowserRouter, HashRouter,} from 'react-router-dom';


ReactDOM.render(
  // 严格模式，肉容易报错
  // <React.StrictMode> 
    <BrowserRouter>     {/*  路由映射缓存 */}
      <App />
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
