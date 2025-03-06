import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    const {todoDetails} = props
    this.state = {
      isEditing: false,
      editedTitle: todoDetails.title,
    }
  }

  toggleEdit = () => {
    this.setState(prevState => ({isEditing: !prevState.isEditing}))
  }

  handleEditChange = event => {
    this.setState({editedTitle: event.target.value})
  }

  saveTitle = () => {
    const {onUpdate, todoDetails} = this.props
    const {editedTitle} = this.state
    if (editedTitle.trim() !== '') {
      onUpdate(todoDetails.id, editedTitle)
    }
    this.setState({isEditing: false})
  }

  render() {
    const {todoDetails, onDelete} = this.props
    const {isEditing, editedTitle} = this.state
    const {id, title} = todoDetails

    return (
      <li className="todo-item">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={this.handleEditChange}
          />
        ) : (
          <p>{title}</p>
        )}
        <div className="buttons">
          <button
            type="button"
            className="btn edit-btn"
            onClick={isEditing ? this.saveTitle : this.toggleEdit}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button
            type="button"
            className="btn delete-btn"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
