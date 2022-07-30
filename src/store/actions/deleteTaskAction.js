import {
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const deleteTaskAction = (data) => async (dispatch) => {
    dispatch({ type: DELETE_TASK_REQUEST, payload: { data } });
    fetch(`${BASE_API_URL}/tasks/${data.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(result =>
            dispatch({ type: DELETE_TASK_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: DELETE_TASK_FAILED, payload: err.message }));
};

export {deleteTaskAction}
