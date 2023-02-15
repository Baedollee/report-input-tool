import React from 'react';
import styled from 'styled-components';

const GameSelectTable = () => {
  return (
    <Wrap>
      <NameWrap>
        <Name>리그</Name>

        <div>정보</div>
      </NameWrap>
      <hr />
      <NameWrap>
        <Name></Name>
        <div></div>
      </NameWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  height: 200px;
  border: 1px solid black;
  flex-direction: column;
  hr {
    border-top: 2px solid black;
    width: 100%;
  }
`;
const NameWrap = styled.div`
  display: flex;
`;
const Name = styled.p`
  display: flex;
  height: 100%;
  border-right: 1px solid black;
`;
export default GameSelectTable;
