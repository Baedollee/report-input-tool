import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { useEffect } from 'react';
import { GameDataThunk } from 'redux/modules/gameInformSlice';

const GameDataTable = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state?.gameInformSlice?.gameData);
  console.log(gameData);

  const columnStyle = (column, columnIndex) => {};

  useEffect(() => {
    dispatch(GameDataThunk());
  }, []);

  const columns = [
    {
      dataField: 'competitionCode',
      text: '대회코드',
    },
    {
      dataField: 'gender',
      text: '성별',
    },
    {
      dataField: 'homeAway',
      text: '홈/원정 구분',
    },
    {
      dataField: 'teamId',
      text: '팀고유번호',
    },

    {
      dataField: 'gameCode',
      text: '경기코드',
    },
  ];

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
        keyField='gameNum'
        data={[gameData]}
        columns={columns}
        cellEdit={cellEdit}
      />

      {/* <Wrap>
        {titleCategory.map((item, index) => (
          <TitleDiv length={item.length} key={`${item}_${index}`}>
            {item}
          </TitleDiv>
        ))}
      </Wrap> */}
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
