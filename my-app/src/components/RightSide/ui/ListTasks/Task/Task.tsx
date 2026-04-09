import { Button } from './ui/Button/Button.js'
import { FormDataTypes } from '../../types'
import style from './Task.module.scss'

export const Task = ({
  data,
  onDelete
}: {
  data: FormDataTypes,
  onDelete: (id: string) => void
}) => {
  return (
    <div className={style.card}>
      <Button
        data={data}
        onDelete={onDelete} />

      <div className={style.header}>
        <div className={style.title}>{data.task}</div>
        <div className={style.badge}>📌 Задача</div>
      </div>

      <div className={style.stack}>
        <span className={style.stackLabel}>Стэк технологий:</span>
        <div className={style.stackTags}>
          {data.stack && data.stack.split(',').map((tech: string, index: number) => (
            <span
              key={`${data.id}-${index}`}
              className={style.tag}>
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>

      <div className={style.description}>
        <span className={style.descLabel}>Описание:</span>
        <p>{data.descr || 'Нет описания'}</p>
      </div>
    </div>
  )
}