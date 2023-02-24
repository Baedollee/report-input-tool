import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SelectManageMenu = ({ onClickPageTextHandler }) => {
  const navigate = useNavigate();
  return (
    <SelectMenuBox>
      <div>관리</div>
      <button onClick={() => navigate('/')}>홈으로</button>
      <button onClick={onClickPageTextHandler} value='teamRegister'>
        팀 등록 관리
      </button>
      <button onClick={onClickPageTextHandler} value='playerRegister'>
        선수 관리
      </button>
      <button onClick={onClickPageTextHandler} value='refereeRegister'>
        심판 관리
      </button>
      <button>대회/기타 등록 관리</button>
      <button onClick={onClickPageTextHandler} value='codeManagement'>
        코드 관리
      </button>
    </SelectMenuBox>
  );
};

const SelectMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  margin-left: 5px;
  min-width: 80px;
  width: 100px;
  div {
    display: flex;
    height: 50px;
    background-color: #0c0c64;
    width: 100%;
    color: white;
    font-weight: 700;
    justify-content: center;
    align-items: center;
  }
  button {
    border: none;
    background-color: gray;
    font-weight: 700;
    border-bottom: 1px solid white;
    height: 50px;
    width: 100%;
    :hover {
      background-color: orange;
    }
  }
`;

export default SelectManageMenu;
