import React from 'react';
import styled from 'styled-components';
import { titleCategory } from '../../static/MockData';

const ReportTitle = () => {
  return (
    <>
      <Wrap>
        {titleCategory.map((item, index) => (
          <TitleDiv length={item.length} key={`${item}_${index}`}>
            {item}
          </TitleDiv>
        ))}
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  /* width: ${(props) => (props.length > 3 ? '100px' : '60px')}; */
  width: 100px;
  height: 20px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`;

export default ReportTitle;
