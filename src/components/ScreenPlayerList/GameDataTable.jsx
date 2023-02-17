import axios from 'axios';
import React, { memo, useCallback, useMemo } from 'react';
import { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch } from 'react-redux';
import { GameDataThunk } from 'redux/modules/gameInformSlice';
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

  const memo = useMemo(() => getGameList, [gameData]);
  console.log(memo);

  const hiddenRows = [1, 2];
  const columns = [
    {
      dataField: 'gameNum',
      text: '경기번호',
      hidden: true,
    },
    {
      dataField: 'competitionCode',
      text: '리그',
    },
    {
      dataField: 'gender',
      text: '성별',
    },
    {
      dataField: 'homeTeam',
      text: 'Home',
    },
    {
      dataField: 'awayTeam',
      text: 'Away',
    },
    {
      dataField: 'gameCode',
      text: '경기코드',
    },
  ];

  return (
    <>
      <BootstrapTable
        bootstrap4
        keyField='gameNum'
        data={[gameData]}
        columns={columns}
        hiddenRows={hiddenRows}
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
