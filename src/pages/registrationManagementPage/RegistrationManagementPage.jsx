import React, { useCallback, useEffect, useRef, useState } from 'react';
import ScreenCodeManagement from 'components/ScreenCodeManagement/ScreenCodeManagement';
import ScreenGameSelect from 'components/ScreenGameSelect/ScreenGameSelect';
import ScreenPlayerRegister from 'components/ScreenPlayerRegister/ScreenPlayerRegister';
import ScreenRefereeRegister from 'components/ScreenRefereeRegister/ScreenRefereeRegister';
import ScreenTeamRegister from 'components/ScreenTeamRegister/ScreenTeamRegister';
import GameSelectPage from 'pages/gameSelectPage/GameSelectPage';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeMenuName } from 'redux/modules/MenuSelectSlice';
import styled from 'styled-components';
import SelectManageMenu from './SelectManageMenu';
import ScreenGameInformManagement from 'components/ScreenGameInformManagement/ScreenGameInformManagement';

const RegistrationManagementPage = () => {
  const dispatch = useDispatch();
  const { menuName } = useSelector((state) => state.MenuSelectSlice);
  // const [selectMenu, setSelectMenu] = useState(menuName);

  // console.log('스테이트');
  // console.log(selectMenu);

  // useEffect(() => {
  //   dispatch(onChangeMenuName(selectMenu));
  // }, [selectMenu]);

  const onClickPageTextHandler = (e) => {
    const { value } = e.target;
    // setSelectMenu(value);
    dispatch(onChangeMenuName(value));
  };

  const onChangePageHandler = () => {
    if (menuName === 'teamRegister') {
      return <ScreenTeamRegister />;
    }
    if (menuName === 'playerRegister') {
      return <ScreenPlayerRegister />;
    }
    if (menuName === 'codeManagement') {
      return <ScreenCodeManagement />;
    }
    if (menuName === 'refereeRegister') {
      return <ScreenRefereeRegister />;
    }
    if (menuName === 'gameSelect') {
      return <ScreenGameSelect />;
    }
    if (menuName === 'gameInformManagement') {
      return <ScreenGameInformManagement />;
    }
  };

  return (
    <Wrap>
      <SelectManageMenu
        onClickPageTextHandler={onClickPageTextHandler}
        selectMenu={menuName}
      />
      <ViewBox>{onChangePageHandler()}</ViewBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  height: 100vh;
`;

const ViewBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export default RegistrationManagementPage;
