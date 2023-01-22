import { Button } from '@mui/material';
import React, { useState } from 'react';

import './edittodo.scss';

const EditTodo = (props) => {
  const [editInput, setEditInput] = useState('');

  const onChangehandel = (event) => {
    setEditInput(event.target.value);
  };

  const handlelClick = (event) => {
    props.fetchedit(editInput);
    setEditInput('');
  };

  return (
    <div className="editContainer">
      <input
        onChange={onChangehandel}
        value={editInput}
        type="text"
        placeholder="write your new to do"
      />

      <Button
        className="editbtn"
        size="small"
        onClick={handlelClick}
        variant="contained"
      >
        submit edit
      </Button>
    </div>
  );
};

export default EditTodo;
