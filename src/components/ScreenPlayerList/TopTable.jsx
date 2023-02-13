import React from 'react';
import { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import { PlayDataThunk } from 'redux/modules/EntrySlice';

const TopTable = () => {
  const dispatch = useDispatch();
  const playData = useSelector((state) => state.entrySlice.playData);
  const products = playData;
  console.log(playData);

  useEffect(() => {
    dispatch(PlayDataThunk());
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
