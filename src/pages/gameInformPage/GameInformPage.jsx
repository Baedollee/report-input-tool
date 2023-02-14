import LeftTable from 'components/ScreenPlayerList/LeftTable';
import RightTable from 'components/ScreenPlayerList/RightTable';
import TopTable from 'components/ScreenPlayerList/TopTable';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteRosterDataThunk,
  PostRosterDataThunk,
  LineUpListDataThunk,
  onChange,
  onReset,
} from 'redux/modules/gameInformSlice';
import styled from 'styled-components';

const GameInformPage = () => {
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.gameInformSlice.gameData);
  const rosterList = useSelector((state) => state.gameInformSlice.rosterList);

  const lineUpSelectList = useSelector(
    (state) => state.gameInformSlice.lineUpSelectList
  );
  const rosterSelectList = useSelector(
    (state) => state.gameInformSlice.rosterSelectList
  );

  const onClickAddLinUpHandler = async () => {
    const copyArr = [...rosterSelectList];

    for (let i = 0; i < copyArr.length; i++) {
      copyArr[i] = {
        ...copyArr[i],
        participation: 'Y',
        competitionCode: gameData[0].competitionCode,
        gender: gameData[0].gender,
        homeAway: gameData[0].homeTeam,
        gameCode: gameData[0].gameCode,
      };
    }

    const changeStatus = rosterList.filter((item) => {
      return !rosterSelectList.some(
        (other) => other.participantOrder === item.participantOrder
      );
    });
    await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(LineUpListDataThunk(copyArr));
    await dispatch(onReset());
  };

  const onClickAddRosterHandler = async () => {
    const copyArr = [...lineUpSelectList];
    for (let i = 0; i < copyArr.length; i++) {
      copyArr[i] = { ...copyArr[i], participation: 'N' };
    }
    const changeStatus = rosterList.filter((item) => {
      return !lineUpSelectList.some(
        (other) => other.participantOrder === item.participantOrder
      );
    });
    await dispatch(PostRosterDataThunk(copyArr));
    await dispatch(DeleteRosterDataThunk(lineUpSelectList));
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
          <button onClick={onClickAddLinUpHandler}>선발추가</button>
          <button onClick={onClickAddRosterHandler}>벤치추가</button>
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

export default GameInformPage;
