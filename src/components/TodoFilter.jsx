import { FilterContext } from "../contexts/filterContext"
import { useContext } from "react"
import { changeFilter } from "../reducers/filterReducer"

export default function TodoFilter() {
  const { dispatchFilter: dispatch } = useContext(FilterContext)

  const onSelectFilter = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
    <div>
      <span>Show</span>
      <select onChange={onSelectFilter} defaultValue={'active'} name="filters" id="filters">
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        <option value="deleted">Deleted</option>
      </select>
    </div>
  )
}
