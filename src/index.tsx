import 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import App from './views/app/index';
import '@asset/css/global.less'

ReactDom.render(
    <App />,
    document.getElementById('root')
)