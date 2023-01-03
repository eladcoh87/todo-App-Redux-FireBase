import { Button, TextField } from '@mui/material'
import React, {useState } from 'react'
import './TodoInput.scss'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addNewToDo } from '../store/actions'



const TodoInput = () => {

const [inputText,setInputText]  = useState("")

const dispatch = useDispatch()

const handleOnChange = (event) => {



setInputText(event.target.value)


}


const HnandleraddNewtoDo = async (event) => {



  const newToDoItem = {text:inputText,id:Math.floor(Math.random() * 1000000)}
  
  const postOptions = {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newToDoItem)
  }
              

 try {

        const response =  await fetch('https://mcity-d0157-default-rtdb.firebaseio.com/todo.json',postOptions)

    console.log(response);
        if (!response.ok) {
         throw new Error('somtinhg went wrong!!!!')
       }

        const {name} = await response.json();
        console.log(name);

        newToDoItem.name = name;
        console.log(newToDoItem,'come from post api');
        dispatch(addNewToDo(newToDoItem));
        setInputText('')
       
       } catch(error) {
       console.log(error.message)
       
       }


  
  
  }

// const HnandleraddNewtoDo = async (event) => {



// const newToDoItem = {text:inputText,id:Math.floor(Math.random() * 1000000)}

// const {name} = await AddToDo(newToDoItem);

// newToDoItem.name = name;

// console.log(newToDoItem);

//  dispatch(addNewToDo(newToDoItem));


// }






  return (


    <div className='inputContainer'>

<TextField value={inputText} onChange={handleOnChange} className='textinput' id="todoadd" label="Add your new todo" variant="outlined" />



<Button onClick={HnandleraddNewtoDo} className='addBtn' variant="outlined"  startIcon={<AddIcon />}>


      </Button>

   

    </div>
  )
}

export default TodoInput