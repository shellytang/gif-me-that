'use strict';

import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      amount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.amount, this.state.term);
    this.setState({
      term: '',
    });
  }

  render() {
    const numArr = [];
    for(let i = 1; i <=10; i++) {
      numArr.push(i);
    }

    const optionAmt = numArr.map((num,i) => {
      return (
        <option value={num} key={i}>{num}</option>
      );
    });

    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <div className='gifNumber'>
          <label>How many GIFs? </label>
          <select
            name='amount' value={this.state.amount}
            onChange={this.handleChange}>
            {optionAmt}
          </select>
        </div>

        <div className='gifSearch'>
          <input
            name='term'
            type='text'
            onChange={this.handleChange}
            value={this.state.term}
          />
          <button type='submit' value='Submit'>Search</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
