import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onChangeMenuName } from 'redux/modules/MenuSelectSlice';
import styled from 'styled-components';

const GameInformHeader = () => {
  const dispatch = useDispatch();

  const value = 'gameSelect';
  return (
    <>
      <TableHeader>
        <h3>경기정보 설정</h3>
        <div>
          <SelectBtn onClick={() => dispatch(onChangeMenuName(value))}>
            X
          </SelectBtn>
        </div>
      </TableHeader>
    </>
  );
};

export default GameInformHeader;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  /* button {
    margin-left: 5px;
    border: none;
    color: white;
    background-color: #13136b;
  } */
`;
const SelectBtn = styled.button`
  margin-right: 5px;
  color: black;
  background-color: white;
  border: none;
  font-weight: 700;
  font-size: 15px;

  padding: 10px;
  height: 40px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  :hover {
    /* background-color: orange;
    color: white;
    border: none;
    font-weight: 700; */
    font-size: 20px;
  }
`;
