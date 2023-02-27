import GameDataTable from 'components/Common/gameDataTable/GameDataTable';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AddLineUpButton from './AddLineUpButton';
import AddRosterButton from './AddRosterButton';
import GameEtcRegister from './GameEtcRegister';
import GameInformHeader from './GameInformHeader';
import GameInformSelectMenu from './GameInformSelectMenu';
import GameLineUpListTable from './GameLineUpListTable';
import GameRosterListTable from './GameRosterListTable';

const ScreenGameInformManagement = () => {
  const dispatch = useDispatch();
  const { gameData, competitionDataList } = useSelector(
    (state) => state?.gameInformSlice
  );

  const [menuSelect, setMenuSelect] = useState('Home');

  return (
    <Wrap>
      <GameInformHeader />
      <Container>
        <GameDataTable
          gameData={gameData}
          competitionDataList={competitionDataList}
        />
        <GameInformSelectMenu
          menuSelect={menuSelect}
          setMenuSelect={setMenuSelect}
        />
        {menuSelect !== 'Etc' ? (
          <TableBoxWrap>
            <GameRosterListTable gameData={gameData} menuSelect={menuSelect} />
            <MiddleBoxDiv>
              <AddLineUpButton menuSelect={menuSelect} />
              <AddRosterButton menuSelect={menuSelect} />
            </MiddleBoxDiv>
            <GameLineUpListTable gameData={gameData} menuSelect={menuSelect} />
          </TableBoxWrap>
        ) : (
          <TableBoxWrap>
            <GameEtcRegister />
          </TableBoxWrap>
        )}
      </Container>
    </Wrap>
  );
};

export default ScreenGameInformManagement;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  height: 100%;
`;
const TableBoxWrap = styled.div`
  padding: 5px;
  display: flex;
  border: 1px solid black;
  height: 100%;
`;

const MiddleBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  gap: 10px;
`;
