import { connect } from "react-redux"
import RegisterView from "../components/RegisterView"
import { registerRequest } from "../actions/authAction";


const mapStateToProps = (state) => ({
    status: state.auth.register.status
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username, password, name, userType, email1, domain) => {
        let email = email1 + "@" + domain;
        return dispatch(registerRequest(username, password, userType, name, email));
    }
})

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterView);

export default Register;