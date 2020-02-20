import React, { Component } from 'react';

const apikey = 'cdb635eb';

class FormSearch extends Component {

  state = { filter: '', isLoad: '' };

  _handleKeyUp = (evt) => {
    this.setState({ filter: evt.target.value });
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ isLoad: 'is-loading' });
    fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${this.state.filter}`)
      .then(res => res.json())
      .then( result => {
        console.log(result)
        this.setState({ isLoad: '' });
        const { Search = [] } = result
        this.props.onMovies(Search);
      });
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              onKeyUp={ this._handleKeyUp }
              className="input is-rounded"
              type="text"
              placeholder="Ingresa una película"
              autoFocus
              />
          </div>
          <div className="control">
            <button className={`button is-info is-outlined is-rounded ${this.state.isLoad}`}>
              Buscar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormSearch
