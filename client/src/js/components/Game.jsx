import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  graphql,
  compose,
} from 'react-apollo';
import { connect } from 'react-redux';

import readAdventure from 'graphql/readAdventure';
import ViewBox from 'components/layout/ViewBox';
import TextBox from 'components/layout/TextBox';

class Game extends Component {
  render() {
    let page;
    if (this.props.data.readAdventurePages !== undefined) {
      page = this.props.data.readAdventurePages.edges[0].node;
    }

    return (
      <div className="app">
        <ViewBox page={page} />
        <TextBox page={page} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    current: state.game.current,
  };
}


Game.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    readAdventurePages: PropTypes.object,
  }).isRequired,
};


export default compose(
  connect(mapStateToProps),
  graphql(readAdventure, {
    options: ({ current }) => ({
      variables: {
        id: current,
      },
    }),
  }),
)(Game);
