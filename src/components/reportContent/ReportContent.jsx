import React from 'react';
import styled from 'styled-components';
import ShowData from '../showData/ShowData';
import DefaultContents from '../defaultContents/DefaultContents';

const ReportContent = () => {
  return (
    <Wrap>
      <DefaultContents />
      <ShowData />
    </Wrap>
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

export default ReportContent;
