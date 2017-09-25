'use strict';

import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      amount: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.amount, this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          <input
            type='number'
            name='amount'
            min='1'
            max='10'
            onChange={this.handleChange}
            value={this.state.amount}
          />
        </label>

        <label>
          Search
          <input
            name='term'
            type='text'
            onChange={this.handleChange}
            value={this.state.term}
          />
        </label>
        <button type='submit' value='Submit'>generate</button>
      </form>
    );
  }
}

export default SearchBar;
