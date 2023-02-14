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
  const gameInform = useSelector((state) => state?.gameInformSlice?.gameData);
  const rosterList = useSelector((state) => state?.gameInformSlice?.rosterList);

  const gameData = [...gameInform];
  console.log('게임 데이터', gameData);

  const lineUpList = useSelector((state) => state?.gameInformSlice?.lineUpList);
  const lineUpSelectList = useSelector(
    (state) => state.gameInformSlice.lineUpSelectList
  );
  const rosterSelectList = useSelector(
    (state) => state.gameInformSlice.rosterSelectList
  );
  console.log('선수리스트 선택', rosterSelectList);

  const [settingSelector, setSettingSelector] = useState('Home');

  const homeAwayRosterList = () => {
    if (settingSelector === 'Home') {
      return rosterList.filter((i) => i.teamId === gameData[0]?.homeTeam);
    } else {
      return rosterList.filter((i) => i.teamId === gameData[0]?.awayTeam);
    }
  };

  // console.log('선수정보', homeAwayRosterList());
  const homeAwayLineUpList = () => {
    if (settingSelector === 'Home') {
      return lineUpList.filter((i) => i.teamId === gameData[0]?.homeTeam);
    } else {
      return lineUpList.filter((i) => i.teamId === gameData[0]?.awayTeam);
    }
  };

  const onClickAddLinUpHandler = async () => {
    const copyArr = [...rosterSelectList];

    for (let i = 0; i < copyArr.length; i++) {
      if (settingSelector === 'Home') {
        copyArr[i] = {
          ...copyArr[i],
          participation: 'Y',
          competitionCode: gameData[0]?.competitionCode,
          gender: gameData[0]?.gender,
          homeAway: '홈',
          gameCode: gameData[0]?.gameCode,
        };
      } else {
        copyArr[i] = {
          ...copyArr[i],
          participation: 'Y',
          competitionCode: gameData[0]?.competitionCode,
          gender: gameData[0]?.gender,
          homeAway: '원정',
          gameCode: gameData[0]?.gameCode,
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
