import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from "../constants/constants";

function loginReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true };
        case LOGIN_SUCCESS:
            return { loading: false, login_success: action.payload };

        case LOGIN_FAILED:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { loginReducer };