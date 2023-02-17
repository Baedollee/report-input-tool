import React, { useCallback } from 'react';
import { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch } from 'react-redux';
import { GameDataThunk } from 'redux/modules/gameInformSlice';
import { gameDataColumn } from 'static/BootStrapTableColumsContents';
import styled from 'styled-components';

const GameDataTable = ({ gameData }) => {
  const dispatch = useDispatch();
  const gameDataUrl = `/api/game/selectGame`;

  const getGameList = useCallback(() => {
    dispatch(GameDataThunk(gameDataUrl));
  }, [JSON.stringify(gameDataUrl)]);

  useEffect(() => {
    getGameList();
  }, []);

  // const hiddenRows = [1, 2];
  const columns = gameDataColumn;

  return (
    <>
      <BootstrapTable
        bootstrap4
        keyField='gameNum'
        data={[gameData]}
        columns={columns}
        // hiddenRows={hiddenRows}
      />
    </>
  );
};

const TableWrap = styled.table`
  display: flex;
  width: 100%;
  flex-direction: row;
  border: 1px solid black;
  td {
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
  }
  tr {
    display: flex;
    border-top: 1px solid black;
  }
`;

export default GameDataTable;
