import React from 'react';
import Convert from 'color-convert';
import Swatch from './Swatch';

var trueBlueHPosition = 240;

var Blue = React.createClass ({

    getBlueH: function(primaryH){

        /*

            Deduced using the Red.js:

            Logic: colour wheel is 361 degrees, arguably 360

            Split into 6 colours, red being 0, but 30 degrees
            either side

            In the wheel the order is
            Red, Yellow, Green Cyan, Blue, Purple

            Find what colour primary hue is in the wheel modify
            hue based on segment.

            For example, if our primary color was BLUE

            Purple segment modifies hue by +5
            Red ... +10

            But for those behind/opposite
            Cyan segment modifies hue by -5
            Green ... 0
            Yellow ... -3

            This is for BLUE so our base HUE position is
            between 210 and 270, so 240.

         */

        switch(true){
            case (primaryH >= 330 || primaryH < 30): //red
                return trueBlueHPosition + 10;
                break;
            case (primaryH >= 30 && primaryH < 90): //Yellow
                return trueBlueHPosition - 3;
                break;
            case (primaryH >= 90 && primaryH < 150): //Green
                return trueBlueHPosition + 0;
                break;
            case (primaryH >= 150 && primaryH < 210): //Cyan
                return trueBlueHPosition - 5;
                break;
            case (primaryH >= 270 && primaryH < 330): //Purple
                return trueBlueHPosition + 5;
                break;
            default:
                return primaryH;
                break;
        }
    },

    getBlueS: function(primaryS){
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

    getBlueL: function(primaryL){
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

        var blueHex = "#" + Convert.hsl.hex( this.getBlueH(this.props.color[0]) ,  this.getBlueS(this.props.color[1]), this.getBlueL(this.props.color[2]))


        return (
            <Swatch color={blueHex} text="Info" />
        );
    }
});


export default Blue;
