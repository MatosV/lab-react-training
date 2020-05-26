import React, { Component } from 'react';
import './LikeButton';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      color: 'purple',
      backgroundColors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    };
  }

  changeLikes = () => {
    const randomColorBg = this.state.backgroundColors[
      Math.floor(Math.random() * this.state.backgroundColors.length)
    ];
    this.setState({
      color: randomColorBg,
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      //<div style = {{background: this.state.color}}>
      <button
        className="btnColor"
        onClick={this.changeLikes}
        style={{ backgroundColor: this.state.color }}
      >
        <span>{this.state.likes}</span> Likes
      </button>
      //</div>
    );
  }
}

export default LikeButton;
