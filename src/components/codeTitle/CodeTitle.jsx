import React from 'react';
import styled from 'styled-components';

const CodeTitle = ({ btn }) => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //    dispatch(MockDataThunk(inputText));
  };
  return (
    <TableWrap>
      {/* {btn ? (
        <BtnBox>
          <button onClick={onSubmitHandler}>등록</button>
        </BtnBox>
      ) : (
        <BlockDiv></BlockDiv>
      )} */}

      <TableBox>
        <TableDiv>#</TableDiv>
        <TableDiv>코드</TableDiv>
        <TableDiv>코드 이름</TableDiv>
        <TableDiv>통계 컬럼</TableDiv>
        <TableDiv>통계 값</TableDiv>
        <TableDiv>수정 삭제</TableDiv>
        <TableDiv>등록</TableDiv>
      </TableBox>
    </TableWrap>
  );
};
const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const BlockDiv = styled.div`
  display: flex;
  margin: 10px 5px;
  height: 20px;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 5px;
  button {
    width: 60px;
    height: 20px;
  }
`;
const TableBox = styled.div`
  display: flex;
  background-color: #bce4f4;
`;
const TableDiv = styled.div`
  display: flex;
  border: 1px solid black;
  width: 80px;
  justify-content: center;
`;
export default CodeTitle;
