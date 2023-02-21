import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SelectManageMenu = ({ onClickPageTextHandler }) => {
  const navigate = useNavigate();
  return (
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
  );
};

const SelectMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
`;

export default SelectManageMenu;
