import React from 'react';
import { Layout } from 'antd';

import CustomHead from './head'
import CustomAside from './aside';
import CustomMain from './main';

const { Header, Sider, Content } = Layout;

export default function Index():JSX.Element {
    return (
        <Layout>
            <Header>
                <CustomHead />
            </Header>
            <Layout>
                <Sider>
                    <CustomAside />
                </Sider>
                <Content>
                    <CustomMain />
                </Content>
            </Layout>
        </Layout>
    )
}