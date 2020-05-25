import React from 'react';
import './IdCard.css';

const IdCard = (
  { lastName, firstName, gender, height, birth, picture } = this.props
) => {
  return (
    <div className="IdCard">
      <div className="person-info">
        <p>
          <strong>First Name</strong>: {firstName}
        </p>
        <p>
          <strong>Last Name</strong>: {lastName}
        </p>
        <p>
          <strong>Gender</strong>: {gender}
        </p>
        <p>
          <strong>Height</strong>: {height}
        </p>
        <p>
          <strong>Birth</strong>: {birth.toISOString().substring(0, 10)}
        </p>
      </div>
      <div className="picture">
        <img src={picture} alt="Photo" />
      </div>
    </div>
  );
};

export default IdCard;
