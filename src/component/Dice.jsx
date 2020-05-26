import React, { Component } from 'react';
import './Dice';

class Dice extends Component {
  constructor() {
    super();
    this.state = {
      displayedImg: '/img/dice-empty.png',
      diceImgs: [
        '/img/dice1.png',
        '/img/dice2.png',
        '/img/dice3.png',
        '/img/dice4.png',
        '/img/dice5.png',
        '/img/dice6.png',
      ],
    };
  }

  changeDiceImg = () => {
    const randomImg = this.state.diceImgs[
      Math.floor(Math.random() * this.state.diceImgs.length)
    ];
    this.setState({
      displayedImg: randomImg,
    });
  };

  render() {
    return (
      <img
        className="Dice-img"
        onClick={this.changeDiceImg}
        src={this.state.displayedImg}
      />
    );
  }
}

export default Dice;
