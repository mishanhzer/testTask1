import { FormDataTypes } from '../../../../../types.js'
import style from '../../Task.module.scss'

export const Button = ({
  data,
  onDelete
}: {
  data: FormDataTypes,
  onDelete: (id: string) => void
}) => {
  return (
    <button
      className={style.deleteBtn}
      onClick={() => onDelete(data.id)}
      aria-label="Удалить задачу"
    >
      ✕
    </button>
  )
}