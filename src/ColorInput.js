import React from 'react';
import { SketchPicker } from 'react-color';

var ColorInput = React.createClass ({


  render: function() {

    return (
      <div className ="input-container">
        <input className="color-input monospace" value={this.props.userText} onChange={this.props.onColorChanged} />
        {this.props.children}
      </div>
    );
  }
});


export default ColorInput;
