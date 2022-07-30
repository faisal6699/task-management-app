import {
    GET_ALL_TASK_REQUEST,
    GET_ALL_TASK_SUCCESS,
    GET_ALL_TASK_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const getAllTaskAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_TASK_REQUEST, payload: { } });
    fetch(`${BASE_API_URL}/tasks`)
        .then(res => res.json())
        .then(result =>
            dispatch({ type: GET_ALL_TASK_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: GET_ALL_TASK_FAILED, payload: err.message }));
};

export {getAllTaskAction}