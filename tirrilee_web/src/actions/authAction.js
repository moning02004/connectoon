import { SERVER_URL } from '../experiments/experiments'

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"

export const login = () => ({
    type: LOGIN
});
export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});
export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const register = () => ({
    type: REGISTER
});
export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
});
export const registerFailure = () => ({
    type: REGISTER_FAILURE
});

let axios = require('axios');
export const registerRequest = (username, password, userType, name, email) => {
    return (dispatch) => {
        dispatch(register());
        return axios.post(SERVER_URL + "/user/register/", {
            username: username,
            password: password,
            name: name,
            email: email,
            user_type: userType
        }).then( response => {
            dispatch(registerSuccess());
        }).catch( error => {
            dispatch(registerFailure());
        });
    }
}
export const loginRequest = (username, password) => {
    return (dispatch) => {
        dispatch(login());
        return axios.post(SERVER_URL + "/user/login/", {
            username: username,
            password: password,
        }).then( response => {
            dispatch(loginSuccess());
        }).catch( error => {
            dispatch(loginFailure());
        });
    }
}