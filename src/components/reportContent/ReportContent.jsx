import React from 'react';
import styled from 'styled-components';
import ShowData from '../reportShowData/ReportShowData';
import DefaultContents from '../defaultContents/DefaultContents';

const ReportContent = () => {
  return (
    <WrapDiv>
      <DefaultContents />
    </WrapDiv>
  );
};
const WrapDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ReportContent;
