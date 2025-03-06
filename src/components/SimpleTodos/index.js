import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodos extends Component {
  state = {
    todos: initialTodosList,
    newTodo: '',
  }

  handleInputChange = event => {
    this.setState({newTodo: event.target.value})
  }

  addTodo = () => {
    const {todos, newTodo} = this.state
    const trimmedTodo = newTodo.trim()

    if (trimmedTodo === '') return

    const match = trimmedTodo.match(/(\D+)\s*(\d+)$/)
    let title = trimmedTodo
    let count = 1

    if (match) {
      title = match[1].trim()
      count = parseInt(match[2], 10)
    }

    const newTodos = Array.from({length: count}, () => ({
      id: uuidv4(),
      title,
    }))

    this.setState({
      todos: [...todos, ...newTodos],
      newTodo: '',
    })
  }

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }))
  }

  updateTodo = (id, updatedTitle) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? {...todo, title: updatedTitle} : todo,
      ),
    }))
  }

  render() {
    const {todos, newTodo} = this.state

    return (
      <div className="simple-todos-container">
        <h1>Simple Todos</h1>

        <div className="todo-input-container">
          <input
            type="text"
            placeholder="Enter todo (e.g., 'Read a book 3')"
            value={newTodo}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.addTodo} className="btn add-btn">
            Add
          </button>
        </div>

        <ul className="todos-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todoDetails={todo}
              onDelete={this.deleteTodo}
              onUpdate={this.updateTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
