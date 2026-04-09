import { useTasks, useFilter } from '../../store/store'

import { Filter } from './ui/Filter/Filter.js'
import { ListTasks } from './ui/ListTasks/ListTasks.js'

import { btnData } from './constants.js'

import { FormDataTypes } from '../../types.js'

import style from './RightSide.module.scss'

export const RightSide = () => {
  const tasks: FormDataTypes[] = useTasks()
  const filter: string = useFilter()

  const filteredTasks: FormDataTypes[] = filter === 'Все'
    ? tasks
    : tasks.filter(task =>
      task.stack.toLowerCase().includes(filter.toLowerCase())
    )

  return (
    <div className={style.wrapper}>
      <Filter data={btnData} />
      <ListTasks data={filteredTasks} />
    </div>
  )
}