import React from 'react';

var Primary = React.createClass ({

  render: function() {

    var primaryStyle = {
      background: `#${this.props.color}`,
    };

    return (
      <div className="primary-container">
        <div className="primary-swatch" style={ primaryStyle }>
        </div>
        <div className="color-input-panel">
          <h2>Primary Color</h2>
          {this.props.children}
        </div>
      </div>
    );
  }
});


export default Primary;
