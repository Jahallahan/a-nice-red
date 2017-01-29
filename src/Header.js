import React from 'react';

var Header = React.createClass ({

  render: function() {

    var style={
      color: `#${this.props.color}`
    };

    return (
      <div className="pv3 ph2">
      <h1 className="f-headline-l f1 white ttu fw4 mb0 mt0 sans-serif-display">A <span style={style}>Nice</span> Red</h1>
      <p className="near-black f3-l f4 mt0 mb3">Instantly generate UI colors that complement your brand. <a href="https://medium.com/@Jahallahan/a-nice-red-instantly-generate-ui-colours-that-complement-your-brand-b06a566b4159#.7dzpbopvt" target="_blank" className="link" style={style}>More</a></p>
      </div>
    );
  }
});


export default Header;
