'use strict';

import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search
          <input
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