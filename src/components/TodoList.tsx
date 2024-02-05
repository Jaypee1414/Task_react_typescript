import React from 'react'
import {todo} from '../Model'
import Single from './Single';

interface props{
    todos : todo[];
    setTodos:  React.Dispatch<React.SetStateAction<todo[]>>;
}

const TodoList:React.FC<props>= ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo)=>(
            <Single 
                todo={todo} 
                key={todo.id}
                todos={todos}
                setTodos={setTodos}

            />
        ))}
    </div>
  )
}

export default TodoList