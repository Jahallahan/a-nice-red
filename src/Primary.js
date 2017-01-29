import React from 'react';

var Primary = React.createClass ({

  render: function() {

    var primaryStyle = {
      background: `#${this.props.color}`,
    };

    return (
      <div className="ph2 mb3 cf">
        <div className="big-shadow cf pt7-l pb5-ns ph5-ns pt6-m  pt6 pb4 ph4 mb3" style={ primaryStyle }>

          {this.props.children}
               </div>
      </div>
    );
  }
});


export default Primary;
