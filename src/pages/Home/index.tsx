import React, { FC, useEffect, useState } from 'react'
import { connect } from 'umi'
import { Card, Button } from 'antd'
import axios from 'axios'
import Issue from './Issue'
import ModelForm from './ModelForm'
import { PlusOutlined } from '@ant-design/icons'

import styles from './index.less'

const Home: FC = ({ }) => {

  const [tasks, setTasks] = useState([])
  const [modelVisible, setModelVisible] = useState(false)
  const [modelTitle, setModelTitle] = useState('新增任务')

  useEffect(() => {
    updateList()
  }, [])

  const updateList = () => {
    axios.get('/api/tasks').then(body => {
      if (body.status === 200) {
        if (body.data && body.data.code === 200) {
          setTasks(body.data.body)
        }
      }
    })
  }

  const onAdd = () => {
    setModelVisible(true)
  }

  const onCancel = () => {
    setModelVisible(false)
  }

  return (
    <div className={styles.container}>
      <Card
        className={styles.card}
        title='事务招领处'
        extra={<Button type='primary' onClick={onAdd}><PlusOutlined />新增</Button>}
      >
        {
          tasks.map(item => (
            <Issue data={item} />
          ))
        }
      </Card>
      <ModelForm onCancel={onCancel} visible={modelVisible} title={modelTitle} updateList={updateList} />
    </div>
  );
}

export default connect(({ Home }: any) => ({ Home }))(Home)
