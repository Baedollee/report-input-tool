import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const GetData = () => {
  const data = useSelector((state) => state.dataList.dataList);

  return (
    <>
      {data.map((item, index) => (
        <Wrap key={`${item}_${index}`}>
          <ListDiv length={item.length}>{item.selection}</ListDiv>
          <ListDiv length={item.length}>{item.procedure}</ListDiv>
          <ListDiv length={item.length}>{item.name}</ListDiv>
          <ListDiv length={item.length}>{item.position}</ListDiv>
          <ListDiv length={item.length}>{item.playerNumber}</ListDiv>
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
`;

export default GetData;
