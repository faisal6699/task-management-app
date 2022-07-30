import {
    ADD_NEW_TASK_REQUEST,
    ADD_NEW_TASK_SUCCESS,
    ADD_NEW_TASK_FAILED
} from "../constants/constants";

function addNewTaskReducer(state = {}, action) {
    switch (action.type) {
        case ADD_NEW_TASK_REQUEST:
            return { loading: true };
        case ADD_NEW_TASK_SUCCESS:
            return { loading: false, new_task: action.payload };

        case ADD_NEW_TASK_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { addNewTaskReducer };