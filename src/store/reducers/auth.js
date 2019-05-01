import * as actionTypes from "../actions/actionTypes";

const initialState = {
    email: '',
    errMessage: ''
};

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                email: action.email
            };

        case actionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                errMessage: action.errMessage
            };

        case actionTypes.AUTH_LOGOUT:
            return {
                email: '',
                errMessage: ''
            };

        default:
            return state;
    }
};