import React from 'react';
import './CreditCard.css';

const CreditCard = (
  {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = this.props
) => {
  return (
    <div className="card">
      <p>
        <strong>Type</strong>: {type}
      </p>
    </div>
  );
};

export default CreditCard;
