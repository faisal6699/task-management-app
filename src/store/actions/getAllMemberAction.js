import {
    GET_ALL_MEMBER_REQUEST,
    GET_ALL_MEMBER_SUCCESS,
    GET_ALL_MEMBER_FAILED

} from "../constants/constants";
import {BASE_API_URL} from "../../helpers/urls";

const getAllMemberAction = () => async (dispatch) => {
    dispatch({ type: GET_ALL_MEMBER_REQUEST, payload: { } });
    fetch(`${BASE_API_URL}/members`)
        .then(res => res.json())
        .then(result =>
            dispatch({ type: GET_ALL_MEMBER_SUCCESS, payload: { result } })
        )
        .catch(err => dispatch({ type: GET_ALL_MEMBER_FAILED, payload: err.message }));
};

export {getAllMemberAction}