'use strict';

import React from 'react';
import axios from 'axios';
import SearchBar from '../search-bar';
import SearchResults from '../search-results';

const API_URL = `http://api.giphy.com/v1/gifs`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      searchError: null,
    };
    this.gifSearch = this.gifSearch.bind(this);
  }

  componentDidUpdate() {
    console.log(':::::STATE::::', this.state);
  }

  gifSearch(term) {
    axios.get(`${API_URL}/search?q=${term}&api_key=${__API_KEY__}&limit=5`)
      .then(res => {
        console.log('request success', res.data.data);
        this.setState({
          results: res.data.data,
          searchError: null,
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          results: null,
          searchError: 'Unable to find a matching gif',
        });
      });
  }

  render() {
    return (
      <main>
        <h1>gif machine</h1>
        <SearchBar handleSearch={this.gifSearch} />
        <SearchResults gifList={this.state.results}/>
      </main>
    );
  }
}

export default App;
