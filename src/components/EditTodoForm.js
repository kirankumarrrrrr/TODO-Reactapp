import React ,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
    const [ value, setValue ]= useState(task.task);
    const handlesubmit = e =>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");
    }
  return (
    <form className="TodoForm" onSubmit={handlesubmit}>
        <input type="text" className='todo-input' placeholder='Update the task!' value={value} onChange={(e)=>{
            setValue(e.target.value)
        }}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
