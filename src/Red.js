import React from 'react';
import Convert from 'color-convert';

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

    var redHex = Convert.hsl.hex( this.getRedH(this.props.color.h) ,  this.getRedS(parseInt(this.props.color.s)), this.getRedL(parseInt(this.props.color.l)))

    var styleRed = {
      background: "#" + redHex,
    };

    return (
      <div className="swatch red" style={ styleRed }> This is the Red Swatch #{ redHex } </div>
    );
  }
});


export default Red;
