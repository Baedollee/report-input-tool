import React from 'react';
import styled from 'styled-components';
import PlayerRegisterHeader from './PlayerRegisterHeader';
import PlayerRegisterInputTable from './PlayerRegisterInputTable';
import PlayerRegisterShowTable from './PlayerRegisterShowTable';

const ScreenPlayerRegister = () => {
  return (
    <Wrap>
      <PlayerRegisterHeader />
      <Container>
        <PlayerRegisterInputTable />
        <PlayerRegisterShowTable />
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

export default ScreenPlayerRegister;
