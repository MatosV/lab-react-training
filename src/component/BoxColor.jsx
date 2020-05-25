import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  const r = props.r;
  const g = props.g;
  const b = props.b;

  return (
    <span className="colorBox" >rgb({r}, {g}, {b})</span>
  );
};

export default BoxColor;
