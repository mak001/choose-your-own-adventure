import {
    createStore,
    applyMiddleware
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {composeWithDevTools} from 'remote-redux-devtools';

import reducer from "./reducers";

const middleware = applyMiddleware(promise({
    // new suffixes
    promiseTypeSuffixes: ["LOADING", "SUCCESS", "ERROR"]
}), thunk, logger);

// const store = createStore(reducer, middleware);
const store = createStore(reducer, composeWithDevTools(middleware));

export default store;