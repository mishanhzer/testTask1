import React, { useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { Field } from './ui/Field/Field.js'

import { FormDataTypes } from '../../types'

import style from './LeftSide.module.scss'

export const LeftSide = ({ onAddTask }: { onAddTask: (task: FormDataTypes) => void }) => {
  const [valueTask, setValueTask] = useState<string>('')
  const [valueStack, setValueStack] = useState<string>('')
  const [valueDescr, setValueDescr] = useState<string>('')
  const [tasks, setTasks] = useState<FormDataTypes[]>([])

  useEffect(() => {
    const savedData = localStorage.getItem('data')
    if (savedData) {
      const parseData = JSON.parse(savedData)
      setTasks(parseData)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = {
      task: valueTask,
      stack: valueStack,
      descr: valueDescr,
      id: uuidv4()
    }

    const updatedTasks = [...tasks, formData]
    setTasks(updatedTasks)

    localStorage.setItem('data', JSON.stringify(updatedTasks))

    onAddTask(formData)

    setValueTask('')
    setValueStack('')
    setValueDescr('')
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.title}>➕ СОЗДАТЬ НОВУЮ ЗАДАЧУ</div>
      <Field
        value={valueTask}
        setValue={setValueTask}
        descr='Название задачи:' />

      <Field
        value={valueStack}
        setValue={setValueStack}
        descr='Стэк технологий:' />

      <Field
        value={valueDescr}
        setValue={setValueDescr}
        descr='Описание задачи:' />

      <button className={style.btn}>✨ Создать задачу</button>
    </form>
  )
}