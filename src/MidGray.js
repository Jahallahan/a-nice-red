import React from 'react';
import Convert from 'color-convert';
import SmallSwatch from './SmallSwatch';

var MidGray = React.createClass ({

  getMidGrayH: function(primaryH){
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

    var midGrayHex = "#" + Convert.hsl.hex( this.getMidGrayH(this.props.color[0]) ,  7, 80 )

    return (

        <SmallSwatch color={midGrayHex} text="Mid Gray" />

    );
  }
});


export default MidGray;
