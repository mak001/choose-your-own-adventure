// list of action types, could just be strings, but I feel better when referencing a constant that doesn't change
const ActionTypes = {
    // Data fetching
    FETCH_DATA_LOADING: "FETCH_DATA_LOADING",
    FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
    FETCH_DATA_ERROR: "FETCH_DATA_ERROR",

    // Game
    GO_TO: "GO_TO"
};

export default ActionTypes;