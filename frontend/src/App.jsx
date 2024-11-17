import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [task,setTask]=useState('');
  const [todo,setTodo]=useState([]);
  const addTask=async()=>{
    const res = await fetch ("http://localhost:3000/api/addtodo",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({task})
    }
  )
  const data = await res.json();
  res.status==201?alert("Success"):alert("Failed")
  }
  console.log(task)
  const getTodos=async()=>{
     const res = await fetch ("http://localhost:3000/api/gettodos")
     console.log(res);
     if(res.status==200){
      const data = await res.json();
      setTodo([...data])
      getTodos();
     } 
  }
  useEffect(()=>{
    getTodos()
  },[])
  console.log(todo);
  return (
    <>
     <div className="mains">
        <div className="main">
          <h1>TODO</h1>
          <input type="text" id="inputField" placeholder="Enter text here" onChange={(e)=>setTask(e.target.value)} />
          <button type="submit" id="submitButton" onClick={addTask}>Submit</button>
        
        <div className="dis">
          <ul>
            {todo.map((task)=><li key={task._id}>{task.task}</li>)}
          </ul>
        </div>
        </div>
    </div>
    </>
  )
}

export default App
