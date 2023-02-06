import React from 'react';
import styled from 'styled-components';
import DefaultContents from '../showData/defaultContents/DefaultContents';
import ShowData from '../showData/ShowData';

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
