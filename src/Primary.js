import React from 'react';

var Primary = React.createClass ({

  render: function() {

    var testStyle = {
      background: `hsl(${ this.props.color[0] }, ${ this.props.color[1] }%, ${ this.props.color[2] }%)`,
    };

    return (
      <div className="swatch primary" style={ testStyle }> This is the Primary Swatch #{ this.props.colorHex } </div>
    );
  }
});


export default Primary;
