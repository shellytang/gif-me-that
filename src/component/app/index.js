import React from 'react';
import axios from 'axios';
import SearchBar from '../search-bar';
import GifList from '../gif-list';

const API_URL = 'https://api.giphy.com/v1/gifs';

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
    let random =  Math.floor(Math.random() * (100 - 0) + 0);

    axios.get(`${API_URL}/search?q=${term}&api_key=${__API_KEY__}&offset=${random}&limit=${amount}`)
      .then(res => {
        // console.log('request success', res.data.data);
        if(res.data.data.length === 0) {
          this.setState({
            results: null,
            searchError: 'Oops! Try another search term!',
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
        <h1><span>GIF ME THAT!</span></h1>
        <SearchBar handleSearch={this.gifSearch} />
        {renderIf(this.state.results,
          <GifList gifList={this.state.results}/>)
        }
        {renderIf(this.state.searchError,
          <p><span>{this.state.searchError}</span></p>
        )}
      </main>
    );
  }
}

export default App;
