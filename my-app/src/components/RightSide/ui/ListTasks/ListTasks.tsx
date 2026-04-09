import { Task } from './Task/Task'

import { useDeleteTask } from '../../../../store/store.js'

import { FormDataTypes } from '../../../../types.js'

import style from './ListTasks.module.scss'

export const ListTasks = ({
  data
}: { data: FormDataTypes[] }) => {
  const deleteTask: (id: string) => void = useDeleteTask()
  return (
    <div>
      <div className={style.listTask}>Список задач ({data.length}):</div>
      {data.map((task) => (
        <Task
          key={task.id}
          data={task}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </div>
  )
}