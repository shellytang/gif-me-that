'use strict';

import React from 'react';

class GifListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a href={this.props.gif.url} target='_blank'><img src={this.props.gif.images.fixed_height.url} alt='gif'className='gifListItem'/></a>
      </div>
    );
  }
}

export default GifListItem;
