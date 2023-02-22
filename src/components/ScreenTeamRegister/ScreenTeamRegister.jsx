import React from 'react';
import styled from 'styled-components';
import TeamRegisterInputTable from './TeamRegisterInputTable';
import TeamRegisterShowTable from './TeamRegisterShowTable';

const ScreenTeamRegister = () => {
  return (
    <Wrap>
      <TeamRegisterInputTable />
      <TeamRegisterShowTable />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default ScreenTeamRegister;
