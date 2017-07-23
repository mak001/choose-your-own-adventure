import axios from "axios";

export function fetchData() {
    return function (dispatch) {
        dispatch({
            type: "FETCH_DATA",
            payload: axios.get("/data/data.json")
        });
    };
}