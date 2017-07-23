import {
    combineReducers
} from "redux";

import data from "./dataReducer";
import game from "./gameReducer";

export default combineReducers({
    data,
    game
});