import { Badge, Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { clearAll } from '../store/actions';




const ClearTodo = () => {

const todolist =  useSelector(state => state.todolist)
const dispatch =  useDispatch()

    console.log(todolist)


const handleClearAll = () => {

  const handleDelet = async () => {

 
    try {
    
      const response = await fetch(`https://mcity-d0157-default-rtdb.firebaseio.com/todo.json`, {
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
    
  
     dispatch(clearAll())

    
    };
    



    handleDelet()

}


  return (

   
    <div className='taskInfo'><p>You Have <Badge badgeContent={todolist.length} color="secondary">
    <FormatListBulletedIcon color="action" />
  </Badge> Panding Task </p>  

<Button onClick={handleClearAll} color="secondary" variant="contained" size="medium">Clear all</Button>



  </div>
  




  )
}

export default ClearTodo