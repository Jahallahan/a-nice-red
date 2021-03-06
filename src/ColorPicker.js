import React from 'react';
import ColorPicker from 'react-color-picker';

import 'react-color-picker/index.css';

import './ColorPicker.css';

var ColorPickerOverlay = React.createClass ({

  getInitialState: function() {
     return {
       displayColorPicker: false
     };
   },

  componentWillMount: function(){
    this.setState({
      color: this.props.initialColor,
      userText: "#" + this.props.initialColor
    })
  },


  handleClick: function(){
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
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
      <div className="picker-button-container fl w-30-l w-50-m w-100">
        <button className="bn pointer f3 bg-black-20 white-50 sans-serif pa3 bg-animate hover-bg-black-30 input-reset w-100" onClick={this.handleClick}>Color Picker</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <ColorPicker value={ this.props.color } onDrag={ this.props.onColorPickerChanged } hueWidth={10} />
        </div> : null }
      </div>
    );
  }
});


export default ColorPickerOverlay;
