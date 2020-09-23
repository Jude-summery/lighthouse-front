import React, { FC, useState } from 'react'
import { Card, Modal, message } from 'antd'
import { ExpandOutlined, PushpinOutlined, CalendarOutlined } from '@ant-design/icons'
import moment from 'moment'
import axios from 'axios'

const { Meta } = Card

interface IssueProps {
  data: {
    id: number,
    taskName: string,
    taskContent: string,
    taskType: number,
    taskStatus: number,
    taskPlanEndTime: string,
    taskEndTime: string | null,
    creatorId: string | number,
    creatorName: string,
    createTime: string | null,
    executorId: string | null,
    executorName: string | null,
    executeTime: string | null,
    process: string | null,
    createdAt: string,
    updatedAt: string
  }
}

interface IssueDetailProps {
  record: {
    id: number,
    taskName: string,
    taskContent: string,
    taskType: number,
    taskStatus: number,
    taskPlanEndTime: string,
    taskEndTime: string | null,
    creatorId: string | number,
    creatorName: string,
    createTime: string | null,
    executorId: string | null,
    executorName: string | null,
    executeTime: string | null,
    process: string | null,
    createdAt: string,
    updatedAt: string
  },
  isVisible: boolean,
  handleCancel: (value: boolean) => void
}

const IssueDetail: FC<IssueDetailProps> = ({ record, isVisible, handleCancel }) => {
  return (
    <Modal
      title={record.taskName}
      visible={isVisible}
      width={800}
      footer={null}
      onCancel={() => handleCancel(false)}
    >
      <p><CalendarOutlined /> {moment(record.createdAt).format('YYYY-MM-DD')} —— <CalendarOutlined /> {moment(record.taskPlanEndTime).format('YYYY-MM-DD')} </p>
      <p>{record.taskContent}</p>
    </Modal>
  )
}

const Issue: FC<IssueProps> = ({ data }) => {

  const [isVisible, setIsVisible] = useState(false)

  const handleAccept = (data: IssueProps['data']) => {
    Modal.confirm({
      title: '接受任务',
      content: <><h1>{data.taskName}</h1><p>确定接受该任务吗？</p></>,
      onOk() {
        axios.put('/api/tasks/' + data.id).then(body => {
          if (body.status === 200) {
            if (body.data && body.data.code === 200) {
              message.success('任务接受成功')
              setIsVisible(false)
            }
          }
        })
      }
    })
  }

  return (
    <>
      <Card
        style={{ width: 300, margin: '0 auto', marginBottom: 24 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />}
        actions={[
          <ExpandOutlined key="expand" title="展开" onClick={() => setIsVisible(true)} />,
          <PushpinOutlined key="pushpin" title="接受" onClick={() => handleAccept} />
        ]}
      >
        <Meta
          title={data.taskName}
          description={data.taskContent}
        />
      </Card>
      <IssueDetail record={data} isVisible={isVisible} handleCancel={(value) => setIsVisible(value)} />
    </>

  )
}

export default Issue
