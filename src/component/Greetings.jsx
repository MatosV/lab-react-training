import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  const lang = props.lang;

  switch (lang) {
    case 'de':
      return 'Hallo';
      break;
    case 'en':
      return 'Hello';
      break;
    case 'es':
      return 'Hola';
      break;
    case 'fr':
      return 'Bonjour';
      break;
    default:
      return 'Olá';
  }
};

export default Greetings;
