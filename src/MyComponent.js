// import Result from './Result.js'
import React, { Component } from 'react';


var MyComponent = React.createClass({
  getInitialState: function () {
    return { input: '' };
  },

  handleChange: function(e) {
    this.setState({ input: e.target.value });
  },

  handleClick: function() {
    console.log(this.state.input);
  },

  render: function() {
    return (
      <div>
        <input type="text" onChange={ this.handleChange } />
        <input
          type="button"
          value="Alert the text input"
          onClick={this.handleClick}
        />
      </div>
    );
  }
});

export default MyComponent;

