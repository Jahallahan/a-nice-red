import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

var Swatch = React.createClass ({

  getInitialState() {
  return {
      copied: false,
      hover: false
    };
  },


  onMouseOver: function(){
    this.setState({
      hover: true
    })
  },

  onMouseLeave: function(){
    this.setState({
      hover: false,
    });

    setTimeout(function() { this.setState({copied: false}); }.bind(this), 300);
  },

  onCopy: function() {
    this.setState({
      copied: true,
    });
  },

  render: function() {

    var style={
      background: this.props.color
    };

    return (
      <CopyToClipboard text={ this.props.color }
                onCopy={this.onCopy}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>
        <div className="swatch-container">
          <div className="swatch" style={style}>
            <span className={this.state.hover ? "copy-text" : "copy-text hidden"} >{this.state.copied ? "👍 Copied" : "👯 Click to copy"}</span>
          </div>
          <div className="swatch-info">
            <h4>{this.props.text}</h4>
            <p className="monospace">{ this.props.color }</p>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
});


export default Swatch;
