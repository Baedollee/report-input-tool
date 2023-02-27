import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetLineUpListDataThunk,
  onChange,
  onReset,
  PostLineUpListDataThunk,
} from 'redux/modules/gameInformSlice';
import styled from 'styled-components';
import Arrow from '../../assets/icons/Arrow.png';

const AddLineUpButton = ({ menuSelect }) => {
  const dispatch = useDispatch();
  const { rosterSelectList, lineUpList } = useSelector(
    (state) => state.gameInformSlice
  );

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

    // const changeStatus = homeAwayRosterList().filter((item) => {
    //   return !rosterSelectList.some(
    //     (other) => other.participantName === item.participantName
    //   );
    // });

    if (postFilter.length > 0) {
      window.alert('이미 선택된 선수가 있습니다');
    } else {
      // await dispatch(onChange([...changeStatus, ...copyArr]));
      await dispatch(PostLineUpListDataThunk(copyArr));
      // await dispatch(PostRosterDataThunk(copyArrRoster));
      await dispatch(GetLineUpListDataThunk());
      // await dispatch(GetRosterDataThunk());
      await dispatch(onReset([]));
    }
  };
  return (
    <Wrap>
      <Img src={Arrow} onClick={onClickAddLinUpHandler} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 70px;
  height: 100px;
`;

export default AddLineUpButton;
