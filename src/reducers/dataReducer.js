import ActionType from "../actions/ActionTypes";

const defaultState = {
    pages: {},
    fetching: false,
    fetched: false,
    error: null
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ActionType.FETCH_DATA_LOADING:
            return {
                ...state,
                fetching: true
            };

        case ActionType.FETCH_DATA_ERROR:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

        case ActionType.FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                pages: action.payload.data
            };

        default:
            return state;
    }
}