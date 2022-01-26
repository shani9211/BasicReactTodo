import React,{useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState("");

const handleFormSubmit=(e)=>{
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random()*1000),
        text:input,
    })
    setInput('');
       
  
};

  return <div>
      <form className='todo-form' onSubmit={handleFormSubmit}>
<input type="text" placeholder='Add todo'  value={input}  className='todo-input'  onChange={(event)=>setInput(event.target.value)}/>
<button className='todo-button'>Add a Todo</button>
      </form>
  </div>;
}

export default TodoForm;
