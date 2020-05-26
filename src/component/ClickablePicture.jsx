import React, { Component } from 'react';
import './ClickablePicture';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  changePicture = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div>
        <img onClick={this.changePicture} src={this.state.clicked ? this.props.imgClicked : this.props.img}/>
      </div>
    );
  }
}

export default ClickablePicture;
