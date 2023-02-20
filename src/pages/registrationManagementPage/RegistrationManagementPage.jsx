import ScreenPlayerRegister from 'components/ScreenPlayerRegister/ScreenPlayerRegister';
import ScreenTeamRegister from 'components/ScreenTeamRegister/ScreenTeamRegister';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RegistrationManagementPage = () => {
  const navigate = useNavigate();
  const [selectMenu, setSelectMenu] = useState('');

  const onClickPageTextHandler = (e) => {
    const { value } = e.target;
    setSelectMenu(value);
  };

  const onChangePageHandler = () => {
    if (selectMenu === 'teamRegister') {
      return (
        <>
          <ScreenTeamRegister />
        </>
      );
    }
    if (selectMenu === 'playerRegister') {
      return (
        <>
          <ScreenPlayerRegister />
        </>
      );
    }
  };

  return (
    <Wrap>
      <SelectMenuBox>
        <button onClick={() => navigate('/')}>홈으로</button>
        <button onClick={onClickPageTextHandler} value='teamRegister'>
          팀등록 관리
        </button>
        <button onClick={onClickPageTextHandler} value='playerRegister'>
          선수관리
        </button>
        <button onClick={() => navigate('/')}>심판관리</button>
        <button onClick={() => navigate('/')}>대회/기타등록</button>
      </SelectMenuBox>
      <ViewBox>{onChangePageHandler()}</ViewBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
`;
const SelectMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
`;
const ViewBox = styled.div`
  display: flex;
  width: 100%;
`;

export default RegistrationManagementPage;
