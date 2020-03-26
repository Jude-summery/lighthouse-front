import React, { FC, useState, useEffect } from 'react'
import Texty from 'rc-texty'
import styles from './index.less'

const Curtain: FC = () => {

  const [className, setcClassName] = useState('curtain-visible')
  const [textIndex, setTextIndex] = useState(0) 

  useEffect(() => {
    const changeText = setInterval(()=>{
      if(textIndex < 2){
        setTextIndex(textIndex + 1)
      } else {
        setTextIndex(0)
      }
      
    }, 5000)

    return () => {
      clearInterval(changeText)
    }
  })

  return (
    <>
      <div onClick={() => setcClassName('curtain-hidden')} className={styles[className]}>
        <div className={styles['curtain-pic1']}>
          <div className={styles['text-container']}>
            <div className={styles['text-decoration-before']}></div>
            <div className={styles['text']}>
              <Texty>
                {['发 布', '招 领', '协 同'][textIndex]}
              </Texty>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles[className + '-h1']}>LIGHTHOUSE</h1>
    </>
  )
}

export default Curtain
