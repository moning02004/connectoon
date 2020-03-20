import { connect } from "react-redux"
import LoginView from "../components/LoginView"
import { loginRequest } from "../actions/authAction";


const mapStateToProps = (state) => ({
    status: state.auth.login.status
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password) => {
        return dispatch(loginRequest(username, password));
    }
})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default Login;