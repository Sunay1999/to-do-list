import React, { useState } from 'react'
import "../component/style.css"

const Todolist = () => {

    const [inputTask, setInputTask] = useState(" ");
    const [list, setList] = useState ([]); 

  const handleAddToDo = () => {
    const newTask = {
      id: Math.random(),
      todo: inputTask
    };
    setList([...list, newTask]);
    setInputTask("");
  }

  const handleInputChange=(event)=>{
    setInputTask(event.target.value);
  }

  const handleDeleteToDo=(id)=>{
    const newList=list.filter((todo)=>todo.id!==id)
    setList(newList)
  }
  return (
    <div className='Todo'>
      <h1>My To Do List</h1>
      <div className="top">
        <input type="text" 
        placeholder='Enter a new Task' 
        className='input'
        onChange={handleInputChange}
         />
        <button onClick={handleAddToDo}>ADD</button>
      </div>
      <ul>
        {list.map((todo)=>(
          <li className='task' key={todo.id}>
            {todo.todo}
            <button onClick={()=>handleDeleteToDo(todo.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist