import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import client from 'boot/index'
import { goTo } from 'actions/gameActions';
import readAdventure from 'graphql/readAdventure';

class TextBox extends Component {
  prefetchNext(id) {
    client.query({
      query: readAdventure,
      variables: {
        id: id,
      },
    });
  }

  renderChoices() {
    const choices = this.props.page.Choices.edges;
    if (choices.length === 1 && (
      choices[0].node.Content === undefined ||
      choices[0].node.Content === null ||
      choices[0].node.Content === '')) {
      const choice = choices[0];
      return (
        <button
          key={choice.node.ID}
          onClick={() => { this.props.dispatch(goTo(choice.node.GoTo.ID)); }}
          onMouseOver={this.prefetchNext(choice.node.GoTo.ID)}
        >Continue...</button>
      );
    }

    return choices.map(choice => (
      <button
        key={choice.node.ID}
        onClick={() => { this.props.dispatch(goTo(choice.node.GoTo.ID)); }}
        onMouseOver={this.prefetchNext(choice.node.GoTo.ID)}
      >{choice.node.Content}</button>
    ));
  }

  render() {
    return (
      <div className="text-box">
        <div className="content">
          {this.props.page.Content}
        </div>
        <div className="choices">
          {this.renderChoices()}
        </div>
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
