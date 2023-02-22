import React, { useCallback } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { teamManagementColumn } from 'static/BootStrapTableColumsContents';
import { GameDataThunk } from 'redux/modules/gameInformSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const TeamRegisterShowTable = () => {
  const dispatch = useDispatch();

  const { gameData } = useSelector((state) => state.gameInformSlice);

  const getGameData = useCallback(() => {
    dispatch(GameDataThunk(`/api/game/selectGame`));
  }, [dispatch]);

  useEffect(() => {
    getGameData();
  }, []);

  return (
    <Wrap>
      <BootstrapTable
        bootstrap4
        keyField='num'
        data={gameData}
        columns={teamManagementColumn}
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
export default TeamRegisterShowTable;
