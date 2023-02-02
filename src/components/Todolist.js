import React from 'react'
import Todo from "./Todo"
function Todolist({todos,setTodos,filtered}) {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
        {filtered.map((todo)=>(
          <Todo 
          todos={todos} 
          todo={todo}
          setTodos={setTodos} 
          key={todo.id}
          text={todo.text}/>)
        )}
        </ul>
        
    </div>
  )
}

export default Todolist