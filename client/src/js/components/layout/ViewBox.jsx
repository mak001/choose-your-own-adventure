import React, { Component } from 'react';

class ViewBox extends Component {
  render() {
    return (
      <div className="view-box">
        {this.props.page &&
        <img src={this.props.page.Image.Link} />}
      </div>
    );
  }
}

export default ViewBox;
