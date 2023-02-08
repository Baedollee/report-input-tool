import React from 'react';
import styled from 'styled-components';

const LeftTable = () => {
  return (
    <>
      <LeftBoxDiv>
        <p>선수단(엔트리)</p>
        <TableWrap>
          <tr>
            <td>선수명</td>
            <td>선수번호</td>
            <td>배번</td>
            <td>포지션</td>
            <td>신분</td>
          </tr>
          <tr>
            <td>배성열</td>
            <td>배성열</td>
            <td>배성열</td>
            <td>배성열</td>
            <td>배성열</td>
          </tr>
          <tr>
            <td>배성열</td>
            <td>배성열</td>
            <td>배성열</td>
            <td>배성열</td>
            <td>배성열</td>
          </tr>
        </TableWrap>
      </LeftBoxDiv>
    </>
  );
};
const LeftBoxDiv = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
`;
const TableWrap = styled.table`
  border-spacing: 0;
  border: 1px solid black;
  td {
    width: 200px;
    border: 1px solid black;
  }
`;

export default LeftTable;