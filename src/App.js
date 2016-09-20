import React from 'react';
import './App.css';
import Header from './Header';
import Primary from './Primary';
import Green from './Green';
import Red from './Red';
import Amber from './Amber';
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
      <div className="App">
        <Header />
        <Primary color={ this.state.color }>
          <ColorInput initialColor={ this.state.color } userText={this.state.userText} onColorChanged={this.onColorChanged} >
            <ColorPickerOverlay color={ this.state.color } onColorPickerChanged={this.onColorPickerChanged} />
          </ColorInput>
        </Primary>
        <div className="secondary-container">
          <Green color={ this.state.colorHsl }>
          </Green>
          <Red color={ this.state.colorHsl }  />
          <Amber color={ this.state.colorHsl }  />
        </div>
        <Footer />
      </div>

    );
  }
});



export default App;
