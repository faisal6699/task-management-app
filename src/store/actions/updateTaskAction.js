import {
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const updateTaskAction = (data) => async (dispatch) => {
    dispatch({ type: UPDATE_TASK_REQUEST, payload: { data } });
    fetch(`${BASE_API_URL}/tasks/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result =>
            dispatch({ type: UPDATE_TASK_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: UPDATE_TASK_FAILED, payload: err.message }));
};

export {updateTaskAction}