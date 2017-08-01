import {
  combineReducers,
} from 'redux';

import gameReducer from 'reducers/gameReducer';

export default function reducers(client) {
  return combineReducers({
    game: gameReducer,
    client: client.reducer(),
  });
}
