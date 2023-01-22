import React, { useState } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import './TodoContainer.scss';
import spinner from './spinner.gif';

const TodoContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="TodoContainer">
      <div>
        <h2>Todo App</h2>
      </div>
      <TodoInput />

      {props.loading && (
        <div className="spinerContainer">
          <img src={spinner} alt="" />
        </div>
      )}

      <TodoList loading={props.loading} />
    </div>
  );
};

export default TodoContainer;
