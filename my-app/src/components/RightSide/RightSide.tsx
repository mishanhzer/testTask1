import { useState, useEffect } from 'react'

import style from './RightSide.module.scss'

export const RightSide = () => {
  const [testData, setTestData] = useState({})
  console.log(testData)
  useEffect(() => {
    const savedData = localStorage.getItem('data')
    if (savedData) {
      const parseData = JSON.parse(savedData)
      setTestData(parseData)
    }
  }, [])
  return (
    <div className={style.wrapper}>
      <div>Filter</div>
      <div>
        <div>Список задач:</div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

    </div>
  )
}