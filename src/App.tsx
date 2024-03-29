import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { todo }  from './Model'
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
const App:React.FC=()=>{

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<todo[]>([]);
  const [completeTodos, setCompleteTodos] =useState<todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{  
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id: Date.now(), todo, isDone:false}])
      setTodo("");
    }
  };

  const onDragEnd = (result:DropResult) =>{
    const {source, destination} = result;

    if(!destination) return;
    if(destination.droppableId===source.droppableId && destination.index === source.index)
    return;

    let add; 
    let active = todos
    let complete = completeTodos

    if(source.droppableId == 'TodoList')
    {
      add =active[source.index]
      active.splice(source.index, 1)
    }else{
      add = complete[source.index]
      complete.splice(source.index, 1)
    }

    if(destination.droppableId == 'TodoList')
    {
      active.splice(destination.index,0,add)
    }else{
      complete.splice(destination.index,0,add)
    }
    setCompleteTodos(complete)
    setTodos(active);
  }
  return (
    <DragDropContext  onDragEnd={onDragEnd}>
      <div className='App'>
          <div className='container'>
            <h1 className='header'>Taskify</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            <TodoList 
              todos={todos} 
              setTodos={setTodos}
              complete={completeTodos}
              setCompleteTodos={setCompleteTodos}
            />
          </div>
      </div>
    </DragDropContext>
  )
}

export default App;
