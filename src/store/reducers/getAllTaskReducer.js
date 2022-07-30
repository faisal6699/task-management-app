import {
    GET_ALL_TASK_REQUEST,
    GET_ALL_TASK_SUCCESS,
    GET_ALL_TASK_FAILED
} from "../constants/constants";

function getAllTaskReducer(state = {}, action) {
    switch (action.type) {
        case GET_ALL_TASK_REQUEST:
            return { loading: true };
        case GET_ALL_TASK_SUCCESS:
            return { loading: false, tasks: action.payload };

        case GET_ALL_TASK_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { getAllTaskReducer };