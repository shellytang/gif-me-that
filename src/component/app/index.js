'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const API_URL = `http://api.giphy.com/v1/gifs/search?q=cats&api_key=${__API_KEY__}&limit=5`;


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  // gifSearch(term) {
  //   axios.get(`${API_URL}`)
  //     .then(res => {
  //       console.log('request success', res);
  //
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }
  componentDidMount() {
    axios.get(`${API_URL}`)
      .then(res => {
        console.log('request success', res.data.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  // <SearchBar handleSearch={this.gifSearch}/>

  render() {
    return (
      <main>
        <h1>gif machine</h1>

      </main>
    );
  }
}

export default App;
