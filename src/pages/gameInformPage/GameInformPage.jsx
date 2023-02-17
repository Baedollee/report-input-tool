import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameDataTable from 'components/Common/GameDataTable';
import styled from 'styled-components';
import LineUpListTable from 'components/ScreenPlayerList/LineUpListTable';
import RosterListTable from 'components/ScreenPlayerList/RosterListTable';
import {
  DeleteRosterDataThunk,
  PostLineUpListDataThunk,
  onChange,
  onReset,
  GetLineUpListDataThunk,
  PostRosterDataThunk,
  GetRosterDataThunk,
  DeleteLineUpListDataThunk,
} from 'redux/modules/gameInformSlice';
import { useNavigate } from 'react-router-dom';
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
    const copyArrRoster = [...copyArr];
    console.log('으아아아아ㅏㅇ');
    console.log(copyArr);
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
        delete copyArr[i].createdTime;
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
        delete copyArr[i].createdTime;
      }
    }

    // 팀선수 명단 참가여부 y 값 변경
    // for (let i = 0; i < copyArrRoster.length; i++) {
    //   copyArrRoster[i] = { ...copyArrRoster[i], participation: 'Y' };
    // }

    // 이미 선택된 선수 필터 처리
    const postFilter = lineUpList.filter((i) => {
      return copyArr.some(
        (other) => other.participantName === i.participantName
      );
    });

    const changeStatus = homeAwayRosterList().filter((item) => {
      return !rosterSelectList.some(
        (other) => other.participantName === item.participantName
      );
    });

    if (postFilter.length > 0) {
      window.alert('이미 선택된 선수가 있습니다');
    } else {
      await dispatch(onChange([...changeStatus, ...copyArr]));
      await dispatch(PostLineUpListDataThunk(copyArr));
      // await dispatch(PostRosterDataThunk(copyArrRoster));
      await dispatch(GetLineUpListDataThunk());
      // await dispatch(GetRosterDataThunk());
      await dispatch(onReset());
    }
  };

  const onClickAddRosterHandler = async () => {
    const copyArr = [...lineUpSelectList];
    console.log('자 드가자아아');
    console.log(copyArr);
    // for (let i = 0; i < copyArr.length; i++) {
    //   // copyArr[i] = { ...copyArr[i], participation: 'N' };
    //   delete copyArr[i].createdTime;
    // }
    const changeStatus = homeAwayLineUpList().filter((item) => {
      return !lineUpSelectList.some(
        (other) => other.participantName === item.participantName
      );
    });

    // await dispatch(PostRosterDataThunk(...copyArr));
    await dispatch(DeleteLineUpListDataThunk(lineUpSelectList));
    await dispatch(GetLineUpListDataThunk());
    await dispatch(GetRosterDataThunk());
    // await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(onReset());
  };

  return (
    <WrapDiv>
      <HomeBtn onClick={() => navigate('/')}>홈으로 이동</HomeBtn>
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
const HomeBtn = styled.button`
  color: #ffffff;
  background-color: #5ab427;
  border: none;
  font-size: 20px;
  width: 120px;
  margin-bottom: 10px;
  border-radius: 20px;
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
    :hover {
      width: 75px;
      height: 55px;
      font-size: 17px;
    }
  }
`;

export default GameInformPage;
