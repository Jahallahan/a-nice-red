import React from 'react';
import { SketchPicker } from 'react-color';

var ColorInput = React.createClass ({


  render: function() {

    return (
      <div>
        <input className="color-input" value={this.props.userText} onChange={this.props.onColorChanged} />
      </div>
    );
  }
});


export default ColorInput;
