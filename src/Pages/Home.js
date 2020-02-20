import React, { Component, Fragment } from 'react'

import FormSearch from '../Components/FormSearch'
import HeaderApp from '../Components/HeaderApp'
import ListMovies from '../Components/ListMovies'

class Home extends Component {

  state = { movies: [], search: false }

  _setMovies = (movies) => {
    this.setState({ movies, search: true });
  }

  render() {
    return (
      <Fragment>
        <HeaderApp />
        <div className="notification">
          <div className="container-form">
            <FormSearch onMovies={ this._setMovies }/>
          </div>
        </div>
        { this.state.movies.length === 0 && !this.state.search
          ? <div className="notification"><p>Realiza una busqueda...</p></div>
          : <ListMovies movies={ this.state.movies }/> }
      </Fragment>
    );
  }
}

export default Home
