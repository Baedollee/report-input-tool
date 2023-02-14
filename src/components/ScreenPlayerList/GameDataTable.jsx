import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const GameDataTable = ({ gameData }) => {
  const row = [gameData];

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
        data={[]}
        columns={columns}
      />
      ;
    </>
  );
};

export default GameDataTable;
