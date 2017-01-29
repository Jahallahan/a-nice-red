import React from 'react';

var ColorInput = React.createClass ({


  render: function() {

    return (
      <div className="w-100 br2 overflow-hidden">
        <input className="sans-serif pa3 bn bg-white f3 near-black fl w-70-l w-50-m w-100 bg-animate hover-bg-white-90 input-reset border-box" value={this.props.userText} onChange={this.props.onColorChanged} />
        {this.props.children}
      </div>
    );
  }
});


export default ColorInput;
