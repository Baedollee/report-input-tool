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
  gap: 1px;
  button {
    border: 1px solid black;
    background-color: white;
    :hover {
      background-color: orange;
    }
  }
`;
export default SelectMenu;
