import React from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let selected = {color: "#43e39f"}
        return (
            <React.Fragment>
                <Box display="flex" className="bg-white px-10">
                    <Box p={1} flexGrow={1}><Button href="/"><span className="txt-main font-noto-bold logo">커넥툰</span></Button></Box>
                    <Button><span className="txt-menu font-noto-medium" style={(this.props.page=="show") ? selected : {}}>작품보기</span></Button>
                    <Button><span className="txt-menu font-noto-medium" style={(this.props.page=="search") ? selected : {}}>작가찾기</span></Button>
                    <Button><span className="txt-menu font-noto-medium" style={(this.props.page=="new") ? selected : {}}>탄생웹툰</span></Button>
                    <Button href="/login"><span className="font-noto-medium"
                        style={(this.props.page=="auth") ? selected : {}}>로그인/회원가입</span></Button>
                </Box>
                <div className="banner">
                    <div className="banner-text-main">웹툰작가를 연결하다. <span className="text-style-1">커넥툰</span></div>
                    <div className="Connect-Webtoon">Connect <span className="text-style-1">+</span> Webtoon</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;