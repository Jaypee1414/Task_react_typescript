import React from 'react'
import { todo } from '../Model'
import TodoList from './TodoList';
type props ={
    todo: todo;
    todos: todo[]; 
    setTodos :  React.Dispatch<React.SetStateAction<todo[]>>;


}

function Single({todo, todos, setTodos} : props) {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo)=>
            todo.id === id?{...todo, isDone:!todo.isDone}:todo)
        )
    }
  return (
    <form className='todos-single'> 
    {
        todo.isDone?(
            <s className='todos-text'>{todo.todo}</s>
        ):(
            <s className='todos-text'>{todo.todo}</s>
        )
    }
        <span className='todos-text'>{todo.todo}</span>
        <div className=''>
            <span className='icon'>Edit</span>
            <span className='icon'>Delete</span>
            <span className='icon' onClick={()=> handleDone(todo.id)}>Done</span>
        </div>
    </form>
  )
}

export default Single