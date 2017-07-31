import ActionType from 'actions/ActionTypes';

// eslint-disable-next-line import/prefer-default-export
export function goTo(page) {
  return {
    type: ActionType.GO_TO,
    payload: page,
  };
}
