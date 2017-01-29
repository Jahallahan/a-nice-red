import React from 'react';
import './App.css';
import Header from './Header';
import Primary from './Primary';
import Green from './Green';
import Red from './Red';
import Amber from './Amber';
import LightGray from './LightGray';
import MidGray from './MidGray';
import DarkGray from './DarkGray'
import Black from './Black';
import Convert from 'color-convert';
import ColorInput from './ColorInput';
import ColorPickerOverlay from './ColorPicker';
import Footer from './Footer';

var urlHash = window.location.hash;

var App = React.createClass ({

  getInitialState: function() {
    return {
      color: "4A90E2",
      colorHsl: [212, 72, 59],
      userText: "#4A90E2",
      urlHash: urlHash
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

  componentDidUpdate(prevProps, prevState){
    if (prevState.urlHash !== this.state.urlHash){
      window.location.hash = this.state.urlHash;
    }

  },

  onColorChanged: function(newColor) {
     newColor = newColor.target.value;
     var cleanedColor = newColor.replace(/[^A-Za-z0-9]/g, '');
     this.setState({
       color: cleanedColor,
       colorHsl: Convert.hex.hsl(newColor),
       userText: newColor,
       urlHash: newColor
     });
   },

   onColorPickerChanged: function(color){
     var newColor = color.replace(/[^A-Za-z0-9]/g, '');
     this.setState({
       color: newColor,
       colorHsl: Convert.hex.hsl(newColor),
       userText: "#" + newColor,
       urlHash: "#" + newColor
     });
   },


  render: function() {


    return (
      <div className="sans-serif near-black bg-light-silver">
        <div className="mw8 center pa4-ns pa3">
          <Header color={ this.state.color }/>
          <h3 className="sans-serif-display fw4 ttu f2 white mt4 mb2 ph2">Primary Color</h3>
          <Primary color={ this.state.color }>
            <ColorInput initialColor={ this.state.color } userText={this.state.userText} onColorChanged={this.onColorChanged} >
              <ColorPickerOverlay color={ this.state.color } onColorPickerChanged={this.onColorPickerChanged} />
            </ColorInput>
          </Primary>
            <h3 className="sans-serif-display fw4 ttu f2 white mt4 mb2 ph2">Alert Colors</h3>
          <div className="cf">
            <Green color={ this.state.colorHsl } />

            <Red color={ this.state.colorHsl }  />
            <Amber color={ this.state.colorHsl }  />
          </div>
          <h3 className="sans-serif-display fw4 ttu f2 white mt4 mb2 ph2">Neutral Colors</h3>
        <div className="cf">
          <LightGray color={ this.state.colorHsl } />
          <MidGray color={ this.state.colorHsl }  />
          <DarkGray color={ this.state.colorHsl }  />
          <Black color={ this.state.colorHsl }  />
        </div>
          <Footer color={ this.state.color }/>
        </div>
      </div>

    );
  }
});



export default App;
