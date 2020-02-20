import React, { Component, Fragment } from 'react'

class HeaderApp extends Component {
  render() {
    return (
      <Fragment>
        <section className="hero is-medium has-background-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-white">
                Buscador de películas
              </h1>
              <h2 className="subtitle has-text-white">
                Ingresa un nombre para buscar
              </h2>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HeaderApp
