import React from 'react';
import Header from '../containers/Header'
import { TextField, Button, Box } from '@material-ui/core';


class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            valid: false
        }
    }
    handleChange = (e) => {
        let nextState = {}
        nextState[e.currentTarget.name] = e.currentTarget.value;
        this.setState(nextState, () => {
            let { username, password } = this.state;
            if (username !== '' && password !== '') {
                this.setState({
                    ...this.state,
                    enable: true
                })
            }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { username, password } = this.state;
        this.props.onSubmit(username, password).then( () => {
            if (this.props.status === "SUCCESS") {
                window.location.replace('/')
            }
        });
    }
    render() {
        return (
            <div className="bg-f9f9f9">
                <Header page="auth" />
                <Box p={5} className="input-box">
                    <div className="font-noto-bold box-title" style={{fontSize: '20px'}}>로그인</div>

                    <Box className="form-group">
                        <span className="font-noto-bold">아이디</span>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="아이디를 입력해주세요."
                            name="username" onChange={this.handleChange} value={this.state.username}/>
                    </Box>
                    
                    <Box className="form-group">    
                        <span className="font-noto-bold">비밀번호</span>
                        <TextField
                            type="password"
                            margin="normal"
                            required
                            fullWidth
                            label="비밀번호를 입력해주세요."
                            name="password" onChange={this.handleChange} value={this.state.password}/>
                    </Box>
                    <Box style={{marginTop: '60px'}}>
                        <Button fullWidth disabled={!this.state.enable} onClick={this.handleSubmit}
                            style={{backgroundColor: '#43e39f', color: 'white', marginBottom: '10px', padding: '16px'}}>로그인</Button>
                        <Button fullWidth href="/register"
                            style={{border: '1px solid #43e39f', color: '#43e39f', padding: '16px'}}>회원가입</Button>
                    </Box>
                </Box>
            </div>
        )
    }
};

export default LoginView;