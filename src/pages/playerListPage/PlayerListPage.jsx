import LeftTable from 'components/entry/LeftTable';
import RightTable from 'components/entry/RightTable';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteLineUpListDataThunk,
  EntryDataThunk,
  LineUpListDataThunk,
  onReset,
} from 'redux/modules/EntrySlice';
import styled from 'styled-components';
import { DeleteEntryDataThunk } from '../../redux/modules/EntrySlice';

const PlayerListPage = () => {
  const dispatch = useDispatch();
  const selectList = useSelector((state) => state.entrySlice.selectList);
  console.log('page', selectList);

  const onClickLinUpHandler = async () => {
    await dispatch(LineUpListDataThunk(selectList));
    await dispatch(DeleteEntryDataThunk(selectList));
    await dispatch(onReset());
  };
  const onClickEntryHandler = async () => {
    await dispatch(EntryDataThunk(selectList));
    await dispatch(DeleteLineUpListDataThunk(selectList));
    await dispatch(onReset());
  };
  return (
    <WrapDiv>
      <LeftTable />
      <MiddleBoxDiv>
        <button onClick={onClickLinUpHandler}>선발추가</button>
        <button onClick={onClickEntryHandler}>벤치추가</button>
      </MiddleBoxDiv>
      <RightTable />
    </WrapDiv>
  );
};

const WrapDiv = styled.div`
  display: flex;
  height: 100vh;
  padding: 10px;
  flex-direction: row;
`;

const MiddleBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  gap: 10px;
  button {
    width: 70px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: orange;
    color: white;
    font-weight: 700;
  }
`;

export default PlayerListPage;
