import React, { useCallback, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { GameDataThunk } from 'redux/modules/gameInformSlice';
import { gameDataColumn } from 'static/BootStrapTableColumsContents';

const GameDataTable = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state?.gameInformSlice?.gameData);
  console.log(gameData);

  const getGameData = useCallback(() => {
    dispatch(GameDataThunk(`/api/game/selectGame`));
  }, [dispatch]);

  useEffect(() => {
    getGameData();
  }, []);

  const columns = gameDataColumn;

  const columnStyle = (column, columnIndex) => {};

  const cellEdit = cellEditFactory({
    mode: 'dbclick',
    onStartEdit: (row, column, rowIndex, columnIndex) => {},
    beforeSaveCell: (oldValue, newValue, row, colum) => {
      const copyArr = [...gameData];
    },
    afterSaveCell: (oldValue, newValue, row, column) => {},
  });

  const row = {
    id: '1',
    data: {
      createdTime: '2023-02-06T09:19:42.459+00:00',
    },
  };

  const rowStyle = (row, rowIndex) => {
    // if (rowIndex)
    return {
      color: 'black',
      fontSize: 15,
      width: 'auto',
      borderStyle: 'solid',
      textAlign: 'center',
    };
  };
  const hiddenRowKeys = [`2023-02-06T09:19:42.459+00:11`];
  return (
    <>
      <MovePageDiv></MovePageDiv>
      <BootstrapTable
        bootstrap4
        keyField='gameNum'
        data={[gameData]}
        columns={columns}
        cellEdit={cellEdit}
        hiddenRows={hiddenRowKeys}
        row={row}
      />
    </>
  );
};

const MovePageDiv = styled.div`
  display: flex;
  height: 100px;
  padding: 0px 20px;
  align-items: center;
  button {
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  /* width: ${(props) => (props.length > 3 ? '100px' : '60px')}; */
  min-width: 100px;
  height: 20px;
`;

export default GameDataTable;
