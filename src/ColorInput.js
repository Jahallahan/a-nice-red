import React from 'react';
import { SketchPicker } from 'react-color';

var ColorInput = React.createClass ({

  getInitialState: function() {
     return {
       color: "4A90E2",
       displayColorPicker: false
     };
   },

 onTextChanged: function(newColor) {
    var newColor = newColor.target.value.replace(/[^A-Za-z0-9]/g, '');
    this.setState({ color: newColor });
    this.props.callbackParent(newColor); // hey parent, I've changed!
  },

  handleClick: function(){
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  },

  handleChange: function(color){
    var newColor = color.hex.replace(/[^A-Za-z0-9]/g, '');
    this.setState({ color: newColor });
    this.props.callbackParent(newColor); // hey parent, I've changed!
  },

  handleClose: function() {
    this.setState({ displayColorPicker: false })
  },


  render: function() {

    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    return (
      <div>
        <input className="color-input" value={this.state.color} onChange={this.onTextChanged} />
        <button onClick={this.handleClick}>Choose Color</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }
      </div>
    );
  }
});


export default ColorInput;
