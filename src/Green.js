import React from 'react';
import Convert from 'color-convert';
import CopyToClipboard from 'react-copy-to-clipboard';


var Green = React.createClass ({

  getInitialState() {
  return {
      copied: false,
      hover: false
    };
  },

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

  onMouseOver: function(){
    this.setState({
      copied: false,
      hover: true
    })
  },

  onMouseLeave: function(){
    this.setState({
      hover: false
    })
  },

  onCopy: function() {
    this.setState({
      copied: true,
    });


    setTimeout(() => {this.setState({copied: true, hover: false})}, 1000)
  },

  render: function() {

    var greenHex = "#" + Convert.hsl.hex( this.getGreenH(this.props.color[0]) ,  this.getGreenS(this.props.color[1]), this.getGreenL(this.props.color[2]) )

    var styleGreen = {
      background: greenHex,
    };


    return (
      <CopyToClipboard text={ greenHex }
                onCopy={this.onCopy}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>
      <div className="swatch-container">
        <div className="swatch green" style={ styleGreen }>
        <span className={this.state.hover ? "copy-text" : "copy-text hidden"} >{this.state.copied ? "👍 Copied" : "👯 Click to copy"}</span>
        </div>
        <div className="swatch-info">
        <h4>Success</h4>
        <p className="monospace">{ greenHex }</p>
        </div>
      </div>
      </CopyToClipboard>
    );
  }
});


export default Green;
