import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { useEffect } from 'react';
import { GameDataThunk } from 'redux/modules/gameInformSlice';
import { gameDataInputColumn } from 'static/BootStrapTableColumsContents';

const GameDataTable = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state?.gameInformSlice?.gameData);

  const columnStyle = (column, columnIndex) => {};

  useEffect(() => {
    dispatch(GameDataThunk());
  }, []);

  const columns = gameDataInputColumn;

  const cellEdit = cellEditFactory({
    mode: 'dbclick',
    onStartEdit: (row, column, rowIndex, columnIndex) => {
      console.log('스타트 에디트', row, column, rowIndex, columnIndex);
    },
    beforeSaveCell: (oldValue, newValue, row, colum) => {
      const copyArr = [...gameData];
      console.log('2222', copyArr);

      console.log('------', oldValue, newValue, row, colum);
    },
    afterSaveCell: (oldValue, newValue, row, column) => {
      console.log('21321321312', oldValue, newValue);
    },
  });

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
  return (
    <>
      <MovePageDiv></MovePageDiv>
      <BootstrapTable
        bootstrap4
        keyField='teamId'
        data={[gameData]}
        columns={columns}
        cellEdit={cellEdit}
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
