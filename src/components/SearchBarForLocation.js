import React, { Component } from 'react';

class SearchBarForLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  handleChange = event => {
    this.setState({ location: event.target.value }, () => this.props.onChange(this.state.location));
  }

  render() {
    return (
      <span style={{ marginLeft: '30px', display: 'inline-block' }}>
        <label htmlFor="search-where">Where</label>
        <input
          id="search-where"
          type="text"
          placeholder="Enter city"
          style={{ marginLeft: '10px' }}
          value={this.state.location}
          onChange={this.handleChange}
        />
      </span>
    )
  }
}

export default SearchBarForLocation;
