import React, { SFC } from 'react'
import { Form, Modal, Input, Button, Select, DatePicker, message } from 'antd'
import axios from 'axios'

interface IProps {
    updateList(): void,
    onCancel(): void,
    visible: boolean,
    title: string
}

interface modelData {
    name: string,
    content: string,
    type: number,
    status: number,
    planEndTime: number
}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
}

const ModelForm: SFC<IProps> = ({ updateList, onCancel, visible, title }) => {

    const [form] = Form.useForm()

    const onFinish = (values: modelData): void => {
        axios.post('/api/tasks', { ...values, planEndTime: values.planEndTime.valueOf() }).then(body => {
            if (body.status === 200) {
                if (body.data && body.data.code === 200) {
                    message.success('新增成功')
                    onCancel()
                    updateList()
                }
            }
        })
    }

    const onReset = () => {
        form.resetFields()
    }

    return (
        <Modal
            title={title}
            onCancel={onCancel}
            visible={visible}
            maskClosable={false}
            destroyOnClose={true}
            width={640}
            footer={null}
        >
            <Form
                {...layout}
                form={form}
                name='task-form'
                onFinish={onFinish}
            >
                <Form.Item name='name' label='任务名称' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='content' label='任务内容' rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='type' label='任务类型' rules={[{ required: true }]}>
                    <Select>
                        <Select.Option value={0}>测试任务</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name='status' label='任务状态' rules={[{ required: true }]}>
                    <Select>
                        <Select.Option value={0}>未招领</Select.Option>
                        <Select.Option value={1}>处理中</Select.Option>
                        <Select.Option value={2}>处理完毕</Select.Option>
                        <Select.Option value={3}>已删除</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name='planEndTime' label='计划结束时间' rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                    <Button htmlType="button" onClick={onReset} style={{ marginLeft: 10 }}>
                        重置
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModelForm
