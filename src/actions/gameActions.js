import ActionType from "../actions/ActionTypes";

export function goTo(page) {
    return {
        type: ActionType.GO_TO,
        payload: page
    };
}