import React from 'react';
import finishtodo from './todo.png';
import './NoToDo.scss';
const NoToDo = () => {
  return (
    <div className="notodoContainer">
      <h2>YOU COMPLETE ALL YOUR TASK FOR TODAY</h2>

      <img src={finishtodo} alt="" />
    </div>
  );
};

export default NoToDo;
