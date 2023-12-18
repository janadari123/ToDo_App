import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id)
        setValue("")
    };


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value= {value}
            onChange={(e) => setValue(e.target.value)}
            className= "todo-input" placeholder= "Update Task"/>
    
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}