export interface Task {
  id: string
  task: string
  stack: string
  descr: string
}

export interface StoreState {
  tasks: Task[]
  filter: string
  addTask: (task: Task) => void
  deleteTask: (id: string) => void
  setFilter: (filter: string) => void
  getFilteredTasks: () => Task[]  
}