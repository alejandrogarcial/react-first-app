import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class MovieItem extends Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.string
  }

  render() {

    const { id, title, poster, type, year } = this.props

    return (
      <Link to={`/detail/${id}`} className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img src={ poster } alt={ title } />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{ title }</p>
                <p className="subtitle is-6">
                  <b>Tipo:</b> { type }<br />
                  <b>Año:</b> { year }
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default MovieItem
