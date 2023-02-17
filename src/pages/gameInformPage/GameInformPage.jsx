import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameDataTable from 'components/ScreenPlayerList/GameDataTable';
import styled from 'styled-components';
import LineUpListTable from 'components/ScreenPlayerList/LineUpListTable';
import RosterListTable from 'components/ScreenPlayerList/RosterListTable';
import {
  DeleteRosterDataThunk,
  PostRosterDataThunk,
  PostLineUpListDataThunk,
  onChange,
  onReset,
  GetRosterDataThunk,
  GameDataThunk,
  GetLineUpListDataThunk,
} from 'redux/modules/gameInformSlice';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import SelectMenu from 'components/ScreenPlayerList/SelectMenu';

const GameInformPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    gameData,
    rosterList,
    lineUpList,
    lineUpSelectList,
    rosterSelectList,
  } = useSelector((state) => state?.gameInformSlice);

  const [menuSelect, setMenuSelect] = useState('Home');

  // console.log('게임정보', gameList);

  // console.log('선수단 명단');
  // console.log(rosterList);

  // console.log('선수단 선택 명단');
  // console.log(rosterSelectList);

  // console.log('라인업 리스트들', lineUpList);

  const homeAwayRosterList = () => {
    if (menuSelect === 'Home') {
      return rosterList.filter((i) => i.teamId === gameData?.homeTeam);
    } else {
      return rosterList.filter((i) => i.teamId === gameData?.awayTeam);
    }
  };

  const homeAwayLineUpList = () => {
    if (menuSelect === 'Home') {
      return lineUpList.filter((i) => i.teamId === gameData?.homeTeam);
    } else {
      return lineUpList.filter((i) => i.teamId === gameData?.awayTeam);
    }
  };

  const onClickAddLinUpHandler = async () => {
    const copyArr = [...rosterSelectList];

    for (let i = 0; i < copyArr.length; i++) {
      if (menuSelect === 'Home') {
        copyArr[i] = {
          ...copyArr[i],
          // participation: 'Y',
          competitionCode: gameData?.competitionCode,
          gender: gameData?.gender,
          homeAway: 'home',
          gameCode: gameData?.gameCode,
          startingReserve: 'STR',
        };

        delete copyArr[i].lineupStatus;
        delete copyArr[i].role;
      } else {
        copyArr[i] = {
          ...copyArr[i],
          // participation: 'Y',
          competitionCode: gameData?.competitionCode,
          gender: gameData?.gender,
          homeAway: 'away',
          gameCode: gameData?.gameCode,
          startingReserve: 'STR',
        };
        delete copyArr[i].lineupStatus;
        delete copyArr[i].role;
      }
    }

    const changeStatus = homeAwayRosterList().filter((item) => {
      return !rosterSelectList.some(
        (other) => other.participantName === item.participantName
      );
    });
    console.log('포스트 데이터');

    // const formData = new FormData();
    // formData.append('copyArr', JSON.stringify(copyArr));

    // console.log('멀티폼');
    // console.log(formData);

    await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(PostLineUpListDataThunk(copyArr));
    await dispatch(onReset());
  };

  const onClickAddRosterHandler = async () => {
    const copyArr = [...lineUpSelectList];
    for (let i = 0; i < copyArr.length; i++) {
      copyArr[i] = { ...copyArr[i], participation: 'N' };
    }
    const changeStatus = homeAwayLineUpList().filter((item) => {
      return !lineUpSelectList.some(
        (other) => other.participantName === item.participantName
      );
    });
    await dispatch(PostRosterDataThunk({ ...copyArr }));
    await dispatch(DeleteRosterDataThunk(lineUpSelectList));
    await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(onReset());
  };

  // useEffect(() => {
  //   dispatch(GameDataThunk());
  //   dispatch(GetRosterDataThunk());
  //   return () => dispatch(onReset());
  // }, [menuSelect]);

  return (
    <WrapDiv>
      <button onClick={() => navigate('/')}>홈으로 이동</button>
      <SelectMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
      <div>
        <GameDataTable gameData={gameData} />
      </div>
      <BoxWrap>
        <LineUpListTable lineUpList={homeAwayLineUpList()} />
        <MiddleBoxDiv>
          <button onClick={onClickAddLinUpHandler}>선발추가</button>
          <button onClick={onClickAddRosterHandler}>벤치추가</button>
        </MiddleBoxDiv>
        <RosterListTable rosterList={homeAwayRosterList()} />
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
  align-items: center;
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
