import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { titleCategory } from '../../static/MockData';

const ReportTitle = () => {
  const navigate = useNavigate();
  return (
    <>
      <MovePageDiv>
        <button onClick={() => navigate('/codeReport')}>
          코드입력 페이지로 이동
        </button>
      </MovePageDiv>
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

const MovePageDiv = styled.div`
  display: flex;
  height: 100px;
  padding: 0px 20px;
  align-items: center;
  button {
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  /* width: ${(props) => (props.length > 3 ? '100px' : '60px')}; */
  min-width: 100px;
  height: 20px;
`;

export default ReportTitle;
