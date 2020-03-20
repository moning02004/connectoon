import * as types from '../actions/authAction';


let initialState = {
    login: {
        status: 'INIT'
    },
    register: {
        status: ""
    },
    status: {
        isAuth: false,
        currentUser: null
    }
};

function authReducer (state=initialState, action) {
    switch(action.type) {
        case types.LOGIN:
            return {
                ...state,
                login: {
                    status: "LOGIN"
                }
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    status: "SUCCESS"
                },
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                login: {
                    status: "FAILURE"
                },
            };
        case types.REGISTER:
            return {
                ...state,
                register: {
                    status: "REGISTER"
                },
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    status: "SUCCESS"
                }
            };
        case types.REGISTER_FAILURE:
            return {
                ...state,
                register: {
                    status: "FAILURE"
                }
            };
        default:
            return state;
    }
}

export default authReducer;