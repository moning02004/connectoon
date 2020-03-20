import React from 'react';
import { Grid, Box } from '@material-ui/core';


const FooterView = ({}) => {
    return (
        <React.Fragment className="bg-white" style={{marginTop: '10rem'}}>
            <div style={{paddingLeft: "100px"}} className="bg-white">
                <Box display="flex" p={1}>
                    <Box p={3} alignItems="center"><span className="txt-main font-noto-bold logo">커넥툰</span></Box>
                    <Box p={3} flexGrow={1}  alignItems="center">
                        <div className="txt-767676">사업자등록번호 155-88-01025 ｜ 대표 서장원,이민재 ｜ 서울시 마포구 케이스퀘어 708호 이메일 : wkddnjset@naver.com</div>
                        <div className="txt-767676">Copyright © tirrilee 2019</div>
                    </Box>
                </Box>
            </div>
        </React.Fragment>
    )

};

export default FooterView;