import React, { Component } from 'react';

import ButtonReturn from '../Components/ButtonReturn';

class Error404 extends Component {
  render() {
    return (
      <section class="hero is-medium is-danger is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Error 404
            </h1>
            <h2 class="subtitle">
              Página no encontrada
            </h2>
            <ButtonReturn />
          </div>
        </div>
      </section>
    );
  }
}

export default Error404;
