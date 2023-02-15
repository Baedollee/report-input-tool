import React, { useEffect, useState } from 'react';
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

  // console.log('게임정보', gameData);
  // console.log('선수단 명단', rosterList);
  // console.log('라인업 리스트들', lineUpList);

  const [settingSelector, setSettingSelector] = useState('Home');

  const homeAwayRosterList = () => {
    if (settingSelector === 'Home') {
      return rosterList.filter((i) => i.teamId === gameData?.homeTeam);
    } else {
      return rosterList.filter((i) => i.teamId === gameData?.awayTeam);
    }
  };

  const homeAwayLineUpList = () => {
    if (settingSelector === 'Home') {
      return lineUpList.filter((i) => i.teamId === gameData?.homeTeam);
    } else {
      return lineUpList.filter((i) => i.teamId === gameData?.awayTeam);
    }
  };

  const onClickAddLinUpHandler = async () => {
    const copyArr = [...rosterSelectList];

    for (let i = 0; i < copyArr.length; i++) {
      if (settingSelector === 'Home') {
        copyArr[i] = {
          ...copyArr[i],
          participation: 'Y',
          competitionCode: gameData?.competitionCode,
          gender: gameData?.gender,
          homeAway: 'home',
          gameCode: gameData?.gameCode,
          startingReserve: 'STR',
        };
      } else {
        copyArr[i] = {
          ...copyArr[i],
          participation: 'Y',
          competitionCode: gameData?.competitionCode,
          gender: gameData?.gender,
          homeAway: 'away',
          gameCode: gameData?.gameCode,
        };
      }
    }

    const changeStatus = homeAwayRosterList().filter((item) => {
      return !rosterSelectList.some(
        (other) => other.participantName === item.participantName
      );
    });

    await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(PostLineUpListDataThunk(copyArr));
    await dispatch(onReset());
  };

  const onClickSettingSelect = (e) => {
    const { value } = e.target;
    setSettingSelector(value);
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
    await dispatch(PostRosterDataThunk(copyArr));
    await dispatch(DeleteRosterDataThunk(lineUpSelectList));
    await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(onReset());
  };

  useEffect(() => {
    dispatch(GameDataThunk());
    dispatch(GetRosterDataThunk());
    dispatch(GetLineUpListDataThunk());
    return () => dispatch(onReset());
  }, [settingSelector]);

  return (
    <WrapDiv>
      <button onClick={() => navigate('/')}>홈으로 이동</button>
      <BtnSelectBox>
        <button value={'Home'} onClick={onClickSettingSelect}>
          홈팀
        </button>
        <button value={'Away'} onClick={onClickSettingSelect}>
          어웨이
        </button>
        <button value={'Etc'} onClick={onClickSettingSelect}>
          기타설정
        </button>
      </BtnSelectBox>
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
const BtnSelectBox = styled.div`
  display: flex;
  gap: 1px;
  button {
    border: 1px solid black;
    background-color: white;
    :hover {
      background-color: orange;
    }
  }
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
