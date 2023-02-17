import React, { useCallback } from 'react';
import styled from 'styled-components';

const SelectMenu = ({ menuSelect, setMenuSelect }) => {
  const onClickMenuSelect = (e) => {
    const { value } = e.target;
    setMenuSelect(value);
  };

  return (
    <>
      <BtnSelectBox>
        <button value={'Home'} onClick={onClickMenuSelect}>
          홈팀
        </button>
        <button value={'Away'} onClick={onClickMenuSelect}>
          어웨이
        </button>
        <button value={'Etc'} onClick={onClickMenuSelect}>
          기타설정
        </button>
      </BtnSelectBox>
    </>
  );
};

const BtnSelectBox = styled.div`
  display: flex;
  gap: 5px;
  height: 100px;

  button {
    display: flex;
    border: 1px solid black;
    color: white;
    background-color: skyblue;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    font-weight: 700;
    height: 35px;
    justify-content: center;
    align-items: center;

    :hover {
      background-color: orange;
      font-size: 25px;
    }
  }
`;
export default SelectMenu;
