import ActionType from 'actions/ActionTypes';

const defaultState = {
  current: 1,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionType.GO_TO:
      return {
        ...state,
        current: action.payload,
      };

    default:
      return state;
  }
}
