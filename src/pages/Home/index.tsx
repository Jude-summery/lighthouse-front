import React, { FC } from 'react'
import { connect } from 'umi'
import { Card } from 'antd'
import Issue from './Issue'

import styles from './index.less'

const Home: FC = ({ Home }) => {
  Home.query({
    payload: {a:1}
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
