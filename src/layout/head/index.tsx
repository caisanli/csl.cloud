import React from 'react';
import styles from './index.module.less';

interface navItem {
    name: string;
    value: string;
}

const navList: Array<navItem> = [{
    name: '个人',
    value: 'person'
}, {
    name: '团队',
    value: 'group'
}]

export default function Head():JSX.Element {
    return (
        <div className={ styles.head }>
            <div className={ styles.headLeft }>
                <div>
                    LOGO6
                </div>
                <div className={ styles.headNavs }>
                    {
                        navList.map(item => <div className={ styles.headNav } key={item.value}>{ item.name }</div>)
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}