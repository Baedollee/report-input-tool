import React from 'react';
import styled from 'styled-components';

const GameInformSelectMenu = ({ menuSelect, setMenuSelect }) => {
  const onClickMenuSelect = (e) => {
    const { value } = e.target;
    setMenuSelect(value);
  };

  return (
    <>
      <BtnSelectBox>
        <SelectBtn
          value='Home'
          menuSelect={menuSelect}
          onClick={onClickMenuSelect}>
          홈팀
        </SelectBtn>
        <SelectBtn
          value='Away'
          menuSelect={menuSelect}
          onClick={onClickMenuSelect}>
          어웨이
        </SelectBtn>
        <SelectBtn
          value='Etc'
          menuSelect={menuSelect}
          onClick={onClickMenuSelect}>
          기타설정
        </SelectBtn>
      </BtnSelectBox>
    </>
  );
};

const BtnSelectBox = styled.div`
  display: flex;
`;

const SelectBtn = styled.button`
  display: flex;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: none;
  color: black;
  background-color: ${(props) =>
    props.value === props.menuSelect ? 'skyblue' : 'white'};
  font-size: 20px;
  font-weight: 700;
  height: 35px;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: orange;
    font-size: 25px;
  }
`;
export default GameInformSelectMenu;
