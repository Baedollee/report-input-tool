import React, { useCallback, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import { GameDataThunk } from 'redux/modules/gameInformSlice';
import { refereeManagementColumn } from 'static/BootStrapTableColumsContents';
import styled from 'styled-components';

const RefereeRegisterShowTable = () => {
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
        columns={refereeManagementColumn}
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
export default RefereeRegisterShowTable;
