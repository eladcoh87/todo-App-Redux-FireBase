import './App.scss'
import  './'
import TodoContainer from './components/TodoContainer/TodoContainer';

import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getTodoListAction } from './components/store/actions';


function App() {

  const dispatch = useDispatch()


useEffect(() => {

  const getTodoList = async () => {


    try {


        const response =  await fetch('https://mcity-d0157-default-rtdb.firebaseio.com/todo.json')
        if (!response.ok) {
         throw new Error('somtinhg went wrong!!!!')
       }


        const data = await response.json()

          console.log(data,'come from app-getfunc');
        
        dispatch(getTodoListAction(data))
            
       
       } catch(error) {


       console.log(error.message)
       
       }
      
         }
       


         getTodoList()

},[])





  return (


   <div className='appContainer'>
    
    
    <TodoContainer />
    
    </div>



  )
}

export default App;
