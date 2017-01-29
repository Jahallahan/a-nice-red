import React from 'react';
import Convert from 'color-convert';
import SmallSwatch from './SmallSwatch';

var Black = React.createClass ({

  getBlackH: function(primaryH){
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

    var blackHex = "#" + Convert.hsl.hex( this.getBlackH(this.props.color[0]) ,  20, 15 )

    return (

        <SmallSwatch color={blackHex} text="Black" />

    );
  }
});


export default Black;
