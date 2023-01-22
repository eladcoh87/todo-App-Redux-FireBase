import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './TodoInput.scss';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addNewToDo } from '../store/actions';

const TodoInput = () => {
  const [inputText, setInputText] = useState('');
  const [errorInput, setErrorInput] = useState({ isError: false, message: '' });

  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  };

  const handleNewToDo = async (event) => {
    if (!inputText) {
      setErrorInput({ isError: true, message: 'Please insert Todo' });
      return;
    }

    const newToDoItem = {
      text: inputText,
      id: Math.floor(Math.random() * 1000000),
    };

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToDoItem),
    };

    try {
      const response = await fetch(
        'https://mcity-d0157-default-rtdb.firebaseio.com/todo.json',
        postOptions
      );

      if (!response.ok) {
        throw new Error('somtinhg went wrong!!!!');
      }

      const { name } = await response.json();

      newToDoItem.name = name;
      dispatch(addNewToDo(newToDoItem));
      setInputText('');
      setErrorInput({ isError: false, message: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="inputContainer">
      <TextField
        value={inputText}
        onChange={handleOnChange}
        className="textinput"
        id="todoadd"
        label="Add your new todo"
        variant="outlined"
        error={errorInput.isError}
        helperText={errorInput.message}
      />

      <Button
        onClick={handleNewToDo}
        className="addBtn"
        variant="outlined"
        startIcon={<AddIcon />}
      ></Button>
    </div>
  );
};

export default TodoInput;
