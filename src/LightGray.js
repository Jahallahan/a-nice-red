import React from 'react';
import Convert from 'color-convert';
import SmallSwatch from './SmallSwatch';

var LightGray = React.createClass ({

  getLightGrayH: function(primaryH){
    switch(true){
      case (primaryH < 40 || primaryH >= 160):
        return 200;
        break;
      case (primaryH >= 40 && primaryH < 100):
        return 220;
        break;
      case (primaryH >= 100 && primaryH < 160):
        return 210;
        break;
      default:
        return 200;
        break;
      }
  },




  render: function() {

    var lightGrayHex = "#" + Convert.hsl.hex( this.getLightGrayH(this.props.color[0]) ,  5, 95 )

    return (

        <SmallSwatch color={lightGrayHex} text="Light Gray" />

    );
  }
});


export default LightGray;
