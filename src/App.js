import './App.scss'
import  './'
import TodoContainer from './components/TodoContainer/TodoContainer';

import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { getTodoListAction } from './components/store/actions';


function App() {

  const [isLoading,setIsLoading] = useState(true)

  const dispatch = useDispatch();


useEffect(() => {


  
  const getTodoList = async () => {


    try {


        const response =  await fetch('https://mcity-d0157-default-rtdb.firebaseio.com/todo.json')
        if (!response.ok) {
         throw new Error('somtinhg went wrong!!')
       }


        const data = await response.json()

          console.log(data,'come from app-getfunc');
        
        dispatch(getTodoListAction(data))
        setIsLoading(false)
       
       } catch(error) {


       console.log(error.message)
       
       }
      



         }
       


         getTodoList()


},[])





  return (


   <div className='appContainer'>
    
    <TodoContainer loading = {isLoading} />
    
    </div>



  )
}

export default App;
