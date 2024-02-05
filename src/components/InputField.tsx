import React from 'react'


interface props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e:React.FormEvent) => void;
}
const InputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className='input' onSubmit={(e)=>handleAdd(e)}>
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