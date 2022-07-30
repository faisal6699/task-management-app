import {
    UPDATE_MEMBER_REQUEST,
    UPDATE_MEMBER_SUCCESS,
    UPDATE_MEMBER_FAILED
} from "../constants/constants";

function updateMemberReducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_MEMBER_REQUEST:
            return { loading: true };
        case UPDATE_MEMBER_SUCCESS:
            return { loading: false, updated_member: action.payload };

        case UPDATE_MEMBER_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { updateMemberReducer };