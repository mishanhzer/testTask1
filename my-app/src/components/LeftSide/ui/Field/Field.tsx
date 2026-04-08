import style from '../../LeftSide.module.scss'

export const Field = ({
  value,
  setValue,
  descr
}: {
  value: string,
  setValue: (value: string) => void,
  descr: string
}) => {
  return (
    <div className={style.fieldGroup}>
      <div className={style.label}>{descr}</div>
      <input
        className={style.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Описание'
      />
    </div>
  )
}