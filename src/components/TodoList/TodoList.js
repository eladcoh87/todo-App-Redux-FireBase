import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem' 
import ClearTodo from './ClearTodo'
import NoToDo from './NoToDo'
import './TodoList.scss'

const TodoList = (props) => {


  console.log('todo llist render')

  const todolist = useSelector(state => state.todolist)

  console.log(todolist);

const renderList = todolist.map((todo) => {

    console.log(todo);
    return ( <React.Fragment key={todo.name}>  <TodoItem text={todo.text} id={todo.id} name={todo.name}  /> </React.Fragment>)
  
  
  });
  

  
  
  console.log(props.loading);

  const flag = (props.loading === false) && (todolist.length === 0);
  console.log(flag);
  return (

    

    <div className='todo-list-container'>

{flag && <NoToDo className="notodo" />}

{renderList}


{todolist.length > 0 && <ClearTodo />}

  
    </div>


  )


}

export default TodoList