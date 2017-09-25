'use strict';

import React from 'react';
import axios from 'axios';
import SearchBar from '../search-bar';
import SearchResults from '../search-results';

const API_URL = `http://api.giphy.com/v1/gifs`;

let renderIf = (test, component) => test ? component : undefined;

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

  gifSearch(amount, term) {
    let random =  Math.floor(Math.random() * (500 - 0) + 0);

    axios.get(`${API_URL}/search?q=${term}&api_key=${__API_KEY__}&offset=${random}&limit=${amount}`)
      .then(res => {
        console.log('request success', res.data.data);
        if(res.data.data.length === 0) {
          this.setState({
            results: null,
            searchError: 'Oops! Try another search term',
          });
        } else {
          this.setState({
            results: res.data.data,
            searchError: null,
          });
        }
      });
  }

  render() {
    return (
      <main>
        <h1>gif machine</h1>
        <SearchBar handleSearch={this.gifSearch} />
        {renderIf(this.state.results,
          <SearchResults gifList={this.state.results}/>)
        }
        {renderIf(this.state.searchError,
          <p>{this.state.searchError}</p>
        )}

      </main>
    );
  }
}

export default App;
