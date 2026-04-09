import { useFilter, useSetFilter } from "../../../../store/store.js"

import style from './Filter.module.scss'

export const Filter = ({ data }: { data: { id: number, text: string }[] }) => {
  const filter: string = useFilter()
  const setFilter: (filter: string) => void = useSetFilter()
  return (
    <div className={style.containerFilter}>
      {data.map((btn) => (
        <button
          key={btn.id}
          className={filter === btn.text ? `${style.btn} ${style.active}` : style.btn}
          onClick={() => setFilter(btn.text)}
        >
          {btn.text}
        </button>
      ))}
    </div>
  )
}