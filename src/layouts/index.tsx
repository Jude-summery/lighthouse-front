import React, { ReactNode } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { ClickParam } from 'antd/lib/menu'
const { Header, Content, Footer } = Layout
import { menu } from './menu.json'
import './index.less'

interface Props {
    children: ReactNode
}

const BasicLayout = (props: Props) => {
    const onMenuClick = ({ item, key, keyPath, domEvent }: ClickParam): void => {
        console.log(item, key, keyPath, domEvent)
    }
    return (
        <Layout style={{height: '100vh'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className='logo' />
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} onClick={onMenuClick}>
                    {menu.map((item) => <Menu.Item key={item.location}>{item.name}</Menu.Item>)}
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default BasicLayout
