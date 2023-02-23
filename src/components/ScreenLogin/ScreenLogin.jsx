import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginImgBox from './LoginImgBox';
import LoginInputBox from './LoginInputBox';

const ScreenLogin = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <SelectBox>
        <SelectBtn onClick={() => navigate('/gameInfo')}>
          엔트리 선택 페이지 이동
        </SelectBtn>
        <SelectBtn onClick={() => navigate('/gameSelect')}>
          게임 입력 페이지 이동
        </SelectBtn>
        <SelectBtn onClick={() => navigate('/RegistrationManagement')}>
          관리 페이지 이동
        </SelectBtn>
      </SelectBox>
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
  padding: 5px;
`;
const SelectBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`;
const SelectBtn = styled.button`
  margin-right: 5px;
  color: white;
  background-color: #13136b;
  border: none;

  padding: 10px;
  height: 40px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: orange;
    color: white;
    border: none;
    font-weight: 700;
  }
`;
const Box = styled.div`
  display: flex;
  height: 100%;
`;

export default ScreenLogin;
