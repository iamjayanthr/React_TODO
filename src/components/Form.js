import React from 'react'

const Form=({inputTxt,setinputTxt, todos, setTodos, setStatus, filtered})=> {
    const inputHandler=(e)=>{
        setinputTxt(e.target.value)
    }
    const submittodoHandler=(e)=>{
      e.preventDefault()
      setTodos([...todos,{text:inputTxt, completed: false, id: Math.random()*1000}])
      setinputTxt("")
    }
    const statusHandler =(e)=>{
      setStatus(e.target.value)
    }
  return ( 
  <form>
    <input onChange={inputHandler} type="text" value={inputTxt} className="todo-input" />
    <button onClick={submittodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange={statusHandler}name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
  )
}

export default Form