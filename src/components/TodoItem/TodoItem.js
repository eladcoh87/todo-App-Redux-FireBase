import { Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './TodoItem.scss'
import { deletTodo, editTodo } from '../store/actions';
import EditTodo from './EditTodo';


const TodoItem = (props) => {

const [isEdit,setIsEdit]  = useState(false)


  console.log(props);
const todoname = props.name;
console.log(todoname,'come from todoitem');

const dispatch = useDispatch()


const handleDelet = async () => {

 


console.log(todoname,'come from async func ');


try {

  const response = await fetch(`https://mcity-d0157-default-rtdb.firebaseio.com/todo/${todoname}.json`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json'
    }
    
});



console.log(response);


  if (!response.ok) {
   throw new Error('somtinhg went wrong!!!!')
 }

  const data = await response.json();

 
 

 
 } catch(error) {
 console.log(error.message)
 
 }





 dispatch(deletTodo(todoname));


};


const handleEdit = async (editInput) => {



  const newTodoObject = {text:editInput,name:todoname}
console.log(newTodoObject);
// const newModifyTodo = {text:'duummy text '}

  const response = await fetch(`https://mcity-d0157-default-rtdb.firebaseio.com/todo/${todoname}.json`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newTodoObject)
  });
    

  
  // Awaiting response.json()
  const resData = await response.json();
  
  // Return response data 


  dispatch(editTodo(newTodoObject));

  setIsEdit(false)

  return resData;
}



const onClikcEdit = () => {

  setIsEdit(true)


}

  if (isEdit) {



    return <EditTodo fetchedit={handleEdit} />



  }





  return (



<div className='itemContainer'>

<div className='ItemText'>{props.text}</div>

<div className='btnContainer'>

<Button onClick={onClikcEdit} className='editbtn' size="small" variant="outlined">
  Edit
</Button>

<Button onClick={handleDelet} className='delbtn' size="small" variant="outlined">
  Delete
</Button>
</div>

    </div>
    
  )
}

export default TodoItem