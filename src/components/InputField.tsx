import React, {useRef} from 'react'

interface props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e:React.FormEvent) => void;
}
const InputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input 
            ref={inputRef}
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