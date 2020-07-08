import React, { FC } from 'react'
import { Card } from 'antd'

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

const Issue: FC<IssueProps> = ({data}) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />}
    >
      <Meta
        avatar={<img style={{ width: 30 }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={data.taskName}
        description={data.taskContent}
      />
    </Card>
  )
}

export default Issue
