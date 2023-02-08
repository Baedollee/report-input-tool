import LeftTable from 'components/entry/LeftTable';
import RightTable from 'components/entry/RightTable';
import React from 'react';
import styled from 'styled-components';

const EntryPage = () => {
  return (
    <WrapDiv>
      <LeftTable />
      <MiddleBoxDiv>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </MiddleBoxDiv>
      <RightTable />
    </WrapDiv>
  );
};

const WrapDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 10px;
  flex-direction: row;
`;

const MiddleBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
`;

export default EntryPage;
