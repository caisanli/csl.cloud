import React from 'react';
import ReactDom from 'react-dom';
import App from './views/app/index';
import '@asset/css/global.less'
// import 'antd/dist/antd.min.css'
ReactDom.render(
    <App />,
    document.getElementById('root')
)