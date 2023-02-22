import React from 'react';
import styled from 'styled-components';

const PlayerRegisterInputTable = () => {
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
                <th>소속팀</th>
                <td>입력</td>
                <th style={{ backgroundColor: 'white', border: 'none' }}></th>
                <td></td>
              </tr>
              <tr>
                <th>포지션</th>
                <td>입력</td>
                <th>배번</th>
                <td>입력</td>
                <th>신분</th>
                <td>선택</td>
                <th>국적</th>
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
  background-color: skyblue;
  padding: 5px;
  /* height: 100vh; */
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
      background-color: white;
      width: 310px;
    }
  }
`;
const Container = styled.div`
  display: flex;
`;

const TableBox = styled.div`
  display: flex;
  /* width: 100%; */
`;
const ButtonBox = styled.div`
  display: flex;
  width: 100px;
  justify-content: flex-end;
  align-items: flex-end;
  button {
    width: 60px;
    height: 30px;
    border: none;
    color: white;
    background-color: #13136b;
  }
`;
export default PlayerRegisterInputTable;
