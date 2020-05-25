import React from 'react';
import './Random.css';

const Random = (props) => {
    const min = props.min; 
    const max = props.max;
    const total = Math.floor(Math.random() * (max - min + 1) + min);
    return (
      <span>Random value between {min} and {max} => {total}</span>
    );
  }

export default Random;