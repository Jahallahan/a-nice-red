import React from 'react';
import ColorInput from './ColorInput';

var Primary = React.createClass ({

  getInitialState: function() {
    return {
      color: "4A90E2",
    };
  },

  onChildChanged: function(newColor) {
        this.setState({
          color: newColor,
         });
         this.props.callbackParent(newColor); // hey parent, I've changed!
    },


  render: function() {

    var testStyle = {
      background: `#${this.state.color}`,
    };

    return (
      <div className="swatch primary" style={ testStyle } onChange={this.onChange}>
      <ColorInput initialColor={this.state.color} callbackParent={this.onChildChanged} />
      </div>
    );
  }
});


export default Primary;
