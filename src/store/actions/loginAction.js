import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const loginAction = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST, payload: { data } });
    fetch(`${BASE_API_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result =>
            dispatch({ type: LOGIN_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: LOGIN_FAILED, payload: err.message }));
};

export {loginAction}