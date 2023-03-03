import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { teamManagementColumn } from 'static/BootStrapTableColumsContents';
import { GameDataThunk } from 'redux/modules/gameInformSlice';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

const TeamRegisterShowTable = () => {
  const dispatch = useDispatch();

  const { gameData } = useSelector((state) => state.gameInformSlice);

  const getGameData = useCallback(() => {
    dispatch(GameDataThunk(``));
  }, [dispatch]);

  useEffect(() => {
    getGameData();
  }, []);

  const pageListRenderer = ({ pages, onPageChange }) => {
    const pageWithoutIndication = pages.filter(
      (p) => typeof p.page !== 'string'
    );
    return (
      <div>
        {pageWithoutIndication.map((p) => {
          <button
            className='btn btn-success'
            onClick={() => onPageChange(p.page)}></button>;
        })}
      </div>
    );
  };
  const options = {
    pageListRenderer,
  };

  return (
    <Wrap>
      <BootstrapTable
        bootstrap4
        keyField='gameDate'
        data={gameData}
        columns={teamManagementColumn}
        pagination={paginationFactory(options)}
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
