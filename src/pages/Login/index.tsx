import React from 'react'
import { connect } from 'umi'
import { Form, Input, Button, Card } from 'antd'
import Curtain from './Curtain'

import styles from './index.less'
import './index.less'

interface IState {
  isCurtainShow: boolean
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 }
}

class Login extends React.Component<{}, IState> {

  state = {
    isCurtainShow: true
  }

  getCurtainStatus = () => {
    this.setState({
      isCurtainShow: false
    })
  }

  onFinish = () => {

  }

  render() {
    return (
      <div className={styles['login-page-background']}>
        <Curtain getStatus={this.getCurtainStatus} />
        {
          !this.state.isCurtainShow && (
            <div className={styles['login-form']}>
              <Card title={<p style={{color: '#999999'}}>登录</p>}>
                <Form
                  {...layout}
                  className='lh-login-form'
                  onFinish={this.onFinish}
                >
                  <Form.Item
                    label='账号'
                    name='username'
                    rules={[{ required: true, message: '请填写账号'}]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label='密码'
                    name='password'
                    rules={[{ required: true, message: '请输入密码'}]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    {...tailLayout}
                  >
                    <Button type='primary' htmlType='submit'>登录</Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          )
        }
      </div>
    )
  }
}

export default connect(({ Login }: any) => ({ Login }))(Login)
