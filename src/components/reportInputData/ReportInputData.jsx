import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MockDataThunk } from '../../redux/modules/dataSlice';

const DefaultContents = () => {
  const dispatch = useDispatch();
  const postData = {
    competitionCode: '22-23V',
    gender: 'M',
    gameCode: '22-23VMENR3-123',
    homeAway: 'home',
    teamId: 'AAAAA',
    teamName: '대한항공',
    startingReserve: '',
    participantId: 'CCCCC',
    startingOrder: 0,
    participantName: '',
    participantPosition: '',
    participantBIB: '',
  };
  const [inputText, setInputText] = useState(postData);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputText({ ...inputText, [name]: value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(MockDataThunk(inputText));
  };

  // useEffect(() => {

  // }, []);

  return (
    <Wrap>
      <ListBox>
        {/* {data1.map((item, index) => (
            <ListDiv length={item.length} key={`${item}_${index}`}>
              {item}
            </ListDiv>
          ))} */}
        {/* <ListForm> */}
        <ListDiv>
          <input
            type='text'
            name='competitionCode'
            value={inputText.competitionCode}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='gender'
            value={inputText.gender}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='gameCode'
            value={inputText.gameCode}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='homeAway'
            value={inputText.homeAway}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='teamId'
            value={inputText.teamId}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='teamName'
            value={inputText.teamName}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='startingReserve'
            value={inputText.startingReserve}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='participantId'
            value={inputText.participantId}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='number'
            name='startingOrder'
            value={inputText.startingOrder}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='participantName'
            value={inputText.participantName}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='participantPosition'
            value={inputText.participantPosition}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='participantBIB'
            value={inputText.participantBIB}
            onChange={onChangeHandler}
          />
        </ListDiv>
      </ListBox>
      {/* </ListForm> */}
      <BottomBox>
        <ClickBtn onClick={onSubmitHandler}>+</ClickBtn>
      </BottomBox>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  /* width: ${(props) => (props.length > 3 ? '100px' : '60px')}; */
  width: 100px;
  min-width: 100px;
  height: 20px;
  /* text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block; */
  input {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
const ClickBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 100px;
`;

export default DefaultContents;
