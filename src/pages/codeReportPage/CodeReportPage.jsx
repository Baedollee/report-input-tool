import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CodeTitle from '../../components/ScreenCode/CodeTitle';
import CodeInput from '../../components/ScreenCode/CodeInput';
import CodeOutput from '../../components/ScreenCode/CodeOutput';

const CodeReportPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <MovePageDiv>
        <button onClick={() => navigate('/')}>라인업페이지로 이동</button>
      </MovePageDiv>
      <Wrap>
        <InputBox>
          <CodeTitle btn={true}></CodeTitle>
          <CodeInput />
        </InputBox>
        <OutputBox>
          <CodeTitle btn={false}></CodeTitle>
          <CodeOutput />
        </OutputBox>
      </Wrap>
    </>
  );
};

const MovePageDiv = styled.div`
  display: flex;
  height: 20px;
  padding: 20px;
  align-items: center;
  button {
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const InputBox = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
`;
const OutputBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-direction: column;
`;
export default CodeReportPage;
