import React from 'react';
import styled from 'styled-components';

const RefereeRegisterInputTable = () => {
  return (
    <Wrap>
      <Container>
        <TableBox>
          <table>
            <tbody>
              <tr>
                <th>이름</th>
                <td>입력</td>
                <th>성별</th>
                <td>선택</td>
              </tr>
              <tr>
                <th>소속</th>
                <td>입력</td>
                <th>보직구분</th>
                <td>입력</td>
              </tr>
            </tbody>
          </table>
          <ButtonBox>
            <button>조회</button>
          </ButtonBox>
        </TableBox>
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  background-color: skyblue;
  padding: 5px;
  table {
    /* display: flex; */
    flex-direction: column;
    border: 1px solid black;
    border-collapse: collapse;

    tr {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
    th {
      text-align: center;
      background-color: gray;
      border: 1px solid black;
      min-width: 100px;
    }
    td {
      width: 310px;
      background-color: white;
    }
  }
`;
const Container = styled.div`
  display: flex;
`;

const TableBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ButtonBox = styled.div`
  display: flex;
  width: 100px;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  button {
    width: 60px;
    height: 30px;
    border: none;
    color: white;
    background-color: #13136b;
  }
`;

export default RefereeRegisterInputTable;
