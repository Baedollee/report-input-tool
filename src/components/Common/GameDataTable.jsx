import React, { useCallback, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {
  GameDataThunk,
  GetCompetitionDataThunk,
} from 'redux/modules/gameInformSlice';
import { gameDataColumn } from 'static/BootStrapTableColumsContents';

const GameDataTable = ({ gameData, competitionDataList }) => {
  const dispatch = useDispatch();
  let data = '';

  // const getGameData = useCallback(() => {
  //   dispatch(GameDataThunk(`/api/game/selectGame`));
  // }, [dispatch]);

  // useEffect(() => {
  //   getGameData();
  // }, []);

  const getCompetitionData = useCallback(() => {
    dispatch(GetCompetitionDataThunk());
  }, [dispatch]);
  useEffect(() => {
    getCompetitionData();
  }, []);

  // window.open(`http://localhost:3000/record/${data}`);

  const selectBtn = (cell, row, rowIndex, formatExtraData) => {
    const handleChange = () => {
      data = `${row.gameDate}${row.gender}${row.gameNum}`;
      console.log(data);
    };

    return (
      <>
        <button onClick={handleChange}>선택</button>
      </>
    );
  };

  const columns = gameDataColumn;
  const copyColumns = [...columns];
  copyColumns[10] = {
    ...copyColumns[10],
    formatter: selectBtn,
  };

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
      <MovePageDiv>
        {/* <button
          onClick={() => {
            window.open(`http://localhost:3000/record/${data}`);
          }}>
          saddassad
        </button> */}
      </MovePageDiv>
      <BootstrapTable
        bootstrap4
        columns={copyColumns}
        keyField='createdTime'
        data={competitionDataList}
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
