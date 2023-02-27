import React, { useState } from 'react';
import styled from 'styled-components';
import SelectDivision from 'components/Common/inputSelector/SelectDivision';
import SelectGender from 'components/Common/inputSelector/SelectGender';
import SelectIdentity from 'components/Common/inputSelector/SelectIdentity';
import SelectSeason from 'components/Common/inputSelector/SelectSeason';
import SelectTeam from 'components/Common/inputSelector/SelectTeam';
import InputText from 'components/Common/inputTextBox/InputText';

const GameSelectInputTable = () => {
  const [season, setSeason] = useState('');

  return (
    <Wrap>
      <Container>
        <TableBox>
          <table>
            <tbody>
              <tr>
                <th>대회명</th>
                <td>
                  <SelectDivision />
                </td>
                <th>시즌</th>
                <td>
                  <SelectSeason />
                </td>
                <th>경기일정</th>
                <td></td>
                <th style={{ backgroundColor: 'white', border: 'none' }}></th>
                <td></td>
              </tr>
              <tr>
                <th>성별</th>
                <td>
                  <SelectGender />
                </td>
                <th>홈팀</th>
                <td></td>
                <th>어웨이팀</th>
                <td></td>
                <th style={{ backgroundColor: 'white', border: 'none' }}></th>
                <td></td>
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
  width: 100%;
  justify-content: space-between;
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

export default GameSelectInputTable;
