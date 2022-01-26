import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo=(todo)=>{
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return  
        }

        const newTodos=[todo,...todos];
        setTodos(newTodos);
        console.log(...todos)
    }

const removeTodo=(id)=>{
const removeArr=[...todos].filter(todo=>todo.id!==id)
setTodos(removeArr);
}

const completeTodo=(id)=>{
    let updatedTodos=todos.map(todo=>{
        if (todo.id===id) {
        todo.iscomplete=!todo.iscomplete
    }
    return todo
}


    )
}



const updateTodo=(todoId,newvalue)=>{
    if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
        return  
      }
      setTodos(prev=>prev.map(item=>(item.id===todoId?newvalue:item)))
};


  return <div>
      <h3>What's Plan for Building Concept</h3>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} updateTodo={updateTodo}  />
  </div>;
}

export default TodoList;
