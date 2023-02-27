import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SelectManageMenu = ({ onClickPageTextHandler, selectMenu }) => {
  const navigate = useNavigate();

  return (
    <SelectMenuBox>
      <ButtonStyled onClick={onClickPageTextHandler} value='gameSelect'>
        경기 선택
      </ButtonStyled>
      <ButtonStyled onClick={onClickPageTextHandler} value='teamRegister'>
        관리
      </ButtonStyled>
      {selectMenu !== 'gameSelect' ? (
        <>
          <SubBtn onClick={onClickPageTextHandler} value='teamRegister'>
            팀 등록 관리
          </SubBtn>
          <SubBtn onClick={onClickPageTextHandler} value='playerRegister'>
            선수 관리
          </SubBtn>
          <SubBtn onClick={onClickPageTextHandler} value='refereeRegister'>
            심판 관리
          </SubBtn>
          <SubBtn>대회/기타 등록 관리</SubBtn>
          <SubBtn onClick={onClickPageTextHandler} value='codeManagement'>
            코드 관리
          </SubBtn>
        </>
      ) : (
        <></>
      )}
      <ButtonStyled onClick={() => navigate('/')}>로그아웃</ButtonStyled>
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
  /* div {
    display: flex;
    height: 50px;
    background-color: #0c0c64;
    width: 100%;
    color: white;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    :hover {
      background-color: orange;
    }
  } */
`;
const ButtonStyled = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: #0c0c64;
  color: white;
  font-weight: 700;
  border-bottom: 1px solid white;
  height: 50px;
  width: 100%;
  :hover {
    background-color: orange;
  }
`;
const SubBtn = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: gray;
  font-weight: 700;
  border-bottom: 1px solid white;
  height: 50px;
  width: 100%;
  color: white;
  :hover {
    background-color: orange;
  }
`;

export default SelectManageMenu;
