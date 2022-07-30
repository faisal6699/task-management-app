import {
    ADD_NEW_MEMBER_REQUEST,
    ADD_NEW_MEMBER_SUCCESS,
    ADD_NEW_MEMBER_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const addNewMemberAction = (data) => async (dispatch) => {
    dispatch({ type: ADD_NEW_MEMBER_REQUEST, payload: { data } });
    fetch(`${BASE_API_URL}/members`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result =>
            dispatch({ type: ADD_NEW_MEMBER_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: ADD_NEW_MEMBER_FAILED, payload: err.message }));
};

export {addNewMemberAction}