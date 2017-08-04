/*
 * List of action types.
 * Could just be strings, but I feel better when referencing a constant that doesn't change.
 */
const ActionTypes = {
  // Data fetching
  QUERY_INIT: 'APOLLO_QUERY_INIT',
  QUERY_RESULT: 'APOLLO_QUERY_RESULT',

  // Game
  GO_TO: 'GO_TO',
};

export default ActionTypes;
