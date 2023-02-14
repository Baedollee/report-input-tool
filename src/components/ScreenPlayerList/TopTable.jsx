import React from 'react';
import { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import { GameDataThunk } from 'redux/modules/gameInformSlice';

const TopTable = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.gameInformSlice.gameData);
  const products = gameData;
  console.log(gameData);

  useEffect(() => {
    dispatch(GameDataThunk());
  }, []);

  const columns = [
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
      <BootstrapTable keyField='id' data={products} columns={columns} />;
    </>
  );
};

export default TopTable;
