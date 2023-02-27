import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GameSelectHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <TableHeader>
        <h3>경기 선택</h3>
        <div>
          <SelectBtn onClick={() => navigate('/gameInfo')}>
            엔트리 선택 페이지 이동
          </SelectBtn>
        </div>
      </TableHeader>
    </>
  );
};

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin-left: 5px;
    border: none;
    color: white;
    background-color: #13136b;
  }
`;
const SelectBtn = styled.button`
  margin-right: 5px;
  color: white;
  background-color: #13136b;
  border: none;

  padding: 10px;
  height: 40px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: orange;
    color: white;
    border: none;
    font-weight: 700;
  }
`;
export default GameSelectHeader;
