import LeftTable from 'components/entry/LeftTable';
import RightTable from 'components/entry/RightTable';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  EntryDataThunk,
  LineUpListDataThunk,
  onReset,
} from 'redux/modules/EntrySlice';
import styled from 'styled-components';

const PlayerListPage = () => {
  const dispatch = useDispatch();
  const rightSelectList = useSelector(
    (state) => state.entrySlice.rightSelectList
  );
  const leftSelectList = useSelector(
    (state) => state.entrySlice.leftSelectList
  );

  const onClickLinUpHandler = async () => {
    const copyArr = [...rightSelectList];

    for (let i = 0; i < copyArr.length; i++) {
      copyArr[i] = { ...copyArr[i], participation: true };
    }
    await dispatch(LineUpListDataThunk(copyArr));
    await dispatch(onReset());
  };
  const onClickEntryHandler = async () => {
    const copyArr = [...leftSelectList];
    for (let i = 0; i < copyArr.length; i++) {
      copyArr[i] = { ...copyArr[i], participation: false };
    }
    await dispatch(EntryDataThunk(copyArr));
    await dispatch(onReset());
  };

  useEffect(() => {});
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
