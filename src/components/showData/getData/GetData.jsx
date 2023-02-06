import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { GetMockDataThunk } from '../../../redux/modules/dataSlice';

const GetData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataList.getDataList);
  useEffect(() => {
    dispatch(GetMockDataThunk());
  }, [JSON.stringify(data)]);
  console.log('-------getdata', data);
  return (
    <>
      {data.map((item, index) => (
        <Wrap key={`${item}_${index}`}>
          <ListDiv length={item.length}>{item.competitionCode}</ListDiv>
          <ListDiv length={item.length}>{item.gender}</ListDiv>
          <ListDiv length={item.length}>{item.gameCode}</ListDiv>
          <ListDiv length={item.length}>{item.teamName}</ListDiv>
          <ListDiv length={item.length}>{item.startingReserve}</ListDiv>
          <ListDiv length={item.length}>{item.startingOrder}</ListDiv>
          <ListDiv length={item.length}>{item.participantName}</ListDiv>
          <ListDiv length={item.length}>{item.participantPosition}</ListDiv>
          <ListDiv length={item.length}>{item.participantBIB}</ListDiv>
        </Wrap>
      ))}
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid black;
  /* width: ${(props) => (props.length > 3 ? '100px' : '60px')}; */
  width: 100px;
  height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
`;

export default GetData;
