import React, { FC, useState, useEffect } from 'react'
import Texty from 'rc-texty'
import styles from './index.less'

interface IProps {
  getStatus: () => void
}

const Curtain: FC<IProps> = (props) => {

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

  const handleClick = () => {
    setcClassName('curtain-hidden')
    props.getStatus()
  }

  return (
    <>
      <div onClick={handleClick} className={styles[className]}>
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
