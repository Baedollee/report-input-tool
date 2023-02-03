import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { MockDataThunk } from '../redux/modules/dataSlice';
import { defaultMockData, mock } from '../static/MockData';

const DefaultContents = () => {
  const dispatch = useDispatch();
  const data1 = defaultMockData;
  const postData = {
    selection: '',
    procedure: '',
    name: '',
    position: '',
    playerNumber: '',
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
    <>
      {data1.map((item, index) => (
        <ListDiv length={item.length} key={`${item}_${index}`}>
          {item}
        </ListDiv>
      ))}
      <ListForm>
        <ListDiv>
          <input
            type='text'
            name='selection'
            value={inputText.selection}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='procedure'
            value={inputText.procedure}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='name'
            value={inputText.name}
            onChange={onChangeHandler}
          />
        </ListDiv>

        <ListDiv>
          <input
            type='text'
            name='position'
            value={inputText.position}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='playerNumber'
            value={inputText.playerNumber}
            onChange={onChangeHandler}
          />
        </ListDiv>
      </ListForm>
      <button onClick={onSubmitHandler}>+</button>
    </>
  );
};

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
const ListForm = styled.form`
  display: flex;
`;

export default DefaultContents;
