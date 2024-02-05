import React from 'react'
import { todo } from '../Model'
type props ={
    todo: todo;
    todos: todo[]; 
    setTodos :  React.Dispatch<React.SetStateAction<todo[]>>;


}

function Single({todo, todos, setTodos} : props) {
  return (
    <form className='todos-single'> 
        <span className='todos-text'>{todo.todo}</span>
        <div className=''>
            <span className='icon'>Edit</span>
            <span className='icon'>Delete</span>
            <span className='icon'>Done</span>
        </div>
    </form>
  )
}

export default Single