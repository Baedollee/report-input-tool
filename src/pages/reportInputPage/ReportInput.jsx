import React from 'react';
import styled from 'styled-components';
import ReportTitle from '../../components/report/reportTitle/ReportTitle';
import ReportInputData from '../../components/report/reportInputData/ReportInputData';
import ReportShowData from '../../components/report/reportShowData/ReportShowData';

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
