import React, { FC, useState } from 'react'
import { Card, Modal } from 'antd'
import { ExpandOutlined, PushpinOutlined } from '@ant-design/icons';

const { Meta } = Card

interface IssueProps {
  data: {
    id: number,
    taskName: string,
    taskContent: string,
    taskType: number,
    taskStatus: number,
    taskPlanEndTime: string,
    taskEndTime: string|null,
    creatorId: string|number,
    creatorName: string,
    createTime: string|null,
    executorId: string|null,
    executorName: string|null,
    executeTime: string|null,
    process: string|null,
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
    taskEndTime: string|null,
    creatorId: string|number,
    creatorName: string,
    createTime: string|null,
    executorId: string|null,
    executorName: string|null,
    executeTime: string|null,
    process: string|null,
    createdAt: string,
    updatedAt: string
  },
  isVisible: boolean,
  handleCancel: (value: boolean) => void
}

const IssueDetail: FC<IssueDetailProps> = ({record, isVisible, handleCancel}) => {
  return (
    <Modal
      title="任务详情"
      visible={isVisible}
      onCancel={() => handleCancel(false)}
    >

    </Modal>
  )
}

const Issue: FC<IssueProps> = ({data}) => {

  const [isVisible, setIsVisible] = useState(false)

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
        <PushpinOutlined key="pushpin" title="接受" />
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
