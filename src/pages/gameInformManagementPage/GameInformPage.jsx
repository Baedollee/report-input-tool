import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameDataTable from 'components/Common/GameDataTable';
import styled from 'styled-components';
import LineUpListTable from 'components/ScreenGameInformManagement/LineUpListTable';
import RosterListTable from 'components/ScreenGameInformManagement/RosterListTable';
import {
  DeleteRosterDataThunk,
  PostLineUpListDataThunk,
  onChange,
  onReset,
  GetLineUpListDataThunk,
  PostRosterDataThunk,
  GetRosterDataThunk,
  DeleteLineUpListDataThunk,
  isSelect,
} from 'redux/modules/gameInformSlice';
import { useNavigate } from 'react-router-dom';
import SelectMenu from 'components/ScreenGameInformManagement/SelectMenu';
import Arrow from '../../assets/icons/Arrow.png';
const GameInformPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    gameData,
    rosterList,
    lineUpList,
    lineUpSelectList,
    rosterSelectList,
    competitionDataList,
  } = useSelector((state) => state?.gameInformSlice);
  console.log('게임 정보');
  console.log(gameData);
  console.log('선수 리스트');
  console.log(rosterList);
  const [menuSelect, setMenuSelect] = useState('Home');

  const homeAwayRosterList = () => {
    if (menuSelect === 'Home') {
      return rosterList.filter((i) => i.teamId === gameData[0]?.homeTeam);
    } else {
      return rosterList.filter((i) => i.teamId === gameData[0]?.awayTeam);
    }
  };

  const homeAwayLineUpList = () => {
    if (menuSelect === 'Home') {
      return lineUpList.filter((i) => i.teamId === gameData[0]?.homeTeam);
    } else {
      return lineUpList.filter((i) => i.teamId === gameData[0]?.awayTeam);
    }
  };

  const onClickAddLinUpHandler = async () => {
    const copyArr = [...rosterSelectList];
    // const copyArrRoster = [...copyArr];
    for (let i = 0; i < copyArr.length; i++) {
      if (menuSelect === 'Home') {
        copyArr[i] = {
          ...copyArr[i],
          // participation: 'Y',
          // competitionCode: gameData[0]?.competitionCode,
          // gender: gameData[0]?.gender,
          // homeAway: 'home',
          // gameCode: gameData[0]?.gameCode,
          // startingReserve: 'STR',
        };

        delete copyArr[i].lineupStatus;
        delete copyArr[i].participantOrder;
        // delete copyArr[i].role;
        delete copyArr[i].createdTime;
      } else {
        copyArr[i] = {
          ...copyArr[i],
          // participation: 'Y',
          // competitionCode: gameData[0]?.competitionCode,
          // gender: gameData[0]?.gender,
          // homeAway: 'away',
          // gameCode: gameData[0]?.gameCode,
          // startingReserve: 'STR',
        };
        delete copyArr[i].lineupStatus;
        // delete copyArr[i].role;
        delete copyArr[i].participantOrder;
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
      await dispatch(onReset([]));
    }
  };

  const onClickAddRosterHandler = async () => {
    const copyArr = [...lineUpSelectList];
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
    await dispatch(onReset([]));
  };

  return (
    <WrapDiv>
      <HomeBtn onClick={() => navigate('/')}>홈으로 이동</HomeBtn>

      <div>
        <GameDataTable
          gameData={gameData}
          competitionDataList={competitionDataList}
        />
      </div>
      <SelectMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
      <BoxWrap>
        <LineUpListTable lineUpList={homeAwayLineUpList()} />
        <MiddleBoxDiv>
          <div>
            <img src={Arrow} onClick={onClickAddLinUpHandler} />
          </div>
          <div>
            <ArrowRight src={Arrow} onClick={onClickAddRosterHandler} />
          </div>
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
  img {
    width: 70px;
    height: 100px;
  }
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

const ArrowRight = styled.img`
  display: flex;
  transform: rotate(180deg);
`;

export default GameInformPage;
