import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

var SmallSwatch = React.createClass ({

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
        <div className="fl w-25-l w-50-m w-100 ph2 mb3">
          <div className="bg-white big-shadow">
            <div className="h5 tc hide-child pointer" style={style}>

            <div className="h5 dtc v-mid">
              <div className="child white dib mh4" >{this.state.copied ? "👍 Copied" : "👯 Click to copy"}</div>
            </div>

            </div>
            <div className="pv3 ph4">
              <h4 className="sans-serif-display ttu f2 fw4 mb0 mt3">{this.props.text}</h4>
              <p className="f4 fw4 mb3 mt1 silver">{ this.props.color }</p>
            </div>
            </div>
        </div>
      </CopyToClipboard>
    );
  }
});


export default SmallSwatch;
