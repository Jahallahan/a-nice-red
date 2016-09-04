import React from 'react';

var Primary = React.createClass ({

  render: function() {

    var testStyle = {
      background: `hsl(${ this.props.color.h }, ${ this.props.color.s }, ${ this.props.color.l })`,
    };

    return (
      <div className="swatch primary" style={ testStyle }> This is the Primary Swatch { this.props.colorHex } </div>
    );
  }
});


export default Primary;
