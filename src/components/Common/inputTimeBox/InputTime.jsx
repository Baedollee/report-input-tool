import React from 'react';
import styled from 'styled-components';

const InputTime = () => {
  return (
    <>
      <Wrap>
        <Box>
          <input type='text' placeholder='MM' />월
          <input type='text' placeholder='DD' />일
        </Box>
        <Box>
          <input type='text' placeholder='HH' />시
          <input type='text' placeholder='MM' />분
        </Box>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  display: flex;
  input {
    width: 40px;
  }
`;

export default InputTime;
