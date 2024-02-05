import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { todo }  from './Model'
const App:React.FC=()=>{

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<todo[]>([]);

  const handleAdd=(e:React.FormEvent)=>{  
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id: Date.now(), todo, isDone:false}])
      setTodo("");
    }
  };
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='header'>Taskify</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        {todos.map((t)=>{
          return(
            <li>{t.todo}</li>
          )
        })}
      </div>
    </div>
  )
}

export default App;
