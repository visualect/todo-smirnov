import { FilterContext } from "../contexts/filterContext"
import { useContext } from "react"
import { changeFilter } from "../reducers/filterReducer"

export default function TodoFilter() {
  const { dispatchFilter: dispatch } = useContext(FilterContext)

  const onSelectFilter = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  /* 
    Использование дефолтного селекта плохая затея, обычно я создаю кастомный селект с нуля 
    или использую готовый компонент с какой-нибудь библиотеки.
  */

  return (
    <div className="flex flex-row items-center gap-2">
      <label htmlFor="filters" className="text-sm font-medium">Показать:</label>
      <select className="border text-sm font-medium rounded-2xl px-2 py-1 outline-none w-min-[100px]" onChange={onSelectFilter} defaultValue={'active'} name="filters" id="filters">
        <option value="active">Активные</option>
        <option value="completed">Выполненные</option>
        <option value="deleted">Удаленные</option>
      </select>
    </div>
  )
}