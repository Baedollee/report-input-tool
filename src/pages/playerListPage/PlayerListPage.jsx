import LeftTable from 'components/ScreenPlayerList/LeftTable';
import RightTable from 'components/ScreenPlayerList/RightTable';
import TopTable from 'components/ScreenPlayerList/TopTable';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteEntryDataThunk,
  EntryDataThunk,
  LineUpListDataThunk,
  onChange,
  onReset,
} from 'redux/modules/EntrySlice';
import styled from 'styled-components';

const PlayerListPage = () => {
  const dispatch = useDispatch();
  const playData = useSelector((state) => state.entrySlice.playData);

  const rightList = useSelector((state) => state.entrySlice.entryList);
  const rightSelectList = useSelector(
    (state) => state.entrySlice.rightSelectList
  );
  const leftSelectList = useSelector(
    (state) => state.entrySlice.leftSelectList
  );

  const onClickLinUpHandler = async () => {
    const copyArr = [...rightSelectList];
    // console.log('123213123213123', copyArr);
    for (let i = 0; i < copyArr.length; i++) {
      copyArr[i] = {
        ...copyArr[i],
        participation: 'Y',
        competitionCode: playData[0].competitionCode,
        gender: playData[0].gender,
        homeTeam: playData[0].homeTeam,
        gameCode: playData[0].gameCode,
      };
    }
    const changeStatus = rightList.filter((item) => {
      return !rightSelectList.some(
        (other) => other.participantOrder === item.participantOrder
      );
    });
    await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(LineUpListDataThunk(copyArr));
    await dispatch(onReset());
  };

  const onClickEntryHandler = async () => {
    const copyArr = [...leftSelectList];
    for (let i = 0; i < copyArr.length; i++) {
      copyArr[i] = { ...copyArr[i], participation: 'N' };
    }
    const changeStatus = rightList.filter((item) => {
      return !leftSelectList.some(
        (other) => other.participantOrder === item.participantOrder
      );
    });
    await dispatch(EntryDataThunk(copyArr));
    await dispatch(DeleteEntryDataThunk(leftSelectList));
    await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(onReset());
  };

  return (
    <WrapDiv>
      <div>
        <TopTable />
      </div>
      <BoxWrap>
        <LeftTable />
        <MiddleBoxDiv>
          <button onClick={onClickLinUpHandler}>선발추가</button>
          <button onClick={onClickEntryHandler}>벤치추가</button>
        </MiddleBoxDiv>
        <RightTable />
      </BoxWrap>
    </WrapDiv>
  );
};

const WrapDiv = styled.div`
  display: flex;
  height: 100vh;
  padding: 10px;
  flex-direction: column;
`;
const BoxWrap = styled.div`
  display: flex;
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
