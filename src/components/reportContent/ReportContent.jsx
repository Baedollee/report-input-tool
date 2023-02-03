import React from 'react';
import styled from 'styled-components';
import DefaultContents from '../DefaultContents';

const ReportContent = () => {
  return (
    <>
      <Wrap>
        <DefaultContents />
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

export default ReportContent;
