import React, { Component, Fragment } from 'react'

import MovieItem from './MovieItem'

class ListMovies extends Component {

  _renderMovies = () => {
    if (this.props.movies.length > 0) {

      let child = this.props.movies.map( movie => {
        return <MovieItem
                  key={ movie.imdbID }
                  id={ movie.imdbID }
                  poster={ movie.Poster }
                  title={ movie.Title }
                  type={ movie.Type }
                  year = {movie.Year }
                />
      })

      return (
        <div className="notification">
          <div className="columns is-multiline">
            { child }
          </div>
        </div>
      )
    } else {
      return (
        <article className="message is-danger">
          <div className="message-body">
            No se encontró resultados :'(
          </div>
        </article>
      );
    }
  }

  render() {
    return (
      <Fragment>
        { this._renderMovies() }
      </Fragment>
    );
  }
}

export default ListMovies
