import React from 'react';

import Header from '../containers/Header'
import { TextField, Button, Box } from '@material-ui/core';
import { DOMAINS } from '../experiments/experiments';


class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: '',   // 01 : 스토리 작가 코드, 02 : 그림 작가 코드
            username: '',
            password: '',
            name: '',
            domain: '',
            email: '',
            enable: false
        }
    }

    handleChange = (e) => {
        let nextState = {}
        nextState[e.currentTarget.name] = e.currentTarget.value;
        this.setState(nextState, () => {
            let { userType, username, password, name, domain, email } = this.state;
            if (userType !== '' && username !== '' && password !== '' && name !== '' && domain !== '' && email !== '') {
                this.setState({
                    ...this.state,
                    enable: true
                })
            }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();  
        let { username, password, name, userType, email, domain } = this.state;
        this.props.onSubmit(username, password, name, userType, email, domain).then( () => {
            if (this.props.status === "SUCCESS") {
                window.location.replace('/login');
            }
        });     
    }
    render() {
        let style = {filter: 'brightness(10%)', color: '#000000', fontWeight: 'bold'}
        return (
            
            <div className="bg-f9f9f9">
                <Header page="auth" />
                <Box p={6} className="input-box">
                    <div className="font-noto-bold box-title" style={{fontSize: '20px'}}>회원가입</div>
    
                    <Box className="form-group">
                        <span className="font-noto-bold">가입유형을 선택해주세요</span>
                        <Box display="flex" wrap="wrap" p={3} justifyContent="space-around">
                            <div style={{textAlign: "center"}}>
                                <div className="type-select">
                                    <Button onClick={this.handleChange} name="userType" value="01">
                                        <img src="images/story.png" alt="스토리 작가" style={(this.state.userType === "01") ? style : {}}/>
                                    </Button>
                                </div>
                                <p style={(this.state.userType === "01") ? style : {}}>스토리 작가</p>
                            </div>

                            <div style={{textAlign: "center"}}>
                                <div className="type-select">
                                <Button onClick={this.handleChange} name="userType" value="02">
                                    <img src="images/graphic.png" alt="그림 작가" style={(this.state.userType === "02") ? style : {}}/>
                                </Button>
                                </div>
                                <p style={(this.state.userType === "02") ? style : {}}>그림 작가</p>
                            </div>
                        </Box>
    
                    </Box>
    
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
                    
                    <Box className="form-group">    
                        <span className="font-noto-bold">이름</span>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="이름을 입력해주세요."
                            name="name" onChange={this.handleChange} value={this.state.name}/>
                    </Box>
                    
                    <Box className="form-group">
                        <span className="font-noto-bold">이메일</span>
                        <Box pt={3} display="flex" alignItems="center">
                            <TextField fullWidth size="small" 
                                label="이메일을 입력해주세요." variant="outlined" name="email" onChange={this.handleChange} />
                            <Box px={2}>@</Box>
                            <TextField fullWidth SelectProps={{native: true,}}
                                size="small" 
                                select 
                                variant="outlined"
                                name="domain" onChange={this.handleChange} value={this.state.domain}>
                                <option value="">선택하기</option>
                                {
                                    DOMAINS.map( (domain, index) => (
                                        <option key={index} value={domain}>{domain}</option>
                                    ))
                                }
                            </TextField>
                        </Box>
                    </Box>
                    <Box style={{marginTop: '60px'}}>
                        <Button fullWidth onClick={this.handleSubmit} disabled={!this.state.enable}
                            style={{backgroundColor: '#43e39f', color: 'white', marginBottom: '10px', padding: '16px'}}>회원가입</Button>
                    </Box>
                </Box>
            </div>
        )
    }
};

export default RegisterView;