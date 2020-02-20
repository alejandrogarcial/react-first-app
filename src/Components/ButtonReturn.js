import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ButtonReturn extends Component {
  render() {
    return (
      <Link to="/">
        <button class="button is-rounded">Volver al inicio</button>
      </Link>
    );
  }
}

export default ButtonReturn;
