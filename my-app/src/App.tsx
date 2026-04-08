import { useState, useEffect } from 'react'

import { LeftSide } from './components/LeftSide/LeftSide.js'
import { RightSide } from './components/RightSide/RightSide.js'

import { FormDataTypes } from './types'

export const App = () => {
  const [tasks, setTasks] = useState<FormDataTypes[]>([])

  useEffect(() => {
    const savedData = localStorage.getItem('data')
    if (savedData) {
      setTasks(JSON.parse(savedData))
    }
  }, [])

  const handleAddTask = (newTask: FormDataTypes) => {
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
    localStorage.setItem('data', JSON.stringify(updatedTasks))
  }

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
    localStorage.setItem('data', JSON.stringify(updatedTasks))
  }

  return (
    <div style={{ display: 'flex' }}>
      <LeftSide onAddTask={handleAddTask} />
      <RightSide
        tasks={tasks}
        onDeleteTask={handleDeleteTask} />
    </div>
  )
}
