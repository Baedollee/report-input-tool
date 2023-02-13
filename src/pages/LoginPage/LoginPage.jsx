import React from 'react';
import ScreenLogin from 'components/ScreenLogin/ScreenLogin';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Wrap>
      <ScreenLogin />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #07071f;
`;

export default LoginPage;
