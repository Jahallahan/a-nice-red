import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SketchPicker } from 'react-color';
import Primary from './Primary';
import Green from './Green';
import Red from './Red';
import Amber from './Amber';

var App = React.createClass ({

  getInitialState: function() {
    return {
      displayColorPicker: false,
      primaryColor: {
        h: "50",
        s: "0.5",
        l: "0.5",
      },
      hex: "#fff"
    };
  },
  handleChangeComplete: function(color){
    this.setState({ primaryColor: color.hsl });
    this.setState({ hex: color.hex });
  },

  render: function() {


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SketchPicker color={ this.state.primaryColor } onChange={ this.handleChangeComplete } />
        <Primary color={ this.state.primaryColor } colorHex={ this.state.hex } />
        <Green color={ this.state.primaryColor }  />
        <Red color={ this.state.primaryColor }  />
        <Amber color={ this.state.primaryColor }  />
        <h1>The color is { this.state.hex }</h1>
      </div>

    );
  }
});



export default App;
