import React, { useEffect, useRef, useState } from 'react'
import { todo } from '../Model'
import TodoList from './TodoList';
import { MdDeleteForever,MdOutlineDone,MdModeEdit } from "react-icons/md";

type props ={
    todo: todo;
    todos: todo[]; 
    setTodos :  React.Dispatch<React.SetStateAction<todo[]>>;


}

function Single({todo, todos, setTodos} : props) {
    const [edit , setEdit] = useState<boolean>(false);
    const [editTodos, setEditTodos] = useState<string>(todo.todo)
    const handleDone = (id: number) => {
        setTodos(todos.map((todo)=>
            todo.id === id?{...todo, isDone:!todo.isDone }:todo)
        )
    }

    const handleDelete = ( id: number ) => {
        setTodos(todos.filter((todo)=> todo.id !== id))
    }


    const handleEdit = (e: React.FormEvent,id:number)=>{
        e.preventDefault();

        setTodos(todos.map((todo)=>(
            todo.id === id?{...todo,todo:editTodos} : todo
        )))
        setEdit(false);
    }

    const ref = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        ref.current?.focus();
    },[edit])
  return (
    <form className='todos-single' onSubmit={(e)=> handleEdit(e,todo.id)}> 
    {
        edit ? ( 
            <input value={editTodos} onChange={(e) => setEditTodos(e.target.value)} className='todos-text' ref={ref}/>
        ):(
            todo.isDone ? (
                <s className='todos-text'>{todo.todo}</s>
            ):(
                <span className='todos-text'>{todo.todo}</span>
            )
        )
    }
    

    

        <div className=''>
            <span className='icon' onClick={ () => {
                if(!edit && !todo.isDone){
                    setEdit(!edit);
                }
            }}>
                <MdModeEdit/>
            </span>
            
            <span className='icon' onClick={()=> handleDelete(todo.id)}>
                <MdDeleteForever/>
            </span>
            
            <span className='icon' onClick={()=> handleDone(todo.id)}>
                <MdOutlineDone/>
            </span>
        </div>
    </form>
  )
}

export default Single