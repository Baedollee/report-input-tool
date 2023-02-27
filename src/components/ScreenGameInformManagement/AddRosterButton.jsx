import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteLineUpListDataThunk,
  GetLineUpListDataThunk,
  GetRosterDataThunk,
  onReset,
} from 'redux/modules/gameInformSlice';
import styled from 'styled-components';
import Arrow from '../../assets/icons/Arrow.png';

const AddRosterButton = ({ menuSelect }) => {
  const dispatch = useDispatch();
  const { lineUpSelectList } = useSelector((state) => state?.gameInformSlice);

  const onClickAddRosterHandler = async () => {
    const copyArr = [...lineUpSelectList];

    // 참가 여부 Y or N 으로 바꾸는
    // for (let i = 0; i < copyArr.length; i++) {
    //   // copyArr[i] = { ...copyArr[i], participation: 'N' };
    //   delete copyArr[i].createdTime;
    // }

    // const changeStatus = homeAwayLineUpList().filter((item) => {
    //   return !lineUpSelectList.some(
    //     (other) => other.participantName === item.participantName
    //   );
    // });

    // await dispatch(PostRosterDataThunk(...copyArr));
    // await dispatch(onChange([...changeStatus, ...copyArr]));
    await dispatch(DeleteLineUpListDataThunk(lineUpSelectList));
    await dispatch(GetLineUpListDataThunk());
    await dispatch(GetRosterDataThunk());
    await dispatch(onReset([]));
  };
  return (
    <Wrap>
      <Img src={Arrow} onClick={onClickAddRosterHandler} />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
`;
const Img = styled.img`
  display: flex;
  transform: rotate(180deg);
  width: 70px;
  height: 100px;
`;

export default AddRosterButton;
