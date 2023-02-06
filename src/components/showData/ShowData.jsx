import React from 'react';
import styled from 'styled-components';
import GetData from './getData/GetData';

const ShowData = () => {
  return (
    <>
      <Wrap>
        <GetData />
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ShowData;
