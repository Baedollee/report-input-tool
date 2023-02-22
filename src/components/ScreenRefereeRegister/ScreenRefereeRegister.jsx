import React from 'react';
import styled from 'styled-components';
import RefereeRegisterHeader from './RefereeRegisterHeader';
import RefereeRegisterInputTable from './RefereeRegisterInputTable';
import RefereeRegisterShowTable from './RefereeRegisterShowTable';

const ScreenRefereeRegister = () => {
  return (
    <Wrap>
      <RefereeRegisterHeader />
      <Container>
        <RefereeRegisterInputTable />
        <RefereeRegisterShowTable />
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  height: 100%;
`;
export default ScreenRefereeRegister;
