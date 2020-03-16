import React, { FC } from 'react'
import { connect } from 'umi'
import { Card, Avatar } from 'antd'
import styles from './index.less'

const { Meta } = Card

const Home: FC = ({ Home }) => {
  console.log(Home)
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>Page index</h1> */}
      <Card
        className={styles.card}
        title='事务招领处'
      >
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Card>
    </div>
  );
}

export default connect( ({ Home }) => ({ Home }))(Home)
