import {
    DELETE_MEMBER_REQUEST,
    DELETE_MEMBER_SUCCESS,
    DELETE_MEMBER_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const deleteMemberAction = (data) => async (dispatch) => {
    dispatch({ type: DELETE_MEMBER_REQUEST, payload: { data } });
    fetch(`${BASE_API_URL}/members/${data.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(result =>
            dispatch({ type: DELETE_MEMBER_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: DELETE_MEMBER_FAILED, payload: err.message }));
};

export {deleteMemberAction}