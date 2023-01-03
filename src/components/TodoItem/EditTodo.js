import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'

import './edittodo.scss'


const EditTodo = (props) => {




const [editInput,setEditInput] =  useState('')


const onChangehandel = (event) => {

    setEditInput(event.target.value);

    console.log(editInput);
}


const handlelClick = (event) => {


    props.fetchedit(editInput)
    setEditInput('')

}



  return (


    <div className='editContainer'>
        
        
        <input onChange={onChangehandel} value={editInput} type="text" placeholder='write your new to do' /> 
        
        
        
        {/* <button onClick={handlelClick}>Edit </button> */}
        <Button className='editbtn' size='small' onClick={handlelClick} variant="contained">submit edit</Button>

        
        </div>


  )
}

export default EditTodo