import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ButtonReturn from '../Components/ButtonReturn';

const apikey = 'cdb635eb';

class Detail extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
      .then(res => res.json())
      .then( movie => {
        console.log(movie)
        this.setState({ movie })
      });
  }

  componentDidMount() {
    console.log(this.props)
    const { id } = this.props.match.params
    this._fetchMovie({ id })
  }

  render() {

    const { Title, Poster, Plot, Actors, Genre } = this.state.movie

    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <figure className="image">
            <img className="image" src={ Poster } alt={ Title }/>
          </figure>
        </div>
        <div className="column is-three-quarters has-text-left">
          <p className="is-size-4 has-text-weight-bold has-text-primary">{ Title }</p>
          <br />
          <p><span className="has-text-weight-bold">Actores:</span> { Actors }</p>
          <p><span className="has-text-weight-bold">Género:</span> { Genre }</p>
          <p><span className="has-text-weight-bold">Sinpsis:</span> { Plot }</p>
          <br />
          <ButtonReturn />
        </div>
      </div>
    )
  }
}

export default Detail
