/* global window, document */
import React from 'react';
import ReactDom from 'react-dom';

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import allReducers from 'reducers';
import Game from 'components/Game';

// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import 'main.scss';

// only the first container is used, can change to querySelectorAll() for multiple instances
const container = document.querySelector('.adventure-game');

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: container.dataset.apiUrl,
    opts: {
      credentials: 'same-origin',
    },
  }),
  reduxRootSelector: state => state.client,
});

function composedMiddleware() {
  return compose(
    applyMiddleware(client.middleware(), thunk),
    // eslint-disable-next-line no-underscore-dangle
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  );
}

const store = createStore(allReducers(client), composedMiddleware());

ReactDom.render(
  <ApolloProvider store={store} client={client}>
    <Game />
  </ApolloProvider>
  , container);

export default client;
