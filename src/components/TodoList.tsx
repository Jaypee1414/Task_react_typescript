import React from 'react'
import {todo} from '../Model'
import Single from './Single';
import {Droppable} from 'react-beautiful-dnd'

interface props{
    todos : todo[];
    setTodos:  React.Dispatch<React.SetStateAction<todo[]>>;
    complete: todo[]
    setCompleteTodos: React.Dispatch<React.SetStateAction<todo[]>>;
  }

const TodoList:React.FC<props>= ({todos, setTodos, complete, setCompleteTodos}) => {
  return (
    <div className="todo--container">
      <Droppable droppableId='TodoList'>
        {
          (provided)=>(
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">Active Task</span>
            {
              todos.map((todo, index)=>(
                <Single todo={todo} index={index} todos={todos} key={todo.id} setTodos={setTodos}/>
              ))
            }
          </div>
          )
        }
      </Droppable>
      <Droppable droppableId='TodoList'>
        {
          (provided)=>(
            <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">Complete Task</span>
              {
                complete.map((todo,index)=>(
                  <Single todo={todo} index={index} todos={complete} key={todo.id} setTodos={setCompleteTodos}/>
                ))
              }
            </div>
          )
        }
      </Droppable>
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