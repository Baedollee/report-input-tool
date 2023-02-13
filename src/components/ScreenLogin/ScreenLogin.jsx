import React from 'react';
import styled from 'styled-components';
import LoginImgBox from './LoginImgBox';
import LoginInputBox from './LoginInputBox';

const ScreenLogin = () => {
  return (
    <Wrap>
      <LoginImgBox />
      <LoginInputBox />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  background-color: white;
`;

export default ScreenLogin;
