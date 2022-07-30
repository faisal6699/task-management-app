import {
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILED
} from "../constants/constants";

function updateTaskReducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_TASK_REQUEST:
            return { loading: true };
        case UPDATE_TASK_SUCCESS:
            return { loading: false, updated_task: action.payload };

        case UPDATE_TASK_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { updateTaskReducer };