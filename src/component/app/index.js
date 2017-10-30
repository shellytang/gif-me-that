import React from 'react';
import axios from 'axios';
import SearchBar from '../search-bar';
import GifList from '../gif-list';
import octoCat from '../../img/octocat.png';

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
  
  gifSearch(amount, term) {
    let random =  Math.floor(Math.random() * (100 - 0) + 0);
    axios.get(`${API_URL}/search?q=${term}&api_key=${__API_KEY__}&offset=${random}&limit=${amount}&rating=g`)
      .then(res => {
        if(res.data.data.length === 0) {
          this.setState({
            results: null,
            searchError: 'Oops! Try another search term!',
          });
        } else {
          console.log('data', res.data.data);
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
        <a href={'https://github.com/shellytang/gif-me-that'} target={'_blank'}><img src={octoCat} alt='github logo' className='githubLogo'/></a>
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
