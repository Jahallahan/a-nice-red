import React from 'react';
import Convert from 'color-convert';
import Swatch from './Swatch';

var Red = React.createClass ({

  getRedH: function(primaryH){

    switch(true){
      case (primaryH >= 15 && primaryH < 60): //Yellow
        return 5;
        break;
      case (primaryH >= 60 && primaryH < 140): //Green
        return 10;
        break;
      case (primaryH >= 140 && primaryH < 190): //Cyan
        return 357;
        break;
      case (primaryH >= 190 && primaryH < 240): //Blue
        return 0;
        break;
      case (primaryH >= 240 && primaryH < 350): //Purple
        return 355;
        break;
      default:
        return primaryH;
        break;
      }
  },

  getRedS: function(primaryS){
    switch(true){
      case (primaryS < 75 ):
        return 75;
        break;
      case (primaryS > 85 ):
        return 85;
        break;
      default:
        return primaryS;
        break;
      }
  },

  getRedL: function(primaryL){
    switch(true){
      case (primaryL + 5 < 45 ):
        return 45;
        break;
      case (primaryL + 5 > 55 ):
        return 55;
        break;
      default:
        return primaryL + 5;
        break;
      }
  },

  render: function() {

    var redHex = "#" + Convert.hsl.hex( this.getRedH(this.props.color[0]) ,  this.getRedS(this.props.color[1]), this.getRedL(this.props.color[2]) )

    return (
        <Swatch color={redHex} text="Error" />
    );
  }
});


export default Red;
