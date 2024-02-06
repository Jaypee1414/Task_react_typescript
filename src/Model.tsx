import { useReducer } from "react";

export interface todo{
    id: number; 
    todo: string;
    isDone: boolean;
}


// const ReducerExample=()=>{
//     const [state, dispatch] = useReducer(TodoReducer , []);
// }