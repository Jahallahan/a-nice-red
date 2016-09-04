import React from 'react';
import Convert from 'color-convert';

var Green = React.createClass ({

  getGreenH: function(primaryH){

    switch(true){
      case (primaryH < 25 || primaryH >= 335):
        return 120;
        break;
      case (primaryH >= 25 && primaryH < 75):
        return 80;
        break;
      case (primaryH >= 150 && primaryH < 210):
        return 90;
        break;
      case (primaryH >= 210 && primaryH < 285):
        return 100;
        break;
      case (primaryH >= 285 && primaryH < 335):
        return 130;
        break;
      default:
        return primaryH;
        break;
      }
  },

  getGreenS: function(primaryS){
    switch(true){
      case (primaryS - 5 < 55 ):
        return 55;
        break;
      case (primaryS - 5 > 70 ):
        return 70;
        break;
      default:
        return primaryS - 5;
        break;
      }
  },

  getGreenL: function(primaryL){
    switch(true){
      case (primaryL + 5 < 45 ):
        return 45;
        break;
      case (primaryL + 5 > 60 ):
        return 60;
        break;
      default:
        return primaryL + 5;
        break;
      }
  },

  render: function() {

    var greenHex = Convert.hsl.hex( this.getGreenH(this.props.color.h) ,  this.getGreenS(parseInt(this.props.color.s)), this.getGreenL(parseInt(this.props.color.l)))

    var styleGreen = {
      background: "#" + greenHex,
    };

    return (
      <div className="swatch green" style={ styleGreen }> This is the Green Swatch #{ greenHex } </div>
    );
  }
});


export default Green;
