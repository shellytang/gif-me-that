'use strict';

import React from 'react';

class GifListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.gif.images.fixed_height.url}/>
      </div>
    );
  }
}

export default GifListItem;
