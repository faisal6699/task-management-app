import {
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAILED
} from "../constants/constants";

function getAllUSerReducer(state = {}, action) {
    switch (action.type) {
        case GET_ALL_USER_REQUEST:
            return { loading: true };
        case GET_ALL_USER_SUCCESS:
            return { loading: false, users: true };

        case GET_ALL_USER_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { getAllUSerReducer };