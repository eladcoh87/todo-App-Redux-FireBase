



const todoListReducer = (state = {todolist:[]}, action) => {


    

switch (action.type) {
    
    
        
        case 'GET_TO_DO':
            
       

        const todolist = []
        for (const key in action.payload) {

            if (Object.hasOwnProperty.call(action.payload, key)) {
                console.log(key);
                const element = action.payload[key];
                element.name = key;
                console.log(element);
                todolist.push(element)
            }
        }
       
            console.log(todolist);

            return {...state,todolist}


        case 'ADD_NEWֹTODO':


            console.log(action.payload,'REDCUDER NEW TODO');

        const newtodolist = [...state.todolist,action.payload];

            console.log(newtodolist);
            
            return {...state,todolist:newtodolist}
            
        case 'DELET_TO_DO':
            
        console.log(action.payload,'coeme from  delet reducer ');

               const newFilteredTOdo = state.todolist.filter((todo => todo.name !== action.payload))

              
        return {...state,todolist:newFilteredTOdo}

        case 'EDIT_TO_DO':
            
                console.log(action.payload);

                const newEdittoToList = state.todolist.map(todo => todo.name === action.payload.name ? action.payload : todo )
              
        return {...state,todolist:newEdittoToList}

        case 'CLEAR_ALL':
                
        const emptyTodoList = []

        return {todolist:emptyTodoList}

            default: 
            return state
    }
    
    }
    export default todoListReducer
    