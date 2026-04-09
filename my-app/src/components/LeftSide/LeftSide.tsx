import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Field } from './ui/Field/Field'
import { FormDataTypes } from '../../types'
import style from './LeftSide.module.scss'

export const LeftSide = ({ onAddTask }: { onAddTask: (task: FormDataTypes) => void }) => {
  const [valueTask, setValueTask] = useState('')
  const [valueStack, setValueStack] = useState('')
  const [valueDescr, setValueDescr] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = {
      task: valueTask,
      stack: valueStack,
      descr: valueDescr,
      id: uuidv4()
    }

    onAddTask(formData)

    setValueTask('')
    setValueStack('')
    setValueDescr('')
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.title}>➕ СОЗДАТЬ НОВУЮ ЗАДАЧУ</div>
      <Field value={valueTask} setValue={setValueTask} descr='Название задачи:' />
      <Field value={valueStack} setValue={setValueStack} descr='Стэк технологий:' />
      <Field value={valueDescr} setValue={setValueDescr} descr='Описание задачи:' />
      <button className={style.btn}>✨ Создать задачу</button>
    </form>
  )
}