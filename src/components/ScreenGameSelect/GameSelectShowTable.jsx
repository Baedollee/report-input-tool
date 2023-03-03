import React, { useCallback, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  GameDataThunk,
  GetCompetitionDataThunk,
} from 'redux/modules/gameInformSlice';
import { PlaySelectColumn } from 'static/BootStrapTableColumsContents';
import styled from 'styled-components';

const GameSelectShowTable = ({ competitionDataList, gameData }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  // const getCompetitionData = useCallback(() => {
  //   dispatch(GetCompetitionDataThunk());
  // }, [dispatch]);
  // useEffect(() => {
  //   getCompetitionData();
  // }, []);
  // console.log('쇼쇼쇼');
  // console.log(location);

  // const getGameData = useCallback(() => {
  //   dispatch(GameDataThunk(location.search));
  //   console.log(21312321312312);
  // }, [dispatch, location]);

  // useEffect(() => {
  //   getGameData();
  // }, []);

  useEffect(() => {
    dispatch(GameDataThunk(location.search));
  }, [location]);

  const handleGameInputStatus = (cell, row, rowIndex, formatExtraData) => {
    return <ButtonStyle onClick={() => console.log(row)}>입력 전</ButtonStyle>;
  };

  const copyPlaySelectColumn = [...PlaySelectColumn];
  copyPlaySelectColumn[9] = {
    ...copyPlaySelectColumn[9],
    formatter: handleGameInputStatus,
  };

  return (
    <Wrap>
      <BootstrapTable
        bootstrap4
        keyField='gameDate'
        data={gameData}
        columns={copyPlaySelectColumn}
      />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  height: 100%;
`;

const EditButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
const ButtonStyle = styled.button`
  display: flex;
  background-color: #13136b;
  color: white;
  border: none;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export default GameSelectShowTable;
