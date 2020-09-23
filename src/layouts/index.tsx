import React, { ReactNode } from 'react'
import { Layout, Menu, ConfigProvider } from 'antd'
import { ClickParam } from 'antd/lib/menu'
const { Header, Content, Footer } = Layout
import { menu } from './menu.json'
import './index.less'

import zhCN from 'antd/es/locale/zh_CN';

interface Props {
    children: ReactNode
}

const BasicLayout = (props: Props) => {
    const onMenuClick = ({ item, key, keyPath, domEvent }: ClickParam): void => {
        console.log(item, key, keyPath, domEvent)
    }
    return (
        <ConfigProvider locale={zhCN}>
            <Layout style={{height: '100vh'}}>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#f6ffed' }}>
                    <div className='logo' />
                    <Menu mode='horizontal' defaultSelectedKeys={['2']} style={{ lineHeight: '64px', background: '#f6ffed' }} onClick={onMenuClick}>
                        {menu.map((item) => <Menu.Item key={item.location}>{item.name}</Menu.Item>)}
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', background: '#FFFFFF' }}>Lighthouse ©2020 Created by Space Cloud</Footer>
            </Layout>
        </ConfigProvider>
    )
}

export default BasicLayout
