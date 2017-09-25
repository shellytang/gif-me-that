'use strict';

import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let gifs = this.props.gifList || [];

    return (
      <ul>
        {gifs.map((item, i) =>
          <li key={item.id}><img src={item.images.fixed_height.url} alt='gif'/></li>
        )}
      </ul>
    );
  }

}

export default SearchResults;
