import {
    UPDATE_MEMBER_REQUEST,
    UPDATE_MEMBER_SUCCESS,
    UPDATE_MEMBER_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const updateMemberAction = (data) => async (dispatch) => {
    dispatch({ type: UPDATE_MEMBER_REQUEST, payload: { data } });
    fetch(`${BASE_API_URL}/members/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result =>
            dispatch({ type: UPDATE_MEMBER_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: UPDATE_MEMBER_FAILED, payload: err.message }));
};

export {updateMemberAction}