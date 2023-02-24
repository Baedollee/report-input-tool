import React, { useCallback, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import {
  GameDataThunk,
  GetRosterDataThunk,
} from 'redux/modules/gameInformSlice';
import { playerManagementColumn } from 'static/BootStrapTableColumsContents';
import styled from 'styled-components';

const PlayerRegisterShowTable = () => {
  const dispatch = useDispatch();

  const { rosterList } = useSelector((state) => state.gameInformSlice);

  const getGameData = useCallback(() => {
    dispatch(GetRosterDataThunk());
  }, [dispatch]);

  useEffect(() => {
    getGameData();
  }, []);

  return (
    <Wrap>
      <BootstrapTable
        bootstrap4
        keyField='gameDate'
        data={rosterList}
        columns={playerManagementColumn}
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

export default PlayerRegisterShowTable;
