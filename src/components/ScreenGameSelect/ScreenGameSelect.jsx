import GameDataTable from 'components/Common/gameDataTable/GameDataTable';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GameSelectHeader from './GameSelectHeader';
import GameSelectInputTable from './GameSelectInputTable';
import GameSelectShowTable from './GameSelectShowTable';
import GameSelectTable from './GameSelectTable';

const ScreenGameSelect = () => {
  const { competitionDataList, gameData } = useSelector(
    (state) => state.gameInformSlice
  );

  return (
    <Wrap>
      <GameSelectHeader />
      {/* <GameSelectTable /> */}
      <Container>
        <GameSelectInputTable />
        <GameSelectShowTable
          competitionDataList={competitionDataList}
          gameData={gameData}
        />
        {/* <GameDataTable
          gameData={gameData}
          competitionDataList={competitionDataList}
        /> */}
      </Container>
    </Wrap>
  );
};

export default ScreenGameSelect;

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
