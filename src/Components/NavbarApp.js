import React, { Component, Fragment } from 'react'
import BulmaLogo from '../Images/bulma-logo.png'

import { Link } from 'react-router-dom'

class NavbarApp extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h2>Buscador de películas</h2>
            </a>

            <a href="#as" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            </div>

            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a href="#as" className="navbar-link">
                  Alex García
                </a>

                <div className="navbar-dropdown is-right">
                  <a href="#as" className="navbar-item">
                    Cuenta
                  </a>
                  <a href="#as" className="navbar-item">
                    Configuración
                  </a>
                  <hr className="navbar-divider" />
                  <a href="#as" className="navbar-item">
                    Cerrar sesión
                  </a>
                </div>
              </div>
            </div>
          </div>
          </nav>
      </Fragment>
    );
  }
}

export default NavbarApp
