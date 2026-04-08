import { useState } from 'react'

import style from './LeftSide.module.scss'

export const LeftSide = () => {
  const [valueTask, setValueTask] = useState('')
  const [valueStack, setValueStack] = useState('')
  const [valueDescr, setValueDescr] = useState('')

  const [data, setData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      task: valueTask,
      stack: valueStack,
      descr: valueDescr
    }

    setData(formData)

    localStorage.setItem('data', JSON.stringify(formData))

    setValueTask('')
    setValueStack('')
    setValueDescr('')
  }

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit}>
      <div>➕ СОЗДАТЬ НОВУЮ ЗАДАЧУ   </div>
      <div>
        <div>Название задачи:</div>
        <input
          className={style.input}
          value={valueTask}
          onChange={(e) => setValueTask(e.target.value)}
          placeholder='Задача' />
      </div>

      <div>
        <div>Стэк технологий:</div>
        <input
          className={style.input}
          value={valueStack}
          onChange={(e) => setValueStack(e.target.value)}
          placeholder='Стэк' />
      </div>

      <div>
        <div>Описание задачи:</div>
        <input
          className={style.input}
          value={valueDescr}
          onChange={(e) => setValueDescr(e.target.value)}
          placeholder='Описание' />
      </div>

      <button className={style.btn}>✨ Создать задачу</button>
    </form>
  )
}