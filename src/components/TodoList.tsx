import React from 'react'
import {todo} from '../Model'
import Single from './Single';

interface props{
    todos : todo[];
    setTodos:  React.Dispatch<React.SetStateAction<todo[]>>;
}

const TodoList:React.FC<props>= ({todos, setTodos}) => {
  return (
    <div className="todo--container">
      <div className="todos">
        <span className="todos__heading">Active Task</span>
        {
          todos.map((todo)=>(
            <Single todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
          ))
        }
      </div>
      <div className="todos remove">
      <span className="todos__heading">Complete Task</span>
        {
          todos.map((todo)=>(
            <Single todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
          ))
        }
      </div>
    </div>

  )
}
    // <div className='todos'>
//         {todos.map((todo)=>(
//             <Single 
//                 todo={todo} 
//                 key={todo.id}
//                 todos={todos}
//                 setTodos={setTodos}

//             />
//         ))}
//     </div>


export default TodoList