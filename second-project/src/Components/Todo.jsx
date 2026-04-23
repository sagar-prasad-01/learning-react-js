import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [Todo, setTodo] = useState([{task:"sample task",id:uuidv4()}]);
  const [NewTodo, setNewTodo] = useState("");
  let handleInput = (event) => {
    setNewTodo(event.target.value);
  };

  let delleteTask=(id)=>{
    setTodo(

        (e)=>Todo.filter((e)=>e.id!=id)
    );


  }
  return (
    <div>
      <input
        type="text"
        placeholder="add a task"
        onChange={handleInput}
        value={NewTodo}
      />
      <button
        onClick={() => {
            console.log(Todo);
            
          setTodo([...Todo, {task:NewTodo,id:uuidv4()}]);
          setNewTodo("");
        }}
      >
        add task
      </button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h2>Task to do</h2>
      <ul>
        {Todo.map((e) => (
       
          <li key={e.id}>
            <span>{e.task}</span>
            <button onClick={()=>delleteTask(e.id)}>dellete</button>
            
            
            </li>
       
          
        ))}
      </ul>
    </div>
  );
};
