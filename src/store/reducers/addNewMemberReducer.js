import {
    ADD_NEW_MEMBER_REQUEST,
    ADD_NEW_MEMBER_SUCCESS,
    ADD_NEW_MEMBER_FAILED
} from "../constants/constants";

function addNewMemberReducer(state = {}, action) {
    switch (action.type) {
        case ADD_NEW_MEMBER_REQUEST:
            return { loading: true };
        case ADD_NEW_MEMBER_SUCCESS:
            return { loading: false, new_member: action.payload };

        case ADD_NEW_MEMBER_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { addNewMemberReducer };