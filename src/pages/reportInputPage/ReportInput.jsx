import React from 'react';
import styled from 'styled-components';
import ReportTitle from '../../components/ScreenReport/ReportTitle';
import ReportInputData from '../../components/ScreenReport/ReportInputData';
import ReportShowData from '../../components/ScreenReport/ReportShowData';

const ReportInput = () => {
  return (
    <WrapDiv>
      <ReportTitle />
      <ReportInputData />
      <ReportShowData />
    </WrapDiv>
  );
};

const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ReportInput;
