import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, devtools, createJSONStorage } from 'zustand/middleware'

import {Task, StoreState} from './types.js'

export const useStoreTasks = create<StoreState>()(
  devtools(
    persist(
      immer<StoreState>(
        (set, get) => ({
          tasks: [],
          filter: 'Все',

          addTask: (task) => set((state) => {
            state.tasks.push(task)
          }),

          deleteTask: (id) => set((state) => {
            const index = state.tasks.findIndex(task => task.id === id)
            if (index !== -1) {
              state.tasks.splice(index, 1)
            }
          }),

          setFilter: (filter) => set((state) => {
            state.filter = filter
          }),

          getFilteredTasks: () => {
            const { tasks, filter } = get()
            if (filter === 'Все') return tasks
            return tasks.filter(task =>
              task.stack.toLowerCase().includes(filter.toLowerCase())
            )
          }
        })
      ),
      {
        name: 'tasks-storage',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
)

export const useStore = () => {
  const tasks = useStoreTasks((state) => state.tasks)
  const filter = useStoreTasks((state) => state.filter)
  const addTask = useStoreTasks((state) => state.addTask)
  const deleteTask = useStoreTasks((state) => state.deleteTask)
  const setFilter = useStoreTasks((state) => state.setFilter)
  const getFilteredTasks = useStoreTasks((state) => state.getFilteredTasks)

  return {
    tasks,
    filter,
    addTask,
    deleteTask,
    setFilter,
    filteredTasks: getFilteredTasks()
  }
}

export const useTasks = () => useStoreTasks((state) => state.tasks)
export const useFilter = () => useStoreTasks((state) => state.filter)
export const useAddTask = () => useStoreTasks((state) => state.addTask)
export const useDeleteTask = () => useStoreTasks((state) => state.deleteTask)
export const useSetFilter = () => useStoreTasks((state) => state.setFilter)


