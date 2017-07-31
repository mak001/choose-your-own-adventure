import {
  combineReducers,
} from 'redux';

import dataReducer from 'reducers/gameReducer';

export default function reducers(client) {
  return combineReducers({
    data: dataReducer,
    client: client.reducer(),
  });
}
