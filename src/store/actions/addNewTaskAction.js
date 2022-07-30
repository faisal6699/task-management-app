import {
    ADD_NEW_TASK_REQUEST,
    ADD_NEW_TASK_SUCCESS,
    ADD_NEW_TASK_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const addNewTaskAction = (data) => async (dispatch) => {
    dispatch({ type: ADD_NEW_TASK_REQUEST, payload: { data } });
    fetch(`${BASE_API_URL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result =>
            dispatch({ type: ADD_NEW_TASK_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: ADD_NEW_TASK_FAILED, payload: err.message }));
};

export {addNewTaskAction}