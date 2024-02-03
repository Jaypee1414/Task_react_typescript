import React from 'react'


interface props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<props> = ({todo, setTodo}) => {
  return (
    <form className='input'>
        <input 
            type="text" 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            placeholder='Entere a task ' 
            className='input-box'
        />
        <button className='submit-btn'>
            Go 
        </button>
    </form>
  )
}

export default InputField