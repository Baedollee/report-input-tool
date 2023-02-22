import React from 'react';
import styled from 'styled-components';
import TeamRegisterHeader from './TeamRegisterHeader';
import TeamRegisterInputTable from './TeamRegisterInputTable';
import TeamRegisterShowTable from './TeamRegisterShowTable';

const ScreenTeamRegister = () => {
  return (
    <Wrap>
      <TeamRegisterHeader />
      <Container>
        <TeamRegisterInputTable />
        <TeamRegisterShowTable />
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

export default ScreenTeamRegister;
