import React from 'react';
import Convert from 'color-convert';
import SmallSwatch from './SmallSwatch';

var DarkGray = React.createClass ({

  getDarkGrayH: function(primaryH){
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

    var darkGrayHex = "#" + Convert.hsl.hex( this.getDarkGrayH(this.props.color[0]) ,  15, 30 )

    return (

        <SmallSwatch color={darkGrayHex} text="Dark Gray" />

    );
  }
});


export default DarkGray;
