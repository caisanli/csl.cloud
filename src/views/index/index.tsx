import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './index.module.less'

console.log(styles)


function Index() {
    const map = new Map();
    map.set('name', 'CaiSan');
    console.log('name：' + map.get('name'));
    (():void=>console.log(1));
    return <div>Index 2</div>
}

export default hot(Index);