const todoListReducer = (state = { todolist: [] }, action) => {
  switch (action.type) {
    case 'GET_TO_DO':
      const todolist = [];
      for (const key in action.payload) {
        if (Object.hasOwnProperty.call(action.payload, key)) {
          const element = action.payload[key];
          element.name = key;

          todolist.push(element);
        }
      }

      return { ...state, todolist };

    case 'ADD_NEWֹTODO':
      const newtodolist = [...state.todolist, action.payload];

      return { ...state, todolist: newtodolist };

    case 'DELET_TO_DO':
      const newFilteredTOdo = state.todolist.filter(
        (todo) => todo.name !== action.payload
      );

      return { ...state, todolist: newFilteredTOdo };

    case 'EDIT_TO_DO':
      const newEdittoToList = state.todolist.map((todo) =>
        todo.name === action.payload.name ? action.payload : todo
      );

      return { ...state, todolist: newEdittoToList };

    case 'CLEAR_ALL':
      const emptyTodoList = [];

      return { todolist: emptyTodoList };

    default:
      return state;
  }
};
export default todoListReducer;
