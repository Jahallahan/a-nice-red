import React from 'react';
import logo from './logo.svg';
import './App.css';
import Primary from './Primary';
import Green from './Green';
import Red from './Red';
import Amber from './Amber';
import Convert from 'color-convert';

var App = React.createClass ({

  getInitialState: function() {
    return {
      color: "4A90E2",
      colorHsl: [212, 72, 59]
    };
  },



  onChildChanged: function(newColor) {
        this.setState({
          color: newColor,
          colorHsl: Convert.hex.hsl(newColor)
         });
    },

  render: function() {


    return (
      <div className="App">
        <Primary color={ this.state.color } initialColor={this.state.color} callbackParent={this.onChildChanged} />
        <Green color={ this.state.colorHsl }  />
        <Red color={ this.state.colorHsl }  />
        <Amber color={ this.state.colorHsl }  />
        <h1>The color is { this.state.color }</h1>
      </div>

    );
  }
});



export default App;
