import React from 'react';
import styled from 'styled-components';
import CodeInput from '../../components/codeInput/CodeInput';
import CodeOutput from '../../components/codeOutput/CodeOutput';
import CodeTitle from '../../components/codeTitle/CodeTitle';

const CodeReportPage = () => {
  return (
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
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;
const InputBox = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  background-color: blue;
`;
const OutputBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  background-color: red;
`;
export default CodeReportPage;
