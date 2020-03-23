import React, { FC, useState } from 'react'
import { Carousel } from 'antd'
import styles from './index.less'

const Curtain:FC = () => {

  const [className, setcClassName] = useState('curtain-visible')

  return (
    <div onClick={() => setcClassName('curtain-hidden')} className={styles[className]}>
      <Carousel autoplay>
        <div className={styles['curtain-pic1']}>
          <h1 className={styles[className + '-h1']}>LIGHTHOUSE</h1>
        </div>
      </Carousel>
    </div>
  )
}

export default Curtain
