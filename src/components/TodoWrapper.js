import React , {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodo]= useState([]);
    const addTodo = todo => {
        setTodo([...todos,{id: uuidv4(), task: todo, completed: false, isediting: false}]);
    }
    const togglecomplete = id => {
        setTodo(todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo)))
    }
    const deletetodo = id => {
        setTodo(todos.filter(todo=>(todo.id !== id)))
    }
    const editTodo = id => {
        setTodo(todos.map(todo=>(todo.id === id ? {...todo, isediting: !todo.isediting} : todo)))
    }
    const editTask =(task,id) => {
        setTodo(todos.map(todo=>(todo.id === id ? {...todo, task, isediting: !todo.isediting} : todo)))
    }
  return (
    <div className='TodoWrapper'>
        <h1>What to do?</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo,index) => (
            todo.isediting ? (
                <EditTodoForm editTodo={editTask} task={todo}/>
         ) : (
                <Todo task={todo} key={index} 
                togglecomplete={togglecomplete} deletetodo={deletetodo} editTodo={editTodo} />
        )

        ))}
    </div>
  )
}
