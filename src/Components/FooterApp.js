import React, { Component } from 'react';

class FooterApp extends Component {
  render() {
    return (
      <footer className="footer is-fixed-bottom has-background-black-ter has-text-light">
        <div className="content has-text-centered">
          <p>
            <strong className="has-text-light">Buscador de peliculas</strong> <br />
            Desarrollado por <a href="http://coding34.com.mx/team/alex.html" target="_target" className="has-text-primary">Alex García</a> | Web developer.
          </p>
        </div>
      </footer>
    );
  }
}

export default FooterApp
