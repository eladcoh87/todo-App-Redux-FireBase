import React from 'react'





export const getTodoListAction = (todos) => {



  return (

    {
        
        type: 'GET_TO_DO', 
    payload : todos



    }

    
  )


}






export const addNewToDo = (todo) => {



  return (

    {
        
        type: 'ADD_NEWֹTODO', 
    payload : todo



    }

    
  )


}



export const deletTodo = (todoName) => {



  return (

    {
        
        type: 'DELET_TO_DO', 
    payload : todoName



    }

    
  )


}



export const editTodo = (todoName) => {



  return (

    {
        
        type: 'EDIT_TO_DO', 
    payload : todoName



    }

    
  )


}

export const clearAll = () => {



  return (

    {
        
        type: 'CLEAR_ALL', 
    



    }

    
  )


}