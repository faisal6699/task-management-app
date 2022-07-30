import {
    GET_ALL_MEMBER_REQUEST,
    GET_ALL_MEMBER_SUCCESS,
    GET_ALL_MEMBER_FAILED
} from "../constants/constants";

function getAllMemberReducer(state = {}, action) {
    switch (action.type) {
        case GET_ALL_MEMBER_REQUEST:
            return { loading: true };
        case GET_ALL_MEMBER_SUCCESS:
            return { loading: false, members: action.payload };

        case GET_ALL_MEMBER_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { getAllMemberReducer };