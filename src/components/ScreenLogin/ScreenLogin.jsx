import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginImgBox from './LoginImgBox';
import LoginInputBox from './LoginInputBox';

const ScreenLogin = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <div>
        <button onClick={() => navigate('/codeReport')}>
          코드입력 페이지로 이동
        </button>
        <button onClick={() => navigate('/gameInfo')}>
          엔트리 선택 페이지 이동
        </button>
        <button onClick={() => navigate('/gameSelect')}>
          게임 입력 페이지 이동
        </button>
        <button onClick={() => navigate('/RegistrationManagement')}>
          관리 페이지 이동
        </button>
      </div>
      <Box>
        <LoginImgBox />
        <LoginInputBox />
      </Box>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  background-color: white;
`;
const Box = styled.div`
  display: flex;
  height: 100%;
`;

export default ScreenLogin;
