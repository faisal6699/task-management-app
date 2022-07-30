import {
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILED
} from "../constants/constants";

function deleteTaskReducer(state = {}, action) {
    switch (action.type) {
        case DELETE_TASK_REQUEST:
            return { loading: true };
        case DELETE_TASK_SUCCESS:
            return { loading: false, deleted_task: action.payload };

        case DELETE_TASK_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { deleteTaskReducer };