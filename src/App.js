
import './App.css';
import { useState,useEffect } from 'react';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  
  const [inputTxt,setInput]=useState("")
  const [todos,setTodo]=useState([])
  const [status,setStatus]=useState("All")
  const [filtered,setFiltered]=useState([])

  useEffect(()=>{
    filterHandler()
  },[todos,status])

  const filterHandler=()=>{
    switch(status){
      case"completed":
        setFiltered(todos.filter(todos=>todos.completed===true))
        break
      case"uncompleted":
        setFiltered(todos.filter(todos=>todos.completed===false))
        break
      default:
        setFiltered(todos)
        break
      }
  }
  return (
    <div className="App">
      <header>
        <h1>TODO list</h1>
      </header>
      <Form inputTxt={inputTxt} 
        todos={todos} 
        setTodos={setTodo} 
        setinputTxt={setInput} 
        setStatus={setStatus} 
        />
      <Todolist filtered={filtered}todos={todos} setTodos={setTodo}/>
      </div>
  );
}

export default App;
