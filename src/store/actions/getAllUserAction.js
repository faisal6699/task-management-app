import {
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAILED, LOGIN_SUCCESS, LOGIN_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const getAllUser = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USER_REQUEST, payload: { } });
    fetch(`${BASE_API_URL}/user`)
        .then(res => res.json())
        .then(result =>
            dispatch({ type: GET_ALL_USER_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: GET_ALL_USER_FAILED, payload: err.message }));
};

export {getAllUser}