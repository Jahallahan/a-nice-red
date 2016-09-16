import React from 'react';
import Convert from 'color-convert';
import Swatch from './Swatch';

var Amber = React.createClass ({

  getAmberH: function(primaryH){

    switch(true){
      case (primaryH >= 240 || primaryH < 60): //Red
        return 42;
        break;

      case (primaryH >= 60 && primaryH < 140): //Green
        return 40;
        break;
      case (primaryH >= 140 && primaryH < 240): //Cyan
        return 38;
        break;
      default:
        return primaryH;
        break;
      }
  },

  getAmberS: function(primaryS){
    switch(true){
      case (primaryS + 5 < 80 ):
        return 80;
        break;
      case (primaryS + 5 > 100 ):
          return 100;
          break;
      default:
        return primaryS + 5;
        break;
      }
  },

  getAmberL: function(primaryL){
    switch(true){
      case (primaryL + 15 < 55 ):
        return 55;
        break;
      case (primaryL + 15 > 65 ):
        return 65;
        break;
      default:
        return (primaryL + 15);
        break;
      }
  },

  render: function() {

    var amberHex = "#" + Convert.hsl.hex( this.getAmberH(this.props.color[0]) ,  this.getAmberS(this.props.color[1]), this.getAmberL(this.props.color[2]))


    return (
      <Swatch color={amberHex} text="Warning" />
    );
  }
});


export default Amber;
