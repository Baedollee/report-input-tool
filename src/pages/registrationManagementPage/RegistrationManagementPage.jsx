import ScreenPlayerRegister from 'components/ScreenPlayerRegister/ScreenPlayerRegister';
import ScreenTeamRegister from 'components/ScreenTeamRegister/ScreenTeamRegister';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SelectManageMenu from './SelectManageMenu';

const RegistrationManagementPage = () => {
  const [selectMenu, setSelectMenu] = useState('');

  const onClickPageTextHandler = (e) => {
    const { value } = e.target;
    setSelectMenu(value);
  };

  const onChangePageHandler = () => {
    if (selectMenu === 'teamRegister') {
      return <ScreenTeamRegister />;
    }
    if (selectMenu === 'playerRegister') {
      return <ScreenPlayerRegister />;
    }
  };

  return (
    <Wrap>
      <SelectManageMenu onClickPageTextHandler={onClickPageTextHandler} />
      <ViewBox>{onChangePageHandler()}</ViewBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
`;

const ViewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default RegistrationManagementPage;
