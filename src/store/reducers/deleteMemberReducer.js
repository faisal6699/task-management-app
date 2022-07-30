import {
    DELETE_MEMBER_REQUEST,
    DELETE_MEMBER_SUCCESS,
    DELETE_MEMBER_FAILED
} from "../constants/constants";

function deleteMemberReducer(state = {}, action) {
    switch (action.type) {
        case DELETE_MEMBER_REQUEST:
            return { loading: true };
        case DELETE_MEMBER_SUCCESS:
            return { loading: false, deleted_member: action.payload };

        case DELETE_MEMBER_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { deleteMemberReducer };