import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorInput from './ColorInput'
import Primary from './Primary';
import Green from './Green';
import Red from './Red';
import Amber from './Amber';
import Convert from 'color-convert';

var App = React.createClass ({

  getInitialState: function() {
    return {
      displayColorPicker: false,
      primaryColor: {
        h: "50",
        s: "0.5",
        l: "0.5",
      },
      hex: "#fff",
      color: "4A90E2",
      colorHsl: [212, 72, 59]
    };
  },

  handleChangeComplete: function(color){
    this.setState({ primaryColor: color.hsl });
    this.setState({ hex: color.hex });
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
        <ColorInput initialColor={this.state.color} callbackParent={this.onChildChanged} />
        <Primary color={ this.state.colorHsl } colorHex={ this.state.color } />
        <Green color={ this.state.colorHsl }  />
        <Red color={ this.state.colorHsl }  />
        <Amber color={ this.state.colorHsl }  />
        <h1>The color is { this.state.color }</h1>
      </div>

    );
  }
});



export default App;
