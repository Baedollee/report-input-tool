import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EnumRegistrationManagementScreen } from 'types/EnumRegistrationManagementScreen';
import { useSelectManageMenu } from '../hooks/useSelectManageMenu';
import { ButtonStyled, SelectMenuBox, SubBtn, SubBtnBox, SubBtnWrap } from '../styles/SelectManageMenu.styles';

const SelectManageMenu = () => {
  const navigate = useNavigate();
  const { menuName } = useSelector((state) => state.MenuSelectSlice);
  const {onClickPageTextHandler} = useSelectManageMenu();

  return (
    <SelectMenuBox>
      <ButtonStyled onClick={onClickPageTextHandler} value={EnumRegistrationManagementScreen.ScreenGameSelect}>
        경기 선택
      </ButtonStyled>
      <ButtonStyled onClick={onClickPageTextHandler} value={EnumRegistrationManagementScreen.ScreenTeamRegister}>
        관리
      </ButtonStyled>
      <SubBtnWrap>
        {menuName !== EnumRegistrationManagementScreen.ScreenGameSelect &&
        menuName !== EnumRegistrationManagementScreen.ScreenGameInformManagement ? (
          <SubBtnBox isSelected={menuName}>
            <SubBtn onClick={onClickPageTextHandler} value={EnumRegistrationManagementScreen.ScreenTeamRegister}>
              팀 등록 관리
            </SubBtn>
            <SubBtn onClick={onClickPageTextHandler} value={EnumRegistrationManagementScreen.ScreenPlayerRegister}>
              선수 관리
            </SubBtn>
            <SubBtn onClick={onClickPageTextHandler} value={EnumRegistrationManagementScreen.ScreenRefereeRegister}>
              심판 관리
            </SubBtn>
            <SubBtn>대회/기타 등록 관리</SubBtn>
            <SubBtn onClick={onClickPageTextHandler} value={EnumRegistrationManagementScreen.ScreenCodeManagement}>
              코드 관리
            </SubBtn>
          </SubBtnBox>
        ) : (
          <></>
        )}
      </SubBtnWrap>
      <ButtonStyled onClick={() => navigate('/')}>로그아웃</ButtonStyled>
    </SelectMenuBox>
  );
};


export default SelectManageMenu;
