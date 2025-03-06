// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosListIs, deleteTodoItems} = props
  const {title, id} = initialTodosListIs
  const onDelete = () => {
    deleteTodoItems(id)
  }
  return (
    <li className="TodoItem-container">
      <p className="TodoItem-para">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
