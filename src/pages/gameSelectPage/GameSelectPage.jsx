import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GameDataTable from 'components/Common/GameDataTable';
import GameSelectTable from 'components/ScreenGameSelect/GameSelectTable';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const GameSelectPage = () => {
  const navigate = useNavigate();
  const [dropDownVisibility, setDropDownVisibility] = useState(false);
  const { gameData } = useSelector((state) => state.gameInformSlice);

  return (
    <WrapDiv>
      <div>
        <button onClick={() => navigate('/')}>홈 이동</button>
      </div>
      <GameSelectTable />
      <GameDataTable gameData={gameData} />
      {/* <DropDown /> */}
    </WrapDiv>
  );
};

const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default GameSelectPage;
//
