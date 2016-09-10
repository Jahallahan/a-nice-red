import React from 'react';
import ColorInput from './ColorInput';

var Header = React.createClass ({

  render: function() {

    var anchorStyle = {
      color: `#${this.props.color}`,
    };

    return (
      <div className="header">
      <h1>A Nice Red</h1>
      <p>Instantly generate UI colors that complement your brand. <a href="#" >More</a></p>
      </div>
    );
  }
});


export default Header;
