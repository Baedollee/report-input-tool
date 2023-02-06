import React from 'react';
import styled from 'styled-components';
import ReportTitle from '../../components/reportTitle/ReportTitle';
import ReportContent from '../../components/reportContent/ReportContent';
import ShowData from '../../components/reportShowData/ReportShowData';

const ReportInput = () => {
  return (
    <WrapDiv>
      <ReportTitle />
      <ReportContent />
      <ShowData />
    </WrapDiv>
  );
};

const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ReportInput;
