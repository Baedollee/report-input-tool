import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  postCodeState,
  MockCodeDataThunk,
} from '../../redux/modules/codeManagementDataSlice';

const TestCodeTable = () => {
  const dispatch = useDispatch();
  const codePostData = {
    codeOrder: 1,
    mainCode: '',
    codeName: '',
    statColumn: '',
    statValue: '',
  };
  const [codeInputText, setCodeInputText] = useState(codePostData);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCodeInputText({ ...codeInputText, [name]: value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(MockCodeDataThunk(codeInputText));
  };

  //   useEffect(() => {}, [onSubmitHandler()]);

  return (
    <Wrap>
      <ListBox>
        <ListDiv>
          <input
            type='text'
            name='codeOrder'
            value={codeInputText.codeOrder}
            onChange={onChangeHandler}
          />
        </ListDiv>

        <ListDiv>
          <input
            type='text'
            name='mainCode'
            value={codeInputText.mainCode}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='codeName'
            value={codeInputText.codeName}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='statColumn'
            value={codeInputText.statColumn}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <input
            type='text'
            name='statValue'
            value={codeInputText.statValue}
            onChange={onChangeHandler}
          />
        </ListDiv>
        <ListDiv>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </ListDiv>
        <ListDiv>
          <button onClick={onSubmitHandler}>등록</button>
        </ListDiv>
      </ListBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
`;
const ListBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const ListDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  width: 80px;
  border: 1px solid black;
  background-color: white;

  input {
    width: 100%;
    height: 20px;
  }
`;
export default TestCodeTable;
