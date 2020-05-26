import React, { Component } from 'react';
import './DriverCard.css';

//import Rating from '../../components/Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <div className="drive middle">
      <img src={img} alt="pic" />
      <h2>{name}</h2>
      <br />
      <p>
        {car.model} - <span>{car.licensePlate}</span>
      </p>
    </div>
  );
};

export default DriverCard;
