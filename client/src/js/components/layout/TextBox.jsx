import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { goTo } from 'actions/gameActions';

class TextBox extends Component {
  renderChoices() {
    console.log(this.props.page.Choices.edges);
    return this.props.page.Choices.edges.map(choice => (
      <li
        key={choice.node.ID}
        onClick={() => { this.props.dispatch(goTo(choice.node.GoTo.ID)); }}
      >{choice.node.Content}</li>
    ));
  }

  render() {
    return (
      <div className="text-box">
        <div className="content">
          {this.props.page.Content}
        </div>
        <ul className="choices">
          {this.renderChoices()}
        </ul>
      </div>
    );
  }
}

TextBox.defaultProps = {
  page: {
    Content: '',
    Choices: {
      edges: [],
    },
  },
};

TextBox.propTypes = {
  page: PropTypes.shape({
    Content: PropTypes.string,
    Choices: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  dispatch: PropTypes.func.isRequired,
};

export default connect()(TextBox);
