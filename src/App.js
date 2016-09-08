import React from 'react';
import logo from './logo.svg';
import './App.css';
import Primary from './Primary';
import Green from './Green';
import Red from './Red';
import Amber from './Amber';
import Convert from 'color-convert';
import ColorInput from './ColorInput';

var urlHash = window.location.hash;

var App = React.createClass ({

  getInitialState: function() {
    return {
      color: "4A90E2",
      colorHsl: [212, 72, 59],
      userText: "#4A90E2"
    };
  },

  componentWillMount(){
    if (!urlHash){
      this.setState({
        color: "4A90E2",
        colorHsl: [212, 72, 59],
        userText: "#4A90E2"
      })
    }
    else {
      this.setState({
        color: urlHash.replace(/[^A-Za-z0-9]/g, ''),
        colorHsl: Convert.hex.hsl(urlHash),
        userText: "#" + urlHash.replace(/[^A-Za-z0-9]/g, '')
      })
    }
  },

  onColorChanged: function(newColor) {
     var newColor = newColor.target.value;
     var cleanedColor = newColor.replace(/[^A-Za-z0-9]/g, '');
     this.setState({
       color: cleanedColor,
       colorHsl: Convert.hex.hsl(newColor),
       userText: newColor
     });
   },



  render: function() {


    return (
      <div className="App">
        <Primary color={ this.state.color } callbackParent={this.onChildChanged}>
          <ColorInput initialColor={ this.state.color } onColorChanged={this.onColorChanged} />
        </Primary>
        <Green color={ this.state.colorHsl }  />
        <Red color={ this.state.colorHsl }  />
        <Amber color={ this.state.colorHsl }  />
        <h1>The color is { this.state.color }</h1>
      </div>

    );
  }
});



export default App;
