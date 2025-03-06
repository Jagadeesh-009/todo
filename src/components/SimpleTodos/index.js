// Write your code here
import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    initialTodosListIs: initialTodosList,
  }

  onClickDelete = id => {
    const {initialTodosListIs} = this.state
    const deleteTodoItems = initialTodosListIs.filter(
      eachTodoItem => eachTodoItem.id !== id,
    )
    this.setState({initialTodosListIs: deleteTodoItems})
  }

  render() {
    const {initialTodosListIs} = this.state
    return (
      <div className="SimpleTodos-container">
        <div className="SimpleTodos-container-two">
          <h1 className="SimpleTodos-heading">Simple Todos</h1>
          <ul>
            {initialTodosListIs.map(eachTodoItemIs => (
              <TodoItem
                initialTodosListIs={eachTodoItemIs}
                key={eachTodoItemIs.id}
                deleteTodoItems={this.onClickDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
