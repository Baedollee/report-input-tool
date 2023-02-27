import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GameDataTable from 'components/Common/gameDataTable/GameDataTable';
import GameSelectTable from 'components/ScreenGameSelect/GameSelectTable';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const GameSelectPage = () => {
  const navigate = useNavigate();
  const [dropDownVisibility, setDropDownVisibility] = useState(false);
  const { gameData } = useSelector((state) => state.gameInformSlice);

  return (
    <Wrap>
      <GameSelectTable />
      <Container>
        <GameDataTable gameData={gameData} />
      </Container>
    </Wrap>
  );
};

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

export default GameSelectPage;
