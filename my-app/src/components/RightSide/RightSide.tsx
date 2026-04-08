import { Task } from './Task/Task'

import style from './RightSide.module.scss'

import { FormDataTypes } from '../../types'

export const RightSide = ({
  tasks,
  onDeleteTask
}: { tasks: FormDataTypes[], onDeleteTask: (id: string) => void }) => {
  const handleDelete = (id: string) => {
    onDeleteTask(id)
  }
  return (
    <div className={style.wrapper}>
      <div>Filter</div>
      <div>
        <div>Список задач:</div>
        {tasks.map((task) => (
          <Task
            onDelete={(id: string) => handleDelete(id)}
            key={task.id}
            data={task} />
        ))}
      </div>
    </div>
  )
}