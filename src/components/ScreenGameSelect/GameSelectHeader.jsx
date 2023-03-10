import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onChangeMenuName } from 'redux/modules/MenuSelectSlice';
import styled from 'styled-components';

const GameSelectHeader = () => {
  const dispatch = useDispatch();

  const value = 'gameInformManagement';
  return (
    <>
      <TableHeader>
        <h3>경기 선택</h3>
        <div>
          <SelectBtn onClick={() => dispatch(onChangeMenuName(value))}>
            경기정보 설정 이동
          </SelectBtn>
        </div>
      </TableHeader>
    </>
  );
};

export default GameSelectHeader;

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
