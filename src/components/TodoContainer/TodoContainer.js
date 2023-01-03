import React from 'react'
import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'
import './TodoContainer.scss'


const TodoContainer = () => {



  
  return (

    <div className='TodoContainer'>

        <div><h2>Todo App</h2></div>
        <TodoInput /> 

        <TodoList />  
    </div>


  )
}

export default TodoContainer