import React from 'react';
import GifListItem from '../gif-list-item';

class GifList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const gifList = this.props.gifList || [];
    const gifs = gifList.map(gif => {
      return (
        <GifListItem
          key={gif.id}
          gif={gif}
        />
      );
    });

    return (
      <div className='gifList'>{gifs}</div>
    );
  }

}

export default GifList;
