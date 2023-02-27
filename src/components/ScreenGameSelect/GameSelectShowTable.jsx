import React, { useCallback, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch } from 'react-redux';
import { GetCompetitionDataThunk } from 'redux/modules/gameInformSlice';
import { PlaySelectColumn } from 'static/BootStrapTableColumsContents';
import styled from 'styled-components';

const GameSelectShowTable = ({ competitionDataList }) => {
  const dispatch = useDispatch();
  const getCompetitionData = useCallback(() => {
    dispatch(GetCompetitionDataThunk());
  }, [dispatch]);
  useEffect(() => {
    getCompetitionData();
  }, []);

  return (
    <Wrap>
      <BootstrapTable
        bootstrap4
        keyField='gameDate'
        data={competitionDataList}
        columns={PlaySelectColumn}
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
export default GameSelectShowTable;
