import styled from 'styled-components';

export const EditDeleteBtn = (cell, row, rowIndex, formatExtraData) => {
  return (
    <EditButtonBox>
      <ButtonStyle>수정</ButtonStyle>
      <ButtonStyle>삭제</ButtonStyle>
    </EditButtonBox>
  );
};

export default EditDeleteBtn;

const EditButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
const ButtonStyle = styled.button`
  display: flex;
  background-color: #13136b;
  color: white;
  border: none;
  width: 50px;
  justify-content: center;
`;
