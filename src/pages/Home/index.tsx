import React, { FC, useEffect } from 'react'
import { connect } from 'umi'
import { Card } from 'antd'
import axios from 'axios'
import Issue from './Issue'

import styles from './index.less'

const Home: FC = ({}) => {

  useEffect(()=>{
    axios.get('/api/tasks').then(body => {
      console.log(body)
    })
  })

  return (
    <div className={styles.container}>
      <Card
        className={styles.card}
        title='事务招领处'
      >
        <Issue />
      </Card>
    </div>
  );
}

export default connect( ({ Home }) => ({ Home }))(Home)
