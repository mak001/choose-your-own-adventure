import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { goTo } from 'actions/gameActions';

class TextBox extends Component {
  renderChoices() {
    const choices = this.props.page.Choices.edges;
    console.log(choices);
    if (choices.length === 1 && (
      choices[0].node.Content === undefined ||
        choices[0].node.Content === null ||
        choices[0].node.Content === '')) {

      const choice = choices[0];
      return (
        <li
          key={choice.node.ID}
          onClick={() => { this.props.dispatch(goTo(choice.node.GoTo.ID)); }}
        >Continue...</li>
      );
    }

    return choices.map(choice => (
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
