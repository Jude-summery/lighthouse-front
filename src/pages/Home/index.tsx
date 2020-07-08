import React, { FC, useEffect, useState } from 'react'
import { connect } from 'umi'
import { Card } from 'antd'
import axios from 'axios'
import Issue from './Issue'

import styles from './index.less'

const Home: FC = ({}) => {

  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    axios.get('/api/tasks').then(body => {
      console.log(body)
      if(body.status === 200){
        if(body.data && body.data.code === 200){
          setTasks(body.data.body)
        }
      }
    })
  })

  return (
    <div className={styles.container}>
      <Card
        className={styles.card}
        title='事务招领处'
      >
        {
          tasks.map(item => (
            <Issue data={item} />
          ))
        }
      </Card>
    </div>
  );
}

export default connect( ({ Home }) => ({ Home }))(Home)
