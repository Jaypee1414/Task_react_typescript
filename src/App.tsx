import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

const App:React.FC=()=>{

  const [todo, setTodo] = useState<string>("")
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='header'>Taskify</h1>
        <InputField todo={todo} setTodo={setTodo}/>
      </div>

    </div>
  )
}

export default App;
