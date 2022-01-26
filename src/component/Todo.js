import React,{useState} from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from './TodoForm';


function Todo({todos,completeTodo,removeTodo,updateTodo}) {

const [edit, setEdit] = useState({
    id:null,
    value:""
});

const submitUpdate=value=>{
    updateTodo(edit.id,value)
    setEdit({
        id:null,
        value:""
    })

}

if (edit.id) {
  return  <TodoForm edit={edit} onSubmit={submitUpdate} />
}



console.log("check edit value",edit)
  return (
  <div>
      
{todos.map((todo,index)=>(
   <div key={index} >
       <div key={todo.id} onClick={()=>completeTodo(todo.id)}>{todo.text}</div>
       <div className='icons'>
<RiDeleteBin5Line   className='delete-icon' />
<TiEdit onClick={()=>setEdit({id:todo.id,value:todo.text})} className='edit-icon' />
       </div>
   </div>

))}

  </div>
  )
}

export default Todo;
